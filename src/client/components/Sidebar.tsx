import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export type SidebarProps = {
  children: ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
  const auth = useAuth()
  
  return (
    <div className="w-full h-full grid grid-cols-[auto,_1fr]">
      <div className="p-2 flex flex-col bg-slate-800">
        
        <NavLink
          className="px-4 py-3 flex flex-col items-center hover:bg-slate-700 rounded-md transition active:scale-95"
          to="/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M15.8564 0L22.7846 4H19.8564V7H15.8564V11H10.8564V16H15.8564V21H11.8564V25H8.85641V27.9585L2 24V8L15.8564 0Z" fill="#5051F9"/>
            <path d="M9 27.9585L15.9282 31.9585L29.7846 23.9585V7.95855L22.9282 4V6.95855H19.9282V10.9585H15.9282V15.9585H20.9282V20.9585H15.9282V24.9585H11.9282V27.9585H9Z" fill="#1CA6FB"/>
          </svg>
          <div className="mt-1 text-sm font-medium leading-none">
            Synth
          </div>
        </NavLink>
        
        <nav className="my-auto">
          <ul>
            <li>
              <NavLink
                className="px-4 py-5 flex flex-col items-center hover:bg-slate-700 rounded-md transition active:scale-95"
                to="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-4 py-5 flex flex-col items-center hover:bg-slate-700 rounded-md transition active:scale-95"
                to="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-4 py-5 flex flex-col items-center hover:bg-slate-700 rounded-md transition active:scale-95 text-green-400"
                to="/"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-4 py-5 flex flex-col items-center hover:bg-slate-700 rounded-md transition active:scale-95"
                to="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-4 py-5 flex flex-col items-center hover:bg-slate-700 rounded-md transition active:scale-95"
                to="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-4 py-5 flex flex-col items-center hover:bg-slate-700 rounded-md transition active:scale-95"
                to="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="px-4 py-5 flex flex-col items-center hover:bg-slate-700 rounded-md transition active:scale-95"
                to="/"
                onClick={() => {auth?.isLoggedIn && auth.logout()}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
              </NavLink>
            </li>
          </ul>
        </nav>
        
      </div>
      
      <div className="">
        {children}
      </div>
      
    </div>
  )
}
