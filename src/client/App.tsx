import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
} from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout'

// Pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import NotFound from './pages/NotFound'

import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="login" element={<LogIn/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  ),
  { basename: import.meta.env.BASE_URL },
)

export default function App() {
  return <RouterProvider router={router}/>
}
