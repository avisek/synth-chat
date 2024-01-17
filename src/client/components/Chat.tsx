import { cn } from "../utils/cn"

export type ChatProps = {
  role: 'user' | 'assistant'
  content: string
}

export default function Chat({ role, content }: ChatProps) {
  return (
    <div
      className="my-5 flex flex-col items-center"
    >
      <div
        className={cn(
          'px-4 py-3 bg-slate-800 rounded-xl',
          role === 'assistant' && 'self-start mr-16',
          role === 'user' && 'self-end ml-16',
        )}
      >
        {content}
      </div>
    </div>
  )
}
