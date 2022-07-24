// import logo from './logo.svg';
import './App.css';
import "./style/readWrite.css"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Read_write from './components/Read_write';
import Read from './components/Read';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Read_write/>
      <Read/>
      <Footer/>
    </div>
  );
}

export default App;
