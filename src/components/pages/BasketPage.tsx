import * as React from 'react'
import { useSelector } from "react-redux"

import Navbar from '../layout/Navbar'
import BasketItem from '../layout/BasketItem'

export default function BasketPage() {
  const cart = useSelector((state: any) => state.cart)

  const total = () => {
    let _total = 0
    cart.forEach((cartItem: any) => _total += cartItem.price)
    return _total
  }

  return (
    <>
      <Navbar />
      <div className="basketContainer">
        <div className="basketTotal_row">
          <h2>Your basket :</h2>
          <h2>Total : {total()}€</h2>
        </div>
        {cart.map((cartItem: any, i: number) => <BasketItem key={i} cartItem={cartItem}/>)}
      </div>
    </>
  )
}
