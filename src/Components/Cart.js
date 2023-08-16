import React from 'react'
import { useSelector } from 'react-redux'
import Fooditem from './Fooditem'



const Cart = () => {
    const  cartItem=useSelector((store)=> store.cart.items)
  return (
    <div >
      <h1 className='font-bold text-3xl'>Cart-Item={cartItem.length}</h1>
      <div className='flex p-2 m-2'>
      {cartItem.map(item=>  <Fooditem  key={item.id}{...item} /> )}
      </div>
     
     
    </div>
  )
}

export default Cart
