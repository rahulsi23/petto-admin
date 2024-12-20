import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './assets/css/font-awesome.min.css'
import './assets/css/all.min.css'
import './input.css'
import "./style.css";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
)

