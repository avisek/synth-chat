import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AxiosError } from 'axios'

export default function LogIn() {
  const navigate = useNavigate()
  const auth = useAuth()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    try {
      toast.loading('Signing In', { id: 'login' })
      await auth?.login(email, password)
      toast.success('Signed In Successfully', { id: 'login' })
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        if (error.response) {
          if (error.response.data.message === 'Validation error') {
            toast.error(
              error.response.data.errors[0].msg,
              { id: 'login' }
            )
          } else {
            toast.error(
              error.response.data?.message,
              { id: 'login' }
            )
          }
        } else if (error.request) {
          toast.error(
            'Server Error\n\n' +
            'The request was made but no response was received',
            { id: 'login' }
          )
        } else {
          console.log('Error', error.message)
        }
        return
      }
      toast.error('Signing In Failed', { id: 'login' })
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
      <h1 className="mb-3 text-3xl font-semibold text-center">Welcome back</h1>
        <form
          className="grid"
          onSubmit={handleSubmit}
        >
          
          <div className="mb-5">
            <label className="block px-5 py-3 text-md leading-none" htmlFor="email">Email</label>
            <input
              className="w-full px-5 py-[10px] rounded-full transition bg-slate-800 outline-none border border-transparent focus:border-green-500 focus:bg-slate-700 hover:bg-slate-700"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          
          <div className="mb-5">
            <label className="block px-5 py-3 text-md leading-none" htmlFor="password">Password</label>
            <input
              className="w-full px-5 py-[10px] rounded-full transition bg-slate-800 outline-none border border-transparent focus:border-green-500 focus:bg-slate-700 hover:bg-slate-700"
              type="password"
              id="password"
              name="password"
              required
              minLength={6}
            />
          </div>
          
          <p
            className="mb-5 px-5"
          >
            Don't have an account?
            <Link
              className="float-right text-green-400 hover:text-green-300 hover:font-semibold"
              to="/signup"
            >Sign up</Link>
          </p>
          
          <button
            className="min-w-32 mx-auto mt-2 p-3 text-green-400 border border-green-500 rounded-full hover:bg-green-400 hover:text-green-950 active:bg-green-500 active:scale-95 transition hover:font-bold text-center"
          >Log in</button>
          
        </form>
      </div>
      
    </div>
  )
}
