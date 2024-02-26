import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider as ReduxProdiver } from 'react-redux'
import store from './Redux/store.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProdiver store={store}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </ReduxProdiver>
  </React.StrictMode>,
)
