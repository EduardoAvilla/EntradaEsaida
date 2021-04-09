import react from 'react';
import { useLocation } from 'react-router-dom'
import './style.css';
import {BrowserRouter, Route, Seitch, Link } from 'react-router-dom'

const Registro =()=>{

  return(

    <div >
 <Link to = "/">
 <button>Voltar para a home</button>
 </Link>
    </div>



  );
}

export default Registro;
 
let placa, hora,hora2, placa2;

 
function Valores(placa, hora,placa2, hora2){
  var url_atual = window.location.href;

  if(url_atual == 'http://localhost:3000/registro'){
 placa = sessionStorage.getItem('placa') 
  hora = sessionStorage.getItem('hora') 
 

 let btn = document.createElement("h4");
btn.innerHTML = 'PLACA: '+placa+'\rHORA: '+hora;
                   // Insert text
document.body.appendChild(btn);  

 
 }
}
 Valores();

 
