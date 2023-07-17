import { Routes, Route, useLocation } from "react-router-dom";
import './App.scss';
import ScrollToTop from "./components/ScrollToTop";
import Header from './components/Header/Header';
import Main from './Main/Main';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Impressum from './components/Impressum/Impressum';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ScrollToTop />
      <div className={`wrapper ${location.pathname.slice(1)}`}>
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

