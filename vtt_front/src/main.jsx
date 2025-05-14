import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Upload from './pages/AudioUpload.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Upload />
  </StrictMode>,
)
