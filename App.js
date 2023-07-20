import React,{ Fragment } from 'react';
import './App.css';
import Header from './Componant/LAYOUT/Header';
import Description from './Componant/LAYOUT/Description';
import Meal from './Componant/MEALS/Meal'
import ConfirmOrder from './Componant/CART/ConfirmOrder';


function App() {
  return (
    <Fragment className="App">
     <ConfirmOrder/>
     <Header/>
    
     <Description/>
     <main>
     <Meal/>
     </main>
     

    </Fragment>
  );
}

export default App;
