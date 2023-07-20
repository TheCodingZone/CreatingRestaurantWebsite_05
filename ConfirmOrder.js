import React from 'react'
import Modal from '../UI/Modal';
import classes from './ConfirmOrder.module.css'

export default function ConfirmOrder(props) {
  const cartItem=[{
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  }].map(item=>(
    <li>{item.name}</li>
  ))
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
      <span >Total Amount</span>
      <span>22.99</span>
      </div>
      
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Confirm Order</button>
      </div>
    </Modal>
  )
}
