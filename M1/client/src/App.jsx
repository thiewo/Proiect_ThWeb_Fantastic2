import React, { useCallback, useEffect, useState } from 'react';

export default function App() {
  const eveniment = { title: 'Atelier web', capacity: 5, allocated: 2 };
  const disponibile = eveniment.capacity - eveniment.allocated;
  const [mesaj, setMesaj] = useState('API neverificat');

  const verificaApi = useCallback(async () => {
    try {
      const raspuns = await fetch('/api/health');
      if (!raspuns.ok) throw new Error('API nu raspunde corect!');

      const date = await raspuns.json();
      setMesaj(date.ok ? 'API functioneaza' : 'Raspuns API');
    } catch {
      setMesaj('API nu raspunde!');
    }
  }, []);

  useEffect(() => {
    verificaApi();
  }, [verificaApi]);
  
  return (
    <main>
      <h1>Rezervari evenimente</h1>
      <button onClick={verificaApi}>Verific API</button>
         <p role="status">{mesaj}</p>
    </main>
  );
}
