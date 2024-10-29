// main.jsx
import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom/client'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
  

const root = createRoot(document.getElementById('root'));
root.render(<App />);