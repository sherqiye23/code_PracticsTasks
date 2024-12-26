import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
