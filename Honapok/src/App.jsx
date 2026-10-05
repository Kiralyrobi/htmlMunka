import Header from "./components/Header"
import Footer from "./components/Footer"
import {honapok} from "./components/honapok.js"

function App() {
    return (
      <main>
      <div id="kartyak">
        {honapok.map(honap=>{
          return (
            <div class="kartya" id={honap.evszak}>
            <img src={honap.photoUrl} alt={honap.name +"i kép"} />
            <h2>{honap.name}</h2>
            <p>{honap.leiras}</p>
            <a href="">Bővebben</a>
            </div>  
      )
    })}
    </div>
    </main>
    )}
    
  export default App