import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {StarknetProvider} from "@/components/StarkProvider.tsx";
import {Toaster} from "react-hot-toast";
import {Router} from "@/Router.tsx";
import { Analytics } from "@vercel/analytics/react"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StarknetProvider>
        <Router/>
        <Toaster toastOptions={{
            className: 'toast',
        }}/>
    </StarknetProvider>
      <Analytics/>
  </React.StrictMode>,
)
