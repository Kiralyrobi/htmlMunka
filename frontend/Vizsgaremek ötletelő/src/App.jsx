import Kartya from "./components/Kartya.jsx"
import "./components/css.css";


const favorites=[
  {
    id:1,
    cim: "Első munkánk",
    leiras: "Az ügyfél hülye volt",
    kep: "images/egyes.jpg"
  },
  {
    id:2,
    cim: "",
    leiras: ""
  },
  {
    id:3,
    cim: "",
    leiras: ""
  },
]

function App() {
  return (
    <>
      <h1 className="cim">Villanyszerelés</h1>
      <h2>Referencia munkáink</h2>
        <div className="kartyak">
          {favorites.map(favorite=>{
            return(
              <Kartya key={favorite.id} cim={favorite.cim} leiras={favorite.leiras} kep={favorite.kep} />
            )
            })}
        </div>
      </>
  )
}



export default App
