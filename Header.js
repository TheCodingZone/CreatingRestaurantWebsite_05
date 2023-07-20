import React, { Fragment } from 'react'
import classes from './Header.module.css'
import mealImages from '../../Assets/img.jpg'

export default function Header() {
  return <Fragment>
    
      <header className={classes.header}>
      <h1>FOODCORNER  <button type="button">ADD TO CART</button></h1>
   
      </header>
        {/* //L l    */}
      <div className={classes['main-image']}>
    
        <img src={mealImages} alt="LOADING..." />
      </div>
    </Fragment>
      };
     
     
     
        
   

  
