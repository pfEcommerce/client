import './App.scss';
import Prueba from './components/prueba.jsx'
import Login from './components/Authentication/Login';
import Logout from './components/Authentication/Logout';
import Profile from './components/Authentication/Profile';
import { useAuth0 } from '@auth0/auth0-react'

function App() {

const { isAuthenticated, isLoading } = useAuth0()

if(isLoading) return <h2>Loading...</h2>

return (
  <div className="App">
    <Prueba/>
    { isAuthenticated ? <Logout/> : <Login/> }
    <Profile/>
  </div>
);
}

export default App;
