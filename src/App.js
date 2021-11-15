import './App.scss';
import Profile from './components/Authentication/Profile';
import { useAuth0 } from '@auth0/auth0-react'
import Home from './components/home.jsx'
import ParticlesBackground from './particlesBackground';
// import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import UserPanel from './components/UserPanel/UserPanel';

function App() {

  const [game, setGame] = useState([]);
  const [price, setPrice] = useState(0);
  const [modalLogin, setModalLogin] = useState(false);

  const { isLoading } = useAuth0()
  if(isLoading) return <h2>Loading...</h2>

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
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/detail/:id' element={<Details/>}/>
          <Route path='/userPanel' element={<UserPanel/>}/>
          </Routes>
          <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
