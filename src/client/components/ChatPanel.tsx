import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { deleteUserChats, getUserChats, sendChatRequest } from '../helpers/apiCommunicator'
import toast from 'react-hot-toast'
import Chat from './Chat'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export type ChatPanelProps = {
  
}

export default function ChatPanel({  }: ChatPanelProps) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const auth = useAuth()
  const [chatMessages, setChatMessages] = useState<Message[]>([])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = inputRef.current?.value as string
    if (inputRef && inputRef.current) {
      inputRef.current.value = ''
    }
    const newMessage: Message = { role: 'user', content }
    setChatMessages((prev) => [...prev, newMessage])
    const chatData = await sendChatRequest(content)
    setChatMessages([...chatData.chats])
    //
  }
  const handleDeleteChats = async () => {
    try {
      toast.loading('Deleting Chats', { id: 'deletechats' })
      await deleteUserChats()
      setChatMessages([])
      toast.success('Deleted Chats Successfully', { id: 'deletechats' })
    } catch (error) {
      console.log(error)
      toast.error('Deleting chats failed', { id: 'deletechats' })
    }
  }
  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading('Loading Chats', { id: 'loadchats' })
      getUserChats()
        .then((data) => {
          setChatMessages([...data.chats])
          toast.success('Successfully loaded chats', { id: 'loadchats' })
        })
        .catch((err) => {
          console.log(err)
          toast.error('Loading Failed', { id: 'loadchats' })
        })
    }
  }, [auth])
  useEffect(() => {
    if (!auth?.user) {
      return navigate('/login')
    }
  }, [auth])
  
  return (
    <div
      className="w-full h-full grid grid-rows-[1fr,_auto]"
    >
      <div className="overflow-y-auto pr-3">
        {chatMessages.map(({role, content}, index) => (
          <Chat key={index} role={role} content={content}/>
        ))}
      </div>
        
      <form
        onSubmit={handleSubmit}
        className="p-2 flex items-stretch border border-slate-400 rounded-lg"
      >
        
        <button
          type="button"
          className="px-2 hover:bg-slate-700 rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
          </svg>
        </button>
        
        <input
          ref={inputRef}
          className="grow px-2 py-2 bg-transparent outline-none"
          type="text"
          placeholder="Send a message"
        />
        
        <button
          type="button"
          className="px-2 hover:bg-slate-700 rounded-md"
          // onClick={handleDeleteChats}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
        </button>
        
        <button
          className="px-2 hover:bg-slate-700 rounded-md"
          type="submit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
        
      </form>
      
    </div>
  )
}
