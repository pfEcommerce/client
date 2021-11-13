import './App.scss';
import Profile from './components/Authentication/Profile';
import { useAuth0 } from '@auth0/auth0-react'
import Home from './components/home.jsx'
// import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const { isAuthenticated, isLoading } = useAuth0()
  if(isLoading) return <h2>Loading...</h2>

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
