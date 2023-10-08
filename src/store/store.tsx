import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice.tsx";


const store = configureStore({
  reducer:{
    itemsSlice
  }
})




export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch





