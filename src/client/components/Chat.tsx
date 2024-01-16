export type ChatProps = {
  role: 'user' | 'assistant'
  content: string
}

export default function Chat({ role, content }: ChatProps) {
  return (
    <div
      className="my-2"
    >
      <div
        className="mx-6 px-4 py-3 bg-slate-200 dark:bg-slate-800 rounded-md"
      >
        {content}
      </div>
    </div>
  )
}
