import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()
  const auth = useAuth()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    try {
      toast.loading('Signing Up', { id: 'signup' })
      await auth?.signup(name, email, password)
      toast.success('Signed Up Successfully', { id: 'signup' })
    } catch (error) {
      console.log(error)
      toast.error('Signing Up Failed', { id: 'signup' })
    }
  }
  
  useEffect(() => {
    if (auth?.user) {
      return navigate('/chat')
    }
  }, [auth])
  
  return (
    <div className="p-6 w-full h-full grid place-content-center">
      
      <div className="w-80">
      <h1 className="mb-3 text-3xl font-semibold text-center">Create your account</h1>
        <form
          className="grid"
          onSubmit={handleSubmit}
        >
          
          <div className="mb-5">
            <label className="block px-5 py-3 text-md leading-none" htmlFor="name">Name</label>
            <input
              className="w-full px-5 py-[10px] rounded-full transition bg-slate-800 outline-none border border-transparent focus:border-green-500 focus:bg-slate-700 hover:bg-slate-700"
              type="text"
              id="name"
              name="name"
            />
          </div>
          
          <div className="mb-5">
            <label className="block px-5 py-3 text-md leading-none" htmlFor="email">Email</label>
            <input
              className="w-full px-5 py-[10px] rounded-full transition bg-slate-800 outline-none border border-transparent focus:border-green-500 focus:bg-slate-700 hover:bg-slate-700"
              type="email"
              id="email"
              name="email"
            />
          </div>
          
          <div className="mb-5">
            <label className="block px-5 py-3 text-md leading-none" htmlFor="password">Password</label>
            <input
              className="w-full px-5 py-[10px] rounded-full transition bg-slate-800 outline-none border border-transparent focus:border-green-500 focus:bg-slate-700 hover:bg-slate-700"
              type="password"
              id="password"
              name="password"
            />
          </div>
          
          <p
            className="mb-5 px-5"
          >
            Already have an account?&nbsp;
            <Link
              className="float-right text-green-400 hover:text-green-300 hover:font-semibold"
              to="/login"
            >Log in</Link>
          </p>
          
          <button
            className="min-w-32 mx-auto mt-2 p-3 text-green-400 border border-green-500 rounded-full hover:bg-green-400 hover:text-green-950 active:bg-green-500 active:scale-95 transition hover:font-bold text-center"
          >Sign up</button>
          
        </form>
      </div>
      
    </div>
  )
}
