import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import actions from '../../stateManagement/actionTypes'

export default function BasketItem({ cartItem }: any) {
  const { uid, title, description, price, image, rating } = cartItem
  const [showImage, setShowImage] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cart)

  const shortenStr = (str: string) => {
    if(str.length >= 350){
      return str.slice(0, 350) + " ..."
    }
    else {
      return str
    }
  }

  const toggleShowImage = (): void => setShowImage(ps => !ps)

  // PROBLEM HERE
  const removeFromBasket = (id: number): void => {
    dispatch({ type: actions.REMOVE_ITEM, payload: cart.filter((item: any) => item.uid != id) })
  }

  return (
    <>
      {showImage && 
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
          className="imagePreview_background"
          onClick={(e: any) => {
            if(e.target.classList.contains("imagePreview_background")){
              toggleShowImage()
            }
        }}>
          <motion.div
            className="imagePreview_box"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "circOut" }}
          >
            <img src={image} alt="large product"/>
          </motion.div>
        </motion.div> 
      }
      <div className="basketItem">
        <div className="img" onClick={toggleShowImage}>
          <img src={image} alt="product"/>
        </div>
        <div className="infos">
          <div className="titlePrice_row">
            <h3 className="title">{ title }</h3>
            <div className="price">{ price }€</div>
            <p className="description">{ shortenStr(description) }</p>
          </div>
          <div className="rating">
            {Array(Math.floor(rating)).fill("").map((_, i: number) => (
              <span className="product_ratingStar" key={i}>⭐</span>
            ))}
          </div>
          <button className="removeBtn" onClick={() => removeFromBasket(uid)}>Remove</button>
        </div>
      </div>
    </>
  )
}
