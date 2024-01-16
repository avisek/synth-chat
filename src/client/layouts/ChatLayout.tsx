import { Outlet, NavLink } from 'react-router-dom'
import Topbar from '../components/Topbar'

export default function ChatLayout() {
  return (
    <Topbar>
      <Outlet/>
    </Topbar>
  )
}
