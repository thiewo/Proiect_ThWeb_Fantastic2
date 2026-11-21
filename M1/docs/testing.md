# Planul de teste M1


| Tip | Caz | Rezultat |
|---|---|---|
| unitate | confirmare la now == expiresAt | false / expirare |
| integrare | creare eveniment valid + restart | evenimentul persistă |
| negativ | student publică | 403 și DB neschimbată |
| negativ | alt student confirmă rezervarea | 403/404 și nicio modificare |
| CON | 20 cereri la capacity=5 | maximum 5 locuri active, verificat și în SQLite |
| CON | confirmare versus expirare | cel mult un bilet valabil, fără eliberare dublă |
| AUD | hold, confirm, cancel | istoric complet ordonat, actor/timp/rezultat |
| integrare externă | simulator oprit | eroare coerentă, bilet neschimbat |
| E2E | login, listă, hold, confirm, bilet, anulare | flux real prin browser/API/SQLite |
