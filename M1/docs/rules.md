# Stări și invariante


HELD --confirmare înainte de termen--> CONFIRMED
HELD --termen atins--> EXPIRED
HELD --anulare proprie--> CANCELLED
CONFIRMED --anulare proprie--> CANCELLED (și bilet nevalabil)


La momentul now >= expiresAt confirmarea nu mai este permisă.
Un loc activ înseamnă HELD neexpirat sau CONFIRMED cu bilet valabil.
0 <= allocated <= capacity. Confirmarea nu incrementează allocated a doua oară.
Eliberarea prin expirare/anulare scade allocated o singură dată.
Confirmarea repetată întoarce același bilet, nu creează unul nou.
Numai titularul poate modifica propria rezervare. Organizatorul nu poate deveni titular prin trimiterea unui userId fals.


| Exemplu | Date | Rezultat așteptat |
|---|---|---|
| ultimul loc | capacity=1, allocated=0, 20 cereri | cel mult 1 acceptată |
| exact la termen | expiresAt=1000, now=1000 | expirare, nu bilet |
| confirmare dublă | același id de două ori | același ticket.id |
| anulare repetată | același id de două ori | loc eliberat o singură dată |
| alt utilizator | student2 asupra rezervării student1 | respins, fără schimbare |


Acestea sunt reguli proiectate.
