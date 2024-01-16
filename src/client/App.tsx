import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout'

// Pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Chats from './pages/Chats'
import NotFound from './pages/NotFound'

import { useAuth } from './contexts/AuthContext'

import './App.css'

export default function App() {
  const auth = useAuth()
  
  console.log(auth)
  
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='login' element={<LogIn/>}/>
          <Route path='chat' element={
            auth?.isLoggedIn && auth.user ? <Chats/> : <Navigate replace to={'/'}/>
          }/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
