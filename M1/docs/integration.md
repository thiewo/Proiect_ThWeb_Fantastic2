# Contractele de integrare propuse


## Calendar public pentru alegerea datei evenimentului


Organizatorul va verifica sărbătorile dintr-un an înainte să aleagă data.
GET https://nagerholidays.com/api/v4/Holidays/RO/2027
Răspuns: listă de obiecte cu date și name. API-ul nostru va expune doar date și name.
Sursa contractului: https://github.com/nager/Nager.Date/blob/main/doc/examples/rest-api.md
Nu se trimite tokenul utilizatorului către furnizor. Se validează anul, se fixează țara RO,
se aplică timeout și se tratează eroarea. Funcția reală se implementează în etapa 15.
Testele automate folosesc răspunsuri controlate, iar verificarea live se notează separat.


## Simulator de notificări pentru exerciții locale


Serviciu HTTP separat, local, fără email real sau costuri. Înlocuitor pedagogic pentru serviciu extern;
acceptarea lui ca substitut la evaluare trebuie confirmată de titularul disciplinei.


POST http://127.0.0.1:4001/notifications
Content-Type: application/json
Corp: {"ticketId":1,"eventTitle":"Atelier web"}
Succes: 200 și {"accepted":true}; nu trimitem parole sau tokenuri.
Timeout planificat: 2000 ms. Serviciu oprit/eroare: API răspunde coerent, biletul rămâne confirmat.
Contractul și răspunsul efectiv se aliniază implementării din etapa 15.
