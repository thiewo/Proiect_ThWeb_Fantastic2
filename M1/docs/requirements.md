# Cerințe și actori

Sursa: cele trei fișe originale 2026-2027, Draft v2.0.

## Actori
- Vizitator: verifică funcționarea aplicației și, ulterior, vede evenimente publicate.
- Student autentificat: rezervă un loc, confirmă, vede biletul și anulează propriul loc.
- Organizator autentificat: creează/publică evenimente și inspectează auditul.

## Fluxuri cu acceptare
1. Publicare: organizatorul salvează un eveniment valid; studentul îl vede în listă. Studentul primește 403 dacă încearcă operația privilegiată.
2. Rezervare și confirmare: studentul cere un loc disponibil, confirmă înainte de termen și primește exact un bilet valabil.
3. Anulare: studentul anulează propriul loc; biletul devine nevalabil și locul se eliberează o singură dată.


Un rol din interfață nu acordă permisiuni. Verificarea va exista și în API.
