import './App.scss';
import Profile from './components/Authentication/Profile';
import Home from './components/home.jsx'
import ParticlesBackground from './particlesBackground';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import UserPanel from './components/UserPanel/UserPanel';


function App() {
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
