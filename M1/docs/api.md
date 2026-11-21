# Contractul API propus


Toate corpurile sunt JSON. Erori: {"error":{"code":"COD","message":"Mesaj"}}.
Autentificare: Authorization: Bearer <token>. Tokenul nu este introdus în URL.


| Metodă / cale | Cerere | Rezultat / rol |
|---|---|---|
| GET /api/health | fără corp | {ok:true}; oricine; implementat acum |
| POST /api/auth/login | email, password | token, user; M2 |
| POST /api/auth/logout | token | invalidează sesiunea; M2 |
| GET /api/events?q=&sort=date&page=1&pageSize=5 | parametri query | items,total,page,pageSize; M2 |
| POST /api/events | title,date,capacity,published | eveniment; organizator |
| PATCH /api/events/:id | câmpurile modificate | eveniment; organizator |
| POST /api/reservations | eventId | reservation; student autentificat |
| GET /api/reservations | token | items; numai obiectele proprii |
| POST /api/reservations/:id/confirm | token | reservation,ticket |
| POST /api/reservations/:id/cancel | token | reservation,ticket dacă există |
| GET /api/tickets | token | items proprii |
| GET /api/tickets/:id/history | token | items audit; organizator |
| GET /api/admin/audit?reservationId=1 | token | items; organizator |
| POST /api/admin/expire | token | expiră rezervările scadente; organizator |
| POST /api/tickets/:id/notify | token | confirmare simulator; titularul biletului |


Statusuri: 400 intrare invalidă, 401 neautentificat, 403 interzis, 404 negăsit,
409 conflict de capacitate/stare, 410 rezervare expirată, 502 serviciu de notificare indisponibil.
Contractul complet se verifică pe implementarea M2. În M1 numai health este disponibil.
