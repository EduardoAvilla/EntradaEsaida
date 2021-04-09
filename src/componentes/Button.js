import react from 'react';
import {BrowserRouter, Route, Seitch, Link } from 'react-router-dom'
 import './style.css';
 import Routes from '../Routes'
 


 const Button =() =>{

return(

 
  <div id = "btns">

<Link to = "/">
    
    <button href="/" type="button" id= "btn1" className="btn">Entrada</button>
 </Link>
    <Link to = "/saida">
     
  
    <button type="button"  id= "btn2"  className="btn">Saída</button>
    </Link>
      
  </div>

  
 );

}
export default Button;


 