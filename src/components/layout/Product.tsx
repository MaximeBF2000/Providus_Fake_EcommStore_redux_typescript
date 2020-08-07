import React from 'react'
import { useDispatch } from "react-redux"
import actions from "../../stateManagement/actionTypes"

export default function Product(props: any) {
  const { uid, title, price, description, category, rating, image } = props
  const dispatch = useDispatch()

  const addToCart = (): void => {
    dispatch({ type: actions.ADD_TO_CART, payload: { uid, title, price, description, category, rating, image } })
  }

  return (
    <div className="product" id={`product_${uid}`}>
      <div className="product_titlePriceRow">
        <h3 className="product_title">{title}</h3>
        <div className="product_price">{price}€</div>
      </div>
      <div className="product_rating">
        {Array(Math.floor(rating)).fill("").map((_, i: number) => (
          <span className="product_ratingStar" key={i}>⭐</span>
        ))}
      </div>
      <div className="center-v">
        <div className="product_image">
          <img src={image} alt="product"/>
        </div>
      </div>
      <button className="addToCartBtn" onClick={addToCart}>Add to cart</button>
    </div>
  )
}
