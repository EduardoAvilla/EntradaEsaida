import logo from './logo.svg';
import './App.css';
import {BrowserRouter } from 'react-router-dom'
import Routes from './componentes/Routes';


function App() {
  return ( 

    <BrowserRouter>
    <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
