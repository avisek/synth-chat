import { ReactNode } from "react"
import { Link } from "react-router-dom"
import ProfilePopover from "./ProfilePopover"

export type TopbarProps = {
  children: ReactNode
}

export default function Topbar({ children }: TopbarProps) {
  return (
    <div className="w-full h-full max-h-dvh overflow-y-auto grid grid-rows-[auto,_1fr]">
      <div className="p-3 flex items-center bg-zinc-800">
        
        <div
          className="mx-auto w-64 max-w-full flex items-center bg-slate-800 border-2 border-slate-600 rounded-full"
        >
          <input
            className="w-full -mr-12 px-4 py-2 pr-12 bg-transparent rounded-full"
            placeholder="Search anything..."
            type="text"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-3 text-slate-400 pointer-events-none">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        
        <ul
          className="flex items-center"
        >
          <li>
            <Link
              className="block px-3 py-3 hover:bg-zinc-700 rounded-md transition active:scale-95"
              to="#"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </Link>
          </li>
          <li>
            <ProfilePopover/>
          </li>
        </ul>
        
      </div>
      
      <div className="p-6">
        {children}
      </div>
      
    </div>
  )
}
