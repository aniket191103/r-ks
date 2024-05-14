
import './App.css';
import Footer from './components/Footer'
import Main from './components/Mid';
import Button from './components/Buttons';
import Header from './components/Header';
import Pic from './components/Top';
function App() {
  return (
    <div className='All'>
  <Pic/>
    <Header/>
    <Button/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
