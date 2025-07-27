import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChatStore } from "@/stores/useChatStore";
const ChatHeader = () => {
    const { selectedUser, onlineUsers } = useChatStore();
    if (!selectedUser)
        return null;
    return (_jsx("div", { className: 'p-4 border-b border-zinc-800', children: _jsxs("div", { className: 'flex items-center gap-3', children: [_jsxs(Avatar, { children: [_jsx(AvatarImage, { src: selectedUser.imageUrl }), _jsx(AvatarFallback, { children: selectedUser.fullName[0] })] }), _jsxs("div", { children: [_jsx("h2", { className: 'font-medium', children: selectedUser.fullName }), _jsx("p", { className: 'text-sm text-zinc-400', children: onlineUsers.has(selectedUser.clerkId) ? "Online" : "Offline" })] })] }) }));
};
export default ChatHeader;
