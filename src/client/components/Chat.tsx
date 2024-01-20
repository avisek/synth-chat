import { cn } from '../utils/cn'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import LoadingDots from './LoadingDots'

export type ChatProps = {
  role: 'user' | 'assistant'
  content?: string
  loading?: boolean
}

export default function Chat({ role, content = '', loading = false }: ChatProps) {
  return (
    <div className="my-5 flex flex-col items-center">
      <div
        className={cn(
          'px-4 py-3 bg-slate-800 rounded-xl',
          role === 'assistant' && 'self-start mr-16',
          role === 'user' && 'self-end ml-16',
        )}
      >
        {loading ? (
          <LoadingDots/>
        ) : (
          <Markdown remarkPlugins={[remarkGfm]} className="prose prose-invert">
            {content}
          </Markdown>
        )}
      </div>
    </div>
  )
}
