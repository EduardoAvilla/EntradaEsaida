import react from 'react';
 import './style.css';
  import Button_Pagamento from './Button_Pagamento';
 import Button_Saida from './Button_Saida';
 import Button_Historico from './Button_Historico';
import Navbar from './Navbar';
import Button from './Button';
import {BrowserRouter, Route, Seitch, Link } from 'react-router-dom'

 const FormularioSaida =() =>{

return(

  <div id = "form">
       
 
   <Navbar/>
    <Button/>
  <label htmlFor="">Número da placa:</label>
<input  maxlength = {8} onKeyUp ={detectar} id = "input1" className=" mb-3" type="text" placeholder="AAA-0000"/>
 <div id = "btn_confirm">
 <Button_Pagamento/>
 <Button_Saida/>
 <Link to = "/registro">
 <Button_Historico/>
 </Link>
  </div>
  

  </div>

  
 );

  
}

 


 
export default FormularioSaida;

 
function detectar(){
 
  const Idinput = document.querySelector("#input1");
  Idinput.addEventListener('onkeyup',decisao());
  
  let j = Idinput.value.slice(0,9);
 let dado;
  
  if( !isNaN(j[0]) && j!=undefined || (!isNaN(j[1]) && j!=undefined)  || (!isNaN(j[2]) && j!=undefined)){
      alert ("Os 3 primeiros dígitos são letras!");
     
      Idinput.value="";
}

dado = [7];
for (let i = 0; i < 10; i++) {
 dado[i] = j[i];

}
 
}




function decisao(dado){
 
} 

 