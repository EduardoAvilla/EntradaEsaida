import react from 'react';
 import './style.css';
 import Button_Confirm from './Button_Confirm';
 import Button_Saida from './Button_Saida';
 import Button_Historico from './Button_Historico';
import Navbar from './Navbar';
import Button from './Button';

 const Formulario =() =>{

return(
   
 
  <div id = "form">
   <Navbar/>
    <Button/>
  <label>Número da placa:</label>
<input  maxlength = {8} onKeyUp ={detectar}   id = "input1" className=" mb-3" type="text" placeholder="AAA-0000"/>
 <div id = "btn_confirm">
  
 <div id = "Button_confirm">
    
    <button  type="button" id= "btn_Confirm" className="btn"><p href=""> CONFIRMAR ENTRADA</p></button>
 
  </div>
 
  </div>
  
 
  </div>

  
 );

  
}

 


 
export default Formulario;

  


function detectar(){
 
  const Idinput = document.querySelector("#input1");
  Idinput.addEventListener('onkeyup',decisao());
  
  let j = Idinput.value.slice(0,9);
 let dado;
  
  if( !isNaN(j[0]) && j!=undefined || (!isNaN(j[1]) && j!=undefined)  || (!isNaN(j[2]) && j!=undefined)){
      alert ("Os 3 primeiros dígitos são letras!")
     
      Idinput.value="";
}

dado = [7];
for (let i = 0; i < 10; i++) {
 dado[i] = j[i];
 
} 
 
if(dado[7] !=null){
  sessionStorage.setItem('placa', dado);
  sessionStorage.setItem('hora', '2h');
  
  console.log(sessionStorage.getItem('placa') ) 
  console.log(sessionStorage.getItem('hora') ) 
}
 
  
}
function decisao( ){
 
} 
