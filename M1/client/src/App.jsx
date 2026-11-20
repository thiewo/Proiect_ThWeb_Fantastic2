import React from 'react';
import useState from 'react';

export default function App() {
  const eveniment = { title: 'Atelier web', capacity: 5, allocated: 2 };
  const disponibile = eveniment.capacity - eveniment.allocated;
  const [mesaj, setMesaj] = useState('API neverificat');
  return (
    <main>
      <h1>Rezervări la evenimente</h1>
      <h2>{eveniment.title}</h2>
      <p>Locuri disponibile în exemplu: {disponibile}</p>
      <p>Date demonstrative fixe; baza de date se construiește în M2.</p>
    </main>
  );
}
