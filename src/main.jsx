import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster position="top-right" reverseOrder={false} toastOptions={{style: {backgroundColor: "black", color: "white", paddingRight: "20px", paddingLeft: "20px"}, duration: 1000}} />
  </BrowserRouter>,
)
