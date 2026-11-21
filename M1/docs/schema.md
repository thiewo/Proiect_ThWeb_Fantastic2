# Modelul relațional propus


Un rând din Reservations reprezintă un singur loc, fără locuri numerotate.


| Tabel | Câmpuri principale | Legătură / restricție |
|---|---|---|
| Users | id, email, passwordHash, role | email unic; parola nu este stocată în clar |
| Sessions | id, tokenHash, userId, expiresAt | userId -> Users.id; token brut numai la client |
| Events | id, title, date, capacity, allocated, published | 0 <= allocated <= capacity |
| Reservations | id, userId, eventId, status, expiresAt | userId -> Users.id; eventId -> Events.id |
| Tickets | id, reservationId, status | reservationId unic -> Reservations.id |
| Audit | id, actorId, reservationId, action, result, createdAt | corelează stările aceluiași obiect |


Users 1 -> N Reservations N -> 1 Events
Reservations 1 -> 0..1 Tickets
Reservations 1 -> N Audit


Exemplu: evenimentul 1 are capacity=5 și allocated=2. Mai poate accepta 3 locuri active.
allocated numără HELD neexpirate și CONFIRMED cu bilet valabil; nu adunăm biletul încă o dată.
