# Arhitectur simpl
Browser (React) -> HTTP /api -> Express -> Sequelize -> SQLite
Express -> HTTP public -> calendarul srbtorilor din Romnia
Express -> HTTP local separat -> simulator de notificri
Vite construiete SPA. n dezvoltare transmite /api ctre Express.
n producie Express va servi buildul i API-ul pe aceeai origine.
API valideaz intrrile, identific sesiunea, verific rolul i titularul.
Regulile de rezervare i auditul ruleaz ntr-o tranzacie scurt.
SQLite persist datele. Nu se apeleaz serviciul de notificare n tranzacia DB.
Un proces Node, un fiier SQLite i un singur flux serializat de scrieri:
alegere pedagogic explicit, nu soluie pentru multiple servere distribuite