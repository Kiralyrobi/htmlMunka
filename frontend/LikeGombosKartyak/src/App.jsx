import Kartya from "./components/Kartya.jsx"
import "./components/css.css";

const favorites=[
  {
    id:1,
    emoji:"🐈",
    cim: "Macska",
    leiras: "Alszik, amikor csak tud"
  },
  {
    id:2,
    emoji:"🐶",
    cim: "Kutya",
    leiras: "Ugat, amikor csak tud"
  },
  {
    id:3,
    emoji:"🦜",
    cim: "Papagály",
    leiras: "Eszik, amikor csak tud"
  },
]

function App() {
  return (
    <>
      <h1 className="cim">Kártyák</h1>
        <div className="kartyak">
          {favorites.map(favorite=>{
            return(
              <Kartya key={favorite.id} emoji={favorite.emoji} cim={favorite.cim} leiras={favorite.leiras} />
            )
            })}
        </div>
      </>
  )
}



export default App
