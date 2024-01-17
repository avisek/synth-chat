import ChatPanel from "../components/ChatPanel";
import ConversationPanel from "../components/ConversationPanel";

export default function Chats() {
  return (
    <div className="p-6 w-full h-full flex">
      <ConversationPanel/>
      <div className="ml-10 mr-12 self-stretch border border-slate-800"></div>
      <ChatPanel/>
    </div>
  )
}
