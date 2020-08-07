import React from 'react'
import { useSelector } from "react-redux"

import Product from "./Product"

export default function Products() {
  const products = useSelector((state: any) => state.products)

  interface product {
    title: string,
    description: string,
    category: string,
    image: string,
    price: number
  }

  return (
    <div className="products">
      {
        products.map((product: product, i: number) => (
          <Product
            key={i}
            uid={i}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
            rating={Math.floor(Math.random() * 5) + 1} // Random rating 1 to 5
            image={product.image}
          />
        ))
      }
    </div>
  )
}
