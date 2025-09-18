import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { Scrollbar } from "react-scrollbars-custom";
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Scrollbar
        style={{ width: "100vw", height: "100vh" }}
        trackYProps={{
          style: {
            background: "#030712",
            borderRadius: "8px",
            width: "10px",
            right: "2px",
          },
        }}
        thumbYProps={{
          style: {
            background: "#3A6D8C",
            borderRadius: "8px",
          },
        }}
      >
        <App />
      </Scrollbar>
    </HelmetProvider>
  </StrictMode>,
)
