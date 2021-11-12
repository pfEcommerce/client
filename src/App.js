
import './App.scss';
import Prueba from './components/prueba.jsx'
// import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Prueba/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
