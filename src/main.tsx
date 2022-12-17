import { IconContext } from 'phosphor-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './Contexts/Theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <IconContext.Provider
        value={{
          size: 24,
          weight: 'bold'
        }}
      >
        <App />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
