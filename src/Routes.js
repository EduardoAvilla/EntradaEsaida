import react from 'react';
import Formulario from './componentes/Formulario';
import FormularioSaida from './componentes/FormularioSaida';
import Registro from './componentes/Registro';

import {BrowserRouter, Switch,Route} from 'react-router-dom';
 
 function Routes ()
{

  return ( 
   
 
    <BrowserRouter>
    
    <Switch>
   
    <Route exact path ="/registro" component = {Registro}/>

    <Route exact path ="/"      component = {Formulario}/>
    <Route exact path ="/saida" component = {FormularioSaida}/>

    </Switch>
    
    
    </BrowserRouter>


  );


}

export default Routes;

 