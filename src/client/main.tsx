import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
      <Toaster
        position='bottom-right'
        toastOptions={{ className: '!bg-slate-800 !text-slate-100' }}
      />
    </AuthProvider>
  </React.StrictMode>,
)
