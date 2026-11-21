# Modelul de sarcină M1 (ipoteze, nu măsurători)

 
Date sintetice: trei conturi, evenimente cu capacități mici și un eveniment suficient pentru demonstrația de volum.
O sesiune inițiază 200 de rezervări; se numără toate încercările și răspunsurile.
CON separat: cel puțin 20 de cereri concurente, pentru un eveniment cu numai 5 locuri.
Intervalul de expirare HOLD_SECONDS este configurabil, implicit 120 secunde.


Plan trei niveluri: 1, 5 și 20 clienți simultani, aceeași combinație de cereri și aceleași date.
Obiectiv pedagogic propus: p95 sub 500 ms și sub 1% erori neașteptate pe calculatorul testat.
Conflictele așteptate de capacitate se raportează separat; nu se ascund ca succes al rezervării.
Raport: nivel, total, durată, throughput, p50, p95, erori, CPU/RSS observabil, mediu și versiuni.
Capacitate: cel mai mare nivel TESTAT care respectă obiectivul. Nu extrapolăm și nu comparăm RPS între calculatoare.
Blocaj probabil de investigat: writer-ul unic SQLite; nu este încă un rezultat măsurat.
