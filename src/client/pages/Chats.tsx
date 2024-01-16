import ChatPanel from "../components/ChatPanel";
import ConversationPanel from "../components/ConversationPanel";

export default function Chats() {
  return (
    <div className="w-full h-full flex">
      <ConversationPanel/>
      <div
        className="ml-10 mr-12 w-1 bg-slate-800 rounded-full"
      ></div>
      <ChatPanel/>
    </div>
  )
}
