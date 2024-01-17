import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { cn } from '../utils/cn'

export type ProfilePopoverProps = {
  
}

export default function ProfilePopover({  }: ProfilePopoverProps) {
  const auth = useAuth()
  const name = auth?.user?.name ?? ''
  
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="">
      
      <div
        className="px-2 py-2 flex items-center hover:bg-zinc-700 rounded-md transition active:scale-95"
        onClick={() => setIsOpen(true)}
      >
        <img
          className="w-9 h-9 rounded-full"
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`}
          key={name}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      
      <div
        className={cn(
          'fixed inset-0 w-full h-full z-10 bg-slate-900/50 pointer-events-none opacity-0 transition-opacity',
          isOpen && 'pointer-events-auto opacity-100',
        )}
        onClick={() => setIsOpen(false)}
      ></div>
      
      <div
        className={cn(
          'absolute right-0 mx-7 my-2 w-max z-20 rounded-xl bg-slate-800 pointer-events-none opacity-0 transition',
          isOpen && 'pointer-events-auto opacity-100',
        )}
      >
        <ul className="">
          <li
            className="p-1 flex items-center text-red-400"
          >
            <Link
              className="px-4 py-3 flex items-center hover:bg-slate-700 rounded-xl transition active:scale-95"
              to="/"
              onClick={() => {auth?.isLoggedIn && auth.logout()}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
              Logout
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
  )
}
