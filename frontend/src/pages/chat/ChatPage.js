import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Topbar from "@/components/Topbar";
import { useChatStore } from "@/stores/useChatStore";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import UsersList from "./components/UsersList";
import ChatHeader from "./components/ChatHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import MessageInput from "./components/MessageInput";
const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};
const ChatPage = () => {
    const { user } = useUser();
    const { messages, selectedUser, fetchUsers, fetchMessages } = useChatStore();
    useEffect(() => {
        if (user)
            fetchUsers();
    }, [fetchUsers, user]);
    useEffect(() => {
        if (selectedUser)
            fetchMessages(selectedUser.clerkId);
    }, [selectedUser, fetchMessages]);
    console.log({ messages });
    return (_jsxs("main", { className: 'h-full rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden', children: [_jsx(Topbar, {}), _jsxs("div", { className: 'grid lg:grid-cols-[300px_1fr] grid-cols-[80px_1fr] h-[calc(100vh-180px)]', children: [_jsx(UsersList, {}), _jsx("div", { className: 'flex flex-col h-full', children: selectedUser ? (_jsxs(_Fragment, { children: [_jsx(ChatHeader, {}), _jsx(ScrollArea, { className: 'h-[calc(100vh-340px)]', children: _jsx("div", { className: 'p-4 space-y-4', children: messages.map((message) => (_jsxs("div", { className: `flex items-start gap-3 ${message.senderId === user?.id ? "flex-row-reverse" : ""}`, children: [_jsx(Avatar, { className: 'size-8', children: _jsx(AvatarImage, { src: message.senderId === user?.id
                                                            ? user.imageUrl
                                                            : selectedUser.imageUrl }) }), _jsxs("div", { className: `rounded-lg p-3 max-w-[70%]
													${message.senderId === user?.id ? "bg-green-500" : "bg-zinc-800"}
												`, children: [_jsx("p", { className: 'text-sm', children: message.content }), _jsx("span", { className: 'text-xs text-zinc-300 mt-1 block', children: formatTime(message.createdAt) })] })] }, message._id))) }) }), _jsx(MessageInput, {})] })) : (_jsx(NoConversationPlaceholder, {})) })] })] }));
};
export default ChatPage;
const NoConversationPlaceholder = () => (_jsxs("div", { className: 'flex flex-col items-center justify-center h-full space-y-6', children: [_jsx("div", { className: 'animate-bounce', children: _jsxs("svg", { width: '64', height: '64', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg', children: [_jsx("defs", { children: _jsxs("linearGradient", { id: 'iconGradient', x1: '0%', y1: '0%', x2: '100%', y2: '100%', children: [_jsx("stop", { offset: '0%', style: { stopColor: '#1ED760', stopOpacity: 1 } }), _jsx("stop", { offset: '100%', style: { stopColor: '#1DB954', stopOpacity: 1 } })] }) }), _jsxs("g", { fill: 'url(#iconGradient)', children: [_jsx("path", { d: 'M25,55 C25,25 75,25 75,55', strokeWidth: '10', stroke: 'url(#iconGradient)', fill: 'none', strokeLinecap: 'round' }), _jsx("circle", { cx: '25', cy: '60', r: '15' }), _jsx("path", { d: 'M75,45 C64,45 55,54 55,65 C55,76 64,85 75,85 C83,85 89,81 92,75 L90,88 L98,78 C96,70 90,60 90,65 C90,54 83,45 75,45 Z' }), _jsx("polygon", { fill: '#FFFFFF', points: '70,58 83,65 70,72' })] })] }) }), _jsxs("div", { className: 'text-center', children: [_jsx("h3", { className: 'text-zinc-300 text-lg font-medium mb-1', children: "No conversation selected" }), _jsx("p", { className: 'text-zinc-500 text-sm', children: "Choose a friend to start chatting" })] })] }));
