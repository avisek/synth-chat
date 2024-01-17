import { Link, useNavigate } from "react-router-dom"
import Conversation from "./Conversation"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { deleteUserChats, getUserChats, sendChatRequest } from "../helpers/apiCommunicator"
import toast from "react-hot-toast"

type Message = {
  role: 'user' | 'assistant'
  content: string
}

type Conversation = {
  id: string
  text: string
}

export type ConversationPanelProps = {
  
}

export default function ConversationPanel({  }: ConversationPanelProps) {
  const conversations = [
    { id: '1', text: 'Impact of AI on User Experiences' },
    { id: '2', text: 'Impact of AI on User Experiences' },
    { id: '3', text: 'Voice User Interfaces (VUI)' },
    { id: '4', text: 'Data-Driven UX' },
    { id: '5', text: 'Chatbots and Conversational AI' },
    { id: '6', text: 'Visual Recognition in UX' },
    { id: '7', text: 'Ethical AI Design' },
  ]
  
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const auth = useAuth()
  const [chatMessages, setChatMessages] = useState<Message[]>([])
  const handleSubmit = async () => {
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
      className="w-1/3 h-full grid grid-rows-[auto,_1fr,_auto]"
    >
      <h2
        className="mb-7 text-3xl font-semibold"
      >Text Generator</h2>
      
      <div
        className="overflow-y-auto pr-3"
      >
        {conversations.map(({id, text}) => (
          <Conversation key={id} id={id} text={text}/>
        ))}
      </div>
      
      <div className="">
        <Link
          className="mt-4 px-4 py-3 flex items-center text-green-400 border border-green-500 rounded-full hover:bg-green-400 hover:text-green-950 active:bg-green-500 active:scale-95 transition"
          to='/'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <div className="overflow-hidden whitespace-nowrap text-ellipsis">
            New Chat
          </div>
        </Link>
        
        <Link
          className="mt-4 px-4 py-3 flex items-center text-red-400 border border-red-500 rounded-full hover:bg-red-400 hover:text-red-950 active:bg-red-500 active:scale-95 transition"
          to='/'
          onClick={handleDeleteChats}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
          </svg>
          <div className="overflow-hidden whitespace-nowrap text-ellipsis">
            Clear Conversations
          </div>
        </Link>
      </div>
    </div>
  )
}
