import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './main/Main';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Impressum from './components/impressum/Impressum';



function App() {
  return (
    
    <div className="App">
      <div className='wrapper'>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="about" element={<About/>} />
        <Route path="impressum" element={<Impressum/>} 
        />
       </Routes>
       <Footer/>
       </div>
  </div>
  );
}

export default App;

