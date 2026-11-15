import { StrictMode } from 'react'
import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { Provider } from 'react-redux'
import todoStore from './store/todoStore'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
  <Provider store={todoStore}>
     <App/>
  </Provider>
   </BrowserRouter>
  </StrictMode>
)
