import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

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
    <div className="w-full h-full grid place-content-center">
      
      <div className="w-96">
      <h1 className="mb-3 text-4xl text-center">Create your account</h1>
        <form
          className="grid"
          onSubmit={handleSubmit}
        >
          
          <div className="mb-5">
            <label className="block px-4 py-3 leading-none" htmlFor="name">Name</label>
            <input
              className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-800 rounded-full"
              type="text"
              id="name"
              name="name"
            />
          </div>
          
          <div className="mb-5">
            <label className="block px-4 py-3 leading-none" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-800 rounded-full"
              type="email"
              id="email"
              name="email"
            />
          </div>
          
          <div className="mb-5">
            <label className="block px-4 pb-3 leading-none" htmlFor="password">Password</label>
            <input
              className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-800 rounded-full"
              type="password"
              id="password"
              name="password"
            />
          </div>
          
          <button
            className="min-w-32 mx-auto mt-2 p-3 text-green-600 dark:text-green-400 border border-green-500 rounded-full hover:bg-green-400 hover:text-green-950 active:bg-green-500 active:scale-95 transition hover:font-bold text-center"
          >Sign up</button>
          
        </form>
      </div>
      
    </div>
  )
}
