import React from "react";
import {BrowserRouter,  Routes, Route, Link, Navigate
} from 'react-router-dom'; 
import Home from "./pages/home";
import Sobre from "./pages/sobre"; 
import Contato from "./pages/contato";


// const Inicio = () => <div>Página Inicial</div>
// const Sobre = () => <div>Página Sobre</div>
// const Contato = () => <div>Página Contato</div>

const RotasProtegidas = ({ children}) => {
  let estaAutenticado = false; 
  if(!estaAutenticado){
    return<Navigate to='/'/>
  }
return children
}

function App(){
  return(
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/sobre'>Home</Link></li>
          <li><Link to ='/contato'>Home</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/contato' element={
        <RotasProtegidas>
          <Contato />

        </RotasProtegidas>
        }/>
      </Routes>
    </div>
    </BrowserRouter>
  

  );
}

export default App

