import './App.scss';

import Home from './components/home.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import UserPanel from './components/UserPanel/UserPanel';
import Payment from '../src/components/payment_method/useScript'
import AdminPanel from './components/AdminPanel';


// Private Routes
import PrivateProfile from './components/PrivateProfile/PrivateProfile';
import PrivateUserPanel from './components/PrivateUserPanel/PrivateUserPanel';

function App() {

  const [game, setGame] = useState([]);
  const [price, setPrice] = useState(0);
  const [modalLogin, setModalLogin] = useState(false);


  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path='/profile' element={<PrivateProfile />} />
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/userPanel' element={<PrivateUserPanel/>}/>
          <Route path= '/payment' element={<Payment/>}/>
          </Routes>
          <Footer/>
          

      </BrowserRouter>
      
    </div>
  );
}

export default App;
