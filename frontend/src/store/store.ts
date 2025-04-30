import { configureStore } from '@reduxjs/toolkit' 
import { setupListeners } from '@reduxjs/toolkit/query' 
import { UserSlice } from './Slice/User.slice'

export const store = configureStore({
  reducer: { 
    [UserSlice.name]:UserSlice.reducer
  }, 
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware() 
})


setupListeners(store.dispatch)