import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material'
import './index.css'


const Theme = createTheme({
  palette: {
    primary: {
      main: "#CA91C6"
    },
    secondary: {
      main:"#FFA500"
    },
    customColors: {
      royalBlue: "#4169E1"
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>

        <App />
    </ThemeProvider>
  </React.StrictMode>
)
