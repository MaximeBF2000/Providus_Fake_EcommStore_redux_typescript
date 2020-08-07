import 'regenerator-runtime/runtime'
import * as React from 'react'
import { useEffect } from "react"
import "./styles/App.scss"

import axios from "axios"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import actions from "./stateManagement/actionTypes"

import HomePage from "./components/pages/HomePage"
import BasketPage from './components/pages/BasketPage'


export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    async function getProducts()  {
      const res = await axios.get("https://fakestoreapi.com/products")
      console.log(res.data)
      dispatch({ type: actions.GET_PRODUCTS, payload: res.data })
    }
    getProducts()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <h1>Login</h1>
        </Route>
        <Route exact path="/basket">
          <BasketPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
