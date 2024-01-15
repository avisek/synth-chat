export default function LogIn() {
  return (
    <div className="w-full h-full grid place-content-center">
      
      <div className="w-96">
      <h1 className="mb-3 text-4xl text-center">Welcome back</h1>
        <form className="grid">
          
          <div className="mb-5">
            <label className="block px-4 py-3 leading-none" htmlFor="email">Email</label>
            <input type="email" className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-800 rounded-full" id="email"/>
          </div>
          
          <div className="mb-5">
            <label className="block px-4 pb-3 leading-none" htmlFor="password">Password</label>
            <input type="password" className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-800 rounded-full" id="password"/>
          </div>
          
          <button
            className="min-w-32 mx-auto mt-2 p-3 text-green-600 dark:text-green-400 border border-green-500 rounded-full hover:bg-green-400 hover:text-green-950 active:bg-green-500 active:scale-95 transition hover:font-bold text-center"
          >Log in</button>
          
        </form>
      </div>
      
    </div>
  )
}
