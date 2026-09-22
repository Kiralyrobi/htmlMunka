import { useState } from 'react';
import OraCard from './components/OraCard'
import OraSzam from './components/Oraszam'  
import Temakorok from './components/TemaKorok'
import OraForm from './components/OraForm';

const App =() => {
  const [orak, setOrak] = useState([ 
  {

    cim: "Bevezetés a webfejlesztésbe",
    leiras: "Weboldalak működése és HTML áttekintés.",
  },
  {

    cim: "Fejlesztői környezetek",
    leiras:
      "Az online és a professzionális fejlesztői eszközök áttekintése. A Visual Studio Code telepítése és alapvető használatának bemutatása.",
  },
  {

    cim: "Alapvető HTML tagek",
    leiras: "Legfontosabb tagek használata: h1-h6, p, img, a.",
  },
  {

    cim: "HTML attribútumok és szövegformázás",
    leiras: "Attribútumok: id, class, és szövegformázás.",
  },
  {

    cim: "HTML listák és táblázatok",
    leiras: "Listaelemek (ul, ol) és táblázatok (table).",
  },
]);

  const [modositandoOra, setModositandoOra] = useState(null);
  return (
    <main>
      <h1>Bevezetés a programozásba</h1>
      <hr/>
        <Temakorok />
      <hr/>
      <OraForm onOraHozzaad={(newOra=>setOrak(prev=> [...prev, newOra]))}/>
      <hr/>
      <OraSzam orakATanmenetben={orak.length}/>
      <section className="ora-grid">
        {orak.map((ora, index)=>(
          <OraCard key={index} oraSzam={index + 1 } cim={ora.cim} 
           onKartyaTorles={() => setOrak(prev => prev.filter((ora, i) => i !== index))} 
           onKartyaSzerkeszt={(oraszam) => setModositandoOra(oraszam)}>
            {ora.leiras}
          </OraCard>
        ))}

      </section>
    </main>
)};

export default App;