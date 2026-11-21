import React, { useState } from 'react';


export default function App() {
  const [mesaj, setMesaj] = useState('API neverificat');
  async function verificaApi() {
    setMesaj('Se verifică...');
    try {
      const raspuns = await fetch('/api/health');
      if (!raspuns.ok) throw new Error('API nu răspunde corect');
      const date = await raspuns.json();
      setMesaj(date.ok ? 'API funcționează' : 'Răspuns neașteptat');
    } catch (eroare) {
      setMesaj('Nu pot contacta API. Verifică terminalul serverului.');
    }
  }
  return (
    <main>
      <h1>Rezervări la evenimente</h1>
      <button onClick={verificaApi}>Verifică API</button>
      <p role="status">{mesaj}</p>
    </main>
  );
}
