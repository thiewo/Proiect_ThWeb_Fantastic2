# Proiect – rezervări la evenimente

Acesta este scheletul executabil pregătit pentru prima predare (M1). Aplicația este gândită pentru gestionarea evenimentelor și rezervarea locurilor de către studenți. Organizatorii vor putea publica evenimente, iar studenții vor putea face și anula rezervări.

În etapa curentă am pus la punct structura proiectului, cerințele, regulile principale, schema de date, contractul API și deciziile arhitecturale. Am și o verificare simplă pentru regula de expirare și o pagină React care poate testa dacă API-ul răspunde.

## Tehnologii folosite
- JavaScript (module ECMAScript), Node.js LTS
- Express pentru API
- React și Vite pentru interfață
- npm pentru gestionarea pachetelor

## Cerințe
Este necesar Node.js LTS și npm. Recomand să folosesc versiunea LTS de Node.js; proiectul a fost verificat cu Node 24.

## Instalare și rulare
Deschid terminalul în folderul `Proiect` și instalez dependențele:

```bash
npm ci
```

Verific regula de business și construiesc interfața:

```bash
npm run check:rule
npm run build
```

Pornesc serverul:

```bash
npm start
```

Într-un al doilea terminal, din același folder, pornesc interfața React:

```bash
npm run dev:client
```

Accesez adresa locală afișată de Vite (de regulă [http://127.0.0.1:5173](http://127.0.0.1:5173)). În pagină pot apăsa butonul **„Verifică API”**. Serverul poate fi verificat și direct la [http://127.0.0.1:3001/api/health](http://127.0.0.1:3001/api/health).

Pentru oprirea aplicației folosesc `Ctrl+C` în ambele terminale.

## Organizarea proiectului
- `client/` – interfața React și configurarea Vite
- `server/` – serverul Express și rutele API
- `scripts/` – scripturi de verificare
- `docs/requirements.md` – actorii și fluxurile principale
- `docs/rules.md` – stările și regulile de business
- `docs/schema.md` și `docs/api.md` – modelul de date și contractul API
- `docs/architecture.md` și `docs/integration.md` – arhitectură și integrare
- `docs/adr/` – deciziile arhitecturale
- `docs/packages/` – cerințele CON și AUD
- `docs/testing.md` și `docs/capacity.md` – planul de testare și ipotezele de capacitate
- `docs/m1-checklist.md` – lista de verificare pentru predarea M1

## Stadiul actual și ce urmează
În acest moment proiectul este la nivel de analiză, design și schelet executabil. API-ul expune verificarea `/api/health`, iar pagina React poate apela acest endpoint. Verificarea `npm run check:rule` testează regula de business inclusă în proiect.

Autentificarea, persistența rezervărilor și funcționalitățile complete pentru concurență (CON) și audit (AUD) nu sunt încă implementate în acest schelet; acestea sunt prevăzute pentru etapele următoare. Pentru M1 trebuie completate și verificate elementele din `docs/m1-checklist.md`.

## Verificări rapide
```bash
npm run check:rule
npm run build
```

Aceste comenzi verifică regula inclusă și construiesc clientul. Nu reprezintă, singure, teste complete pentru toate funcționalitățile aplicației.
