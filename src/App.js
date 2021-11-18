import './App.scss';
import Profile from './components/Authentication/Profile';
import Home from './components/home.jsx'
import ParticlesBackground from './particlesBackground';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import UserPanel from './components/UserPanel/UserPanel';
import AdminPanel from './components/AdminPanel';



function App() {

  const [game, setGame] = useState([]);
  const [price, setPrice] = useState(0);
  const [modalLogin, setModalLogin] = useState(false);


  return (
    <div className="App">
      <BrowserRouter>
      <ParticlesBackground/>
      <Navbar game={game}
      setGame={setGame}
      setModalLogin={setModalLogin}
      price = {price}
      setPrice={setPrice}
      >
      </Navbar>
        <Routes>

          <Route path='/' element={<Home
          game={game}
          setGame={setGame}
          setModalLogin={setModalLogin}
          price = {price}
          setPrice={setPrice}
          />}/>
          <Route path='/adminPanel' element={<AdminPanel/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/userPanel' element={<UserPanel/>}/>
          </Routes>
          <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
