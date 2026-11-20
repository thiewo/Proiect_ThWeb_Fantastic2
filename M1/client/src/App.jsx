import React, { useEffect, useState } from 'react';

export default function App() {
  const eveniment = { title: 'Atelier web', capacity: 5, allocated: 2 };
  const disponibile = eveniment.capacity - eveniment.allocated;
  const [mesaj, setMesaj] = useState('API neverificat');

  useEffect(() => {
    const verificaApi = async () => {
      try {
        const raspuns = await fetch('/api/health');
        if (!raspuns.ok) throw new Error('API nu raspunde corect!');

        const date = await raspuns.json();
        setMesaj(date.ok ? 'API functioneaza' : 'Raspuns API');
      } catch {
        setMesaj('API nu raspunde!');
      }
    };

    verificaApi();
  }, []);
  
  return (
    <main>
      <h1>Rezervări la evenimente</h1>
      <h2>{eveniment.title}</h2>
      <p>Locuri disponibile în exemplu: {disponibile}</p>
      <p>Date demonstrative ; baza de date se construieste mai tarziu.</p>
      <p>{mesaj}</p>
    </main>
  );
}
