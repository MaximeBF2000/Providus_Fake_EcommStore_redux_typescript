import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("")
  const cart = useSelector((state: any) => state.cart)

  const handleSearch = (e: any) => {
    e.preventDefault()
    console.log({searchTerm, typeofe: typeof e})
  }

  const inputChange = (e: any) => {
    setSearchTerm(e.target.value)
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">ProvidUs</div>
      </Link>
      <form className="searchbar" onSubmit={e => handleSearch(e)}>
        <input type="text" className="searchInput" placeholder="Search your products..." value={searchTerm} onChange={e => inputChange(e)} />
        <button type="submit" className="searchBtn">🔎</button>
      </form>
      <div className="options">
        <div className="option welcome">Welcome, Maxime</div>
        <button className="option categoriesBtn">Categories <ArrowDropDownIcon /> </button>
        <Link to="/basket">
          <div className="option basket"> 
            <ShoppingBasketIcon /> 
            <span className="basketCount">{cart.length}</span> 
          </div>
        </Link>
      </div>
    </nav>
  )
}
