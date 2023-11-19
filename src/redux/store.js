import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('myValue/increment');
export const decrement = createAction('myValue/decrement');

const myReduser = createReducer(100, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReduser,
  },
});
