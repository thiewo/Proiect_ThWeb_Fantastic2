# Arhitectură simplă


Browser (React) -> HTTP /api -> Express -> Sequelize -> SQLite
Express -> HTTP public -> calendarul sărbătorilor din România
Express -> HTTP local separat -> simulator de notificări


Vite construiește SPA. În dezvoltare transmite /api către Express.
În producție Express va servi buildul și API-ul pe aceeași origine.
API validează intrările, identifică sesiunea, verifică rolul și titularul.
Regulile de rezervare și auditul rulează într-o tranzacție scurtă.
SQLite persistă datele. Nu se apelează serviciul de notificare în tranzacția DB.


Un proces Node, un fișier SQLite și un singur flux serializat de scrieri:
alegere pedagogică explicită, nu soluție pentru multiple servere distribuite.
