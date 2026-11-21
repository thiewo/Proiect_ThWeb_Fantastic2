# Contractele de integrare propuse
## Calendar public pentru alegerea datei evenimentului
Organizatorul va verifica srbtorile dintr-un an nainte s aleag data.
GET
https://nagerholidays.com/api/v4/Holidays/RO/2027
Rspuns: list de obiecte cu date i name. API-ul nostru va expune doar date i name.
Sursa contractului:
https://github.com/nager/Nager.Date/blob/main/doc/examples/rest-api.md
Nu se trimite tokenul utilizatorului ctre furnizor. Se valideaz anul, se fixeaz ara RO,
se aplic timeout i se trateaz eroarea. Funcia real se implementeaz n etapa 15.
Testele automate folosesc rspunsuri controlate, iar verificarea live se noteaz separat.
## Simulator de notificri pentru exerciii locale
Serviciu HTTP separat, local, fr email real sau costuri. nlocuitor pedagogic pentru
serviciu extern;
acceptarea lui ca substitut la evaluare trebuie confirmat de titularul disciplinei.
POST
http://127.0.0.1:4001/notifications
Content-Type: application/json
Corp: {"ticketId":1,"eventTitle":"Atelier web"}
Succes: 200 i {"accepted":true}; nu trimitem parole sau tokenuri.
Timeout planificat: 2000 ms. Serviciu oprit/eroare: API rspunde coerent, biletul rmne
confirmat.