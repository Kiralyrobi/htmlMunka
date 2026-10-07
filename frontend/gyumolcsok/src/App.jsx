import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
import {fruits} from "./assets/data.js";  

function App() {

  return(
    <>
    <Header/>
    <main className="main">
      {fruits.map(fruit=>{
        return(
          <Card key={fruit.id} emoji={fruit.emoji} title={fruit.title} text={fruit.text} />
        )
      })}
    </main>
    <Footer/>
    </>
  )
}

export default App
