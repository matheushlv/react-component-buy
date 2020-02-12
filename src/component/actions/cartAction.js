import { ADD_TO_CART, ADD_TO_QUANTITY, REMOVE_ITEM, SUB_QUANTITY, FINALIZE_ORDER } from './action-types/cart-action';

//add cart action
export const addToCart = (id) => {
  return{
    type: ADD_TO_CART,
    id

  }

}

export const addToQuantity = (id) => {
  return{
    type: ADD_TO_QUANTITY,
    id

  }

}

export const subtractQuantity = (id) => {
  return{
    type: SUB_QUANTITY,
    id
  }

}

export const finalizeOrder = () => {
  return{
    type: FINALIZE_ORDER
  }
}

export const removeItem = (id) => {
  return{
    type: REMOVE_ITEM,
    id
  }

}