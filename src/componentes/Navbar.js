import react from 'react';
import Img from "../Img/Logo.png"
import Ferramenta from "../Img/Ferramenta.png"
 

 const Navbar =() =>{

return(
 
  <div>
<nav className="navbar navbar-light bg-info">
  <div className="container-fluid">
    <div className="navbar-brand" href="#"><img src={Img}alt=""/></div>
    <nav className="navbar navbar-dark bg-transparent">
      

    <div  class="dropdown" >
      < img id="ferramenta"  src={Ferramenta} height ="20px"  width ="30px" alt=""/>
  <button id="menu"  class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  </button>
  <div id="menu" class="dropdown-menu" aria-labelledby="dropdownMenu2">
    
    <button id="menu"  class="dropdown-item" type="button">Entrada</button>
    <button  id="menu"   class="dropdown-item" type="button">Saída</button>
   </div>
  
</div>

</nav>
  </div>
</nav>
  


  </div>
 );

}
export default Navbar;
 


 