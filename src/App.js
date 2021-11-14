import './App.scss';
import Profile from './components/Authentication/Profile';
import { useAuth0 } from '@auth0/auth0-react'
import Home from './components/home.jsx'
import ParticlesBackground from './particlesBackground';
// import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import UserPanel from './components/UserPanel/UserPanel';
import Navbar from './components/navbar';

function App() {

  const { isLoading } = useAuth0()
  if(isLoading) return <h2>Loading...</h2>

  return (
    <div className="App">
      <BrowserRouter>
      <ParticlesBackground/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/detail/:id' element={<Details/>}/>
          <Route path='/userPanel' element={<UserPanel/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
