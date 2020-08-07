import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from "./App"
import { createStore } from "redux"
import { Provider } from "react-redux"
import AppReducer from "./stateManagement/AppReducer"

const store = createStore(AppReducer)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("root"))