import { Link } from "react-router-dom"
import Conversation from "./Conversation"

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
  
  return (
    <div
      className="w-full h-full grid grid-rows-[auto,_1fr,_auto]"
    >
      <h2
        className="mb-7 text-3xl font-semibold"
      >Text Generator</h2>
      
      <div
        className="overflow-y-auto"
      >
        {conversations.map(({id, text}) => (
          <Conversation key={id} id={id} text={text}/>
        ))}
      </div>
      
      <Link
        className="mt-2 px-4 py-3 flex items-center text-green-600 dark:text-green-400 border border-green-500 rounded-full hover:bg-green-400 hover:text-green-950 active:bg-green-500 active:scale-95 transition hover:font-bold"
        to='/'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6 mr-3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        New Chat
      </Link>
      <Link
        className="mt-2 px-4 py-3 flex items-center text-red-600 dark:text-red-400 border border-red-500 rounded-full hover:bg-red-400 hover:text-red-950 active:bg-red-500 active:scale-95 transition hover:font-bold"
        to='/'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6 mr-3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
        </svg>
        Clear Conversations
      </Link>
    </div>
  )
}
