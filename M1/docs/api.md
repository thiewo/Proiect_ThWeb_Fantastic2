# Contract API

Acest document descrie contractul HTTP al aplicației pentru rezervări la evenimente.
Endpointurile marcate ca „Planificat” sunt proiectate pentru implementări viitoare și nu
exista încă în server.

## Convenții generale

- Toate răspunsurile JSON sunt obiecte sau array-uri JSON transmise de server și
  transformate de client în valori JavaScript.
- Câmpurile `id` sunt identificatori opaci de tip string.
- Datele sunt reprezentate ca string-uri ISO 8601, de exemplu `2026-12-20T18:00:00Z`.
- Autentificarea viitoare se va realiza prin sesiune; rolurile din client nu sunt
  suficiente pentru autorizare, iar permisiunea se verifică și în API.

Răspunsurile de eroare planificate au forma:

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Operația necesită rolul organizator."
  }
}
```

## GET /api/health

Verifică dacă serviciul răspunde. Endpoint implementat.

**Request**

- Metodă: `GET`
- URL: `/api/health`
- Corp: fără corp

**Response — 200 OK**

```json
{"ok":true}
```

`GET` cere date de la server. Calea `/api/health` identifică resursa verificată.
Corpul răspunsului este JSON text; clientul îl transformă într-un obiect JavaScript.

---

## Planificat: autentificare și sesiuni

### POST /api/auth/login

Autentifică utilizatorul și creează o sesiune.

```json
{
  "email": "student@example.com",
  "password": "parola-utilizatorului"
}
```

Răspuns — `200 OK`:

```json
{
  "user": {
    "id": "user-1",
    "email": "student@example.com",
    "role": "STUDENT"
  }
}
```

Parola se verifică fără a stoca sau returna parola în clar. Tokenul brut al sesiunii
există numai la client și numai hash-ul acestuia se stochează în tabelul `Sessions`.
Răspunsurile `401` și `403` sunt posibile conform permisiunilor.

### POST /api/auth/logout

Invalidează sesiunea curentă. Răspuns — `204 No Content`.

---

## Planificat: evenimente

### GET /api/events

Returnează evenimentele publicate pentru vizitatori și studenți.

Răspuns — `200 OK`:

```json
[
  {
    "id": "event-1",
    "title": "Atelier web",
    "date": "2026-12-20T18:00:00Z",
    "capacity": 5,
    "allocated": 2,
    "available": 3,
    "published": true
  }
]
```

`available = capacity - allocated`. `allocated` contează numai rezervările `HELD`
neexpirate și `CONFIRMED` cu bilet valabil.

### POST /api/events

Permis numai organizatorului autenticat. Creează un eveniment; câmpurile
`allocated` și `id` sunt gestionate de server.

```json
{
  "title": "Atelier web",
  "date": "2026-12-20T18:00:00Z",
  "capacity": 5,
  "published": false
}
```

Răspuns — `201 Created`:

```json
{
  "id": "event-1",
  "title": "Atelier web",
  "date": "2026-12-20T18:00:00Z",
  "capacity": 5,
  "allocated": 0,
  "published": false
}
```

Contractele viitoare pentru publicare și modificarea unui eveniment ar urma să folosească
același obiect `Events`. Utilizatorul cu alt rol primește `403 Forbidden`.

---

## Planificat: rezervări

### POST /api/events/:eventId/reservations

Permis studentului autentificat. Cere un loc disponibil pentru eveniment și creează o
rezervare temporară `HELD`.

Răspuns — `201 Created`:

```json
{
  "id": "reservation-1",
  "userId": "user-1",
  "eventId": "event-1",
  "status": "HELD",
  "expiresAt": "2026-12-20T18:10:00Z"
}
```

Cererea este respinsă cu `409 Conflict` dacă nu mai există locuri disponibile sau cu
`404 Not Found` dacă evenimentul nu există ori nu este publicat.

### POST /api/reservations/:reservationId/confirm

Permite studentului proprietarului să confirme rezervarea înainte de `expiresAt`.
Confirmarea creează exact un bilet valid.

Răspuns — `200 OK`:

```json
{
  "reservation": {
    "id": "reservation-1",
    "status": "CONFIRMED"
  },
  "ticket": {
    "id": "ticket-1",
    "reservationId": "reservation-1",
    "status": "VALID"
  }
}
```

Rezervarea altui utilizator produce `403 Forbidden`; o rezervare expirată sau confirmată
de două ori produce `409 Conflict`.

### DELETE /api/reservations/:reservationId

Permite studentului proprietarului să anuleze rezervarea.
Anularea marchează rezervarea ca `CANCELLED`, marchează biletul asociat ca `INVALID`
dacă există și eliberează locul o singură dată.

Răspuns — `204 No Content`.

Reaplicarea anulării nu mai eliberează locul; răspunsul este `409 Conflict`.

### GET /api/reservations/:reservationId/ticket

Permite studentului proprietarului să obțină biletul aferent rezervării.

Răspuns — `200 OK`:

```json
{
  "id": "ticket-1",
  "reservationId": "reservation-1",
  "status": "VALID"
}
```

Dacă nu există bilet sau rezervarea nu aparține utilizatorului, răspunsurile corespunzătoare
sunt `404 Not Found`, respectiv `403 Forbidden`.

---

## Planificat: audit

### GET /api/audit

Permis numai organizatorului autentificat. Returnează înregistrările legate de stările
rezervărilor.

```json
[
  {
    "id": "audit-1",
    "actorId": "user-1",
    "reservationId": "reservation-1",
    "action": "CONFIRM",
    "result": "SUCCESS",
    "createdAt": "2026-12-20T18:05:00Z"
  }
]
```