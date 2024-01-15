import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="w-full h-full grid place-content-center">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-medium mb-3">Oops!</h1>
        <p className="mb-4 text-8xl font-light">404</p>
        <p>Go to the <NavLink className="text-green-600 dark:text-green-400" to="/">Homepage</NavLink>.</p>
      </div>
    </div>
  )
}
