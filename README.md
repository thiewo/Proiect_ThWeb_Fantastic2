# M1 - schelet executabil


Folosește Node.js LTS (material verificat pe Node 24) și npm. În acest folder:

```text
npm ci
npm run check:rule
npm run build
npm start
```

În alt terminal, în același folder:

```text
npm run dev:client
```

Deschide URL-ul Vite, apoi Verifică API. API: http://127.0.0.1:3001/api/health.
Ctrl+C în fiecare terminal oprește procesele. Pentru M1, buildul este verificat, iar pagina rulează prin Vite.
Autentificarea, persistența, CON și AUD se implementează în M2, iar producția integrată se verifică în M3.

