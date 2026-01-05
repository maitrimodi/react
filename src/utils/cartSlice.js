import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(older) Redux = DON'T MUTATE STATE, returning was mandatory
      // const newState = [...state]
      // newState.items.push(action.payload)
      // return newState;

      // Redux Toolkit(uses Immer library to mutate state BTS)
      // mutating the state here

      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.filter((item) => item.id !== action.payload);
    },
    // originalState = ["pizza"]
    clearCart: (state) => {
      // console.log(state) //you wont be able to see anything (proxyObject will be seen)
      console.log(current(state)); // now with current() you'll be able to see inside the state
      // state=[]
      // console.log(state); //[]  it just made local variable state empty but the pizza array remained the same

      // state=[]; it won't work as you're not mutating the state, it's just adding a reference to it.
      // if you want to make it emoty, you have to mutate the state

      // RTK - either Muatte the state or return a new state
      state.items.length = 0; // []
      // OR
      // return {items: []};
    },
  },
});

// {
//   actions: {
//     addItem,
//     removeItem,
//     clearCart,
//     increaseQuantity,
//     decreaseQuantity
//   },
//   reducer
// }

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
