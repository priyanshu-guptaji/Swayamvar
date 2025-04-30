import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css' 
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'
import { ClerkProvider } from '@clerk/clerk-react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <ToastContainer/>
      <Provider store={store}> 
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </StrictMode>,
)
