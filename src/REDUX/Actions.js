export const ADD_TO_CART = "ADD_TO_CART "
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const INCREASE_QUANTITY = "INCREASE_QUANTITY"
export const DECREASE_QUANTITY = "DECREASE_QUANTITY"
export const SELECT_ITEM = "SELECT_ITEM"
export const CLEAR_CART = "CLEAR_CART"
export const TOTAL = "TOTAL"
export function addToCart (item){
  return{
    type:ADD_TO_CART,
    payload: item
  }  
}
export function removeFromCart (item){
    return{
      type:REMOVE_FROM_CART,
      payload: item
    }  
  }
  export function increaseQuantity (item){
    return{
      type:INCREASE_QUANTITY,
      payload: item
    }  
  }
  export function decreaseQuantity (item){
    return{
      type:DECREASE_QUANTITY,
      payload: item
    }  
  }
  export function selectItem (item){
    return{
      type:SELECT_ITEM,
      payload: item
    }  
  }
  export function clearCart (item){
    return{
      type:CLEAR_CART,
      payload: item
    }  
  }
  export function totalPrice (item){
    return{
      type:TOTAL,
      payload: item
    }  
  }