// import logo from './logo.svg';
import './App.css';
import "./style/readWrite.css"
import "./style/read.css"
import "./style/mobile.css"
import "./style/footer.css"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Read_write from './components/Read_write';
import Read from './components/Read';
import Footer from './components/Footer';
import Mobile from './components/Mobile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Read_write/>
      <Read/>
      <Mobile/>
      <Footer/>
    </div>
  );
}

export default App;
