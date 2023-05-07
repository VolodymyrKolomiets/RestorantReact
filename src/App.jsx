import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Reservation from './components/Reservation/Reservation';

function App() {

  return (
    <>
         <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
