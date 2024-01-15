import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="w-full h-full grid place-content-center">
      <div className="max-w-xl md:text-center">
        <h1 className="text-5xl font-semibold tracking-tight mb-3">SynthChat</h1>
        <p className="mb-4 text-2xl font-light text-pretty">Your next-gen chat experience, where ChatGPT meets sleek design for conversations that redefine brilliance!</p>
        <div className="grid grid-cols-[repeat(auto-fit,_6.5rem)] justify-start md:justify-center gap-4 mx-auto">
          <Link
            className="p-3 text-green-600 dark:text-green-400 border border-green-500 rounded-full hover:bg-green-400 hover:text-green-950 active:bg-green-500 active:scale-95 transition hover:font-bold text-center"
            to="signup"
            role="button"
          >Sign up</Link>
          <Link
            className="p-3 text-green-600 dark:text-green-400 border border-green-500 rounded-full hover:bg-green-400 hover:text-green-950 active:bg-green-500 active:scale-95 transition hover:font-bold text-center"
            to="login"
            role="button"
          >Log in</Link>
        </div>
      </div>
    </div>
  )
}
