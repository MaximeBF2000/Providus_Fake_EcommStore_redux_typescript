import initialState from "./initialState"
import actions from "./actionTypes"

interface action {
  type: string,
  payload: any
}

const AppReducer = (state: any = initialState, action: action) => {
  const { type, payload } = action
  switch(type){
    case actions.GET_PRODUCTS:
      return { ...state, products: payload }
    case actions.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] }
    default:
      return state
  }
}

export default AppReducer