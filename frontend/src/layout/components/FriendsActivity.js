import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatStore } from "@/stores/useChatStore";
import { useUser } from "@clerk/clerk-react";
import { HeadphonesIcon, Music, Users } from "lucide-react";
import { useEffect } from "react";
const FriendsActivity = () => {
    const { users, fetchUsers, onlineUsers, userActivities } = useChatStore();
    const { user } = useUser();
    useEffect(() => {
        if (user)
            fetchUsers();
    }, [fetchUsers, user]);
    return (_jsxs("div", { className: 'h-full bg-zinc-900 rounded-lg flex flex-col', children: [_jsx("div", { className: 'p-4 flex justify-between items-center border-b border-zinc-800', children: _jsxs("div", { className: 'flex items-center gap-2', children: [_jsx(Users, { className: 'size-5 shrink-0' }), _jsx("h2", { className: 'font-semibold', children: "What they're listening to" })] }) }), !user && _jsx(LoginPrompt, {}), _jsx(ScrollArea, { className: 'flex-1', children: _jsx("div", { className: 'p-4 space-y-4', children: users.map((user) => {
                        const activity = userActivities.get(user.clerkId);
                        const isPlaying = activity && activity !== "Idle";
                        return (_jsx("div", { className: 'cursor-pointer hover:bg-zinc-800/50 p-3 rounded-md transition-colors group', children: _jsxs("div", { className: 'flex items-start gap-3', children: [_jsxs("div", { className: 'relative', children: [_jsxs(Avatar, { className: 'size-10 border border-zinc-800', children: [_jsx(AvatarImage, { src: user.imageUrl, alt: user.fullName }), _jsx(AvatarFallback, { children: user.fullName[0] })] }), _jsx("div", { className: `absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-zinc-900 
												${onlineUsers.has(user.clerkId) ? "bg-green-500" : "bg-zinc-500"}
												`, "aria-hidden": 'true' })] }), _jsxs("div", { className: 'flex-1 min-w-0', children: [_jsxs("div", { className: 'flex items-center gap-2', children: [_jsx("span", { className: 'font-medium text-sm text-white', children: user.fullName }), isPlaying && _jsx(Music, { className: 'size-3.5 text-emerald-400 shrink-0' })] }), isPlaying ? (_jsxs("div", { className: 'mt-1', children: [_jsx("div", { className: 'mt-1 text-sm text-white font-medium truncate', children: activity.replace("Playing ", "").split(" by ")[0] }), _jsx("div", { className: 'text-xs text-zinc-400 truncate', children: activity.split(" by ")[1] })] })) : (_jsx("div", { className: 'mt-1 text-xs text-zinc-400', children: "Idle" }))] })] }) }, user._id));
                    }) }) })] }));
};
export default FriendsActivity;
const LoginPrompt = () => (_jsxs("div", { className: 'h-full flex flex-col items-center justify-center p-6 text-center space-y-4', children: [_jsxs("div", { className: 'relative', children: [_jsx("div", { className: 'absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-lg\n       opacity-75 animate-pulse', "aria-hidden": 'true' }), _jsx("div", { className: 'relative bg-zinc-900 rounded-full p-4', children: _jsx(HeadphonesIcon, { className: 'size-8 text-emerald-400' }) })] }), _jsxs("div", { className: 'space-y-2 max-w-[250px]', children: [_jsx("h3", { className: 'text-lg font-semibold text-white', children: "See What Friends Are Playing" }), _jsx("p", { className: 'text-sm text-zinc-400', children: "Login to discover what music your friends are enjoying right now" })] })] }));
