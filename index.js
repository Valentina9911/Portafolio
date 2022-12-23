import { defineConfig } from 'vite'
import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
  //plugins: [react()],
//})

ReactDOM.render (
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
