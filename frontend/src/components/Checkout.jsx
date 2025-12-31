import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
const cart = useSelector((state) => state.cart);
const totalAmount = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <>
     <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
     <p>{totalAmount}</p>
     </>
  )
}

export default Checkout