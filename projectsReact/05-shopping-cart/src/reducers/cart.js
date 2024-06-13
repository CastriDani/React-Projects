export  const CartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_ONE_FROM_CART: 'REMOVE_ONE_FROM_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
  
    switch (actionType) {
      case CART_ACTIONS_TYPES.ADD_TO_CART: {
        const { id } = actionPayload;
        const productInCart = state.findIndex(item => item.id === id);
  
        if (productInCart >= 0) {
          const newState = structuredClone(state)
          newState[productInCart].quantity += 1
          updateLocalStorage(newState)
          return newState
        }
  
        const newState = [
          ...state,
          {
            ...actionPayload,
            quantity: 1
          }
        ]
        updateLocalStorage(newState)
        return newState
      }
  
      case CART_ACTIONS_TYPES.REMOVE_ONE_FROM_CART: {
        const { id } = actionPayload;
        const productInCart = state.findIndex(item => item.id === id);
  
        if (productInCart >= 0) {
          const newState = structuredClone(state)
          newState[productInCart].quantity -= 1
  
          if (newState[productInCart].quantity <= 0) {
            newState.splice(productInCart, 1)
          }
          
          updateLocalStorage(newState)
          return newState
        }
  
        return state
      }
  
      case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
        const { id } = actionPayload;
        const newState = state.filter(item => item.id !== id)
        updateLocalStorage(newState)
        return newState
      }
  
      case CART_ACTIONS_TYPES.CLEAR_CART: {
        updateLocalStorage([])
        return []
      }
    }

    return state
}