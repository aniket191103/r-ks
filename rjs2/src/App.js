// import logo from './logo.svg';
import './App.css';
import  Nav from "./components/Nav.js"
import Footer from "./components/Footer.js"

function Header(){

  return(

    <header>
    <nav>
    </nav>
   </header>
    )
}
function App(){
  return(
    <div>
   <Nav/>
    <Header/>
   <Footer/>
</div>


  )
}

export default App;
