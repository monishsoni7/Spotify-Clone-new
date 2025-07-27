import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatStore } from "@/stores/useChatStore";
import { useUser } from "@clerk/clerk-react";
import { Send } from "lucide-react";
import { useState } from "react";
const MessageInput = () => {
    const [newMessage, setNewMessage] = useState("");
    const { user } = useUser();
    const { selectedUser, sendMessage } = useChatStore();
    const handleSend = () => {
        if (!selectedUser || !user || !newMessage)
            return;
        sendMessage(selectedUser.clerkId, user.id, newMessage.trim());
        setNewMessage("");
    };
    return (_jsx("div", { className: 'p-4 mt-auto border-t border-zinc-800', children: _jsxs("div", { className: 'flex gap-2', children: [_jsx(Input, { placeholder: 'Type a message', value: newMessage, onChange: (e) => setNewMessage(e.target.value), className: 'bg-zinc-800 border-none', onKeyDown: (e) => e.key === "Enter" && handleSend() }), _jsx(Button, { size: "icon", onClick: handleSend, disabled: !newMessage.trim(), children: _jsx(Send, { className: 'size-4' }) })] }) }));
};
export default MessageInput;
