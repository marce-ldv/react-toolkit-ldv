import React from 'react'

import { ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import theme from './styles/theme.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
