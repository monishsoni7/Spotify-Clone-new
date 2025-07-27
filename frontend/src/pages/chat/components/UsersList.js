import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import UsersListSkeleton from "@/components/skeletons/UsersListSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatStore } from "@/stores/useChatStore";
const UsersList = () => {
    const { users, selectedUser, isLoading, setSelectedUser, onlineUsers } = useChatStore();
    return (_jsx("div", { className: 'border-r border-zinc-800', children: _jsx("div", { className: 'flex flex-col h-full', children: _jsx(ScrollArea, { className: 'h-[calc(100vh-280px)]', children: _jsx("div", { className: 'space-y-2 p-4', children: isLoading ? (_jsx(UsersListSkeleton, {})) : (users.map((user) => (_jsxs("div", { onClick: () => setSelectedUser(user), className: `flex items-center justify-center lg:justify-start gap-3 p-3 
										rounded-lg cursor-pointer transition-colors
                    ${selectedUser?.clerkId === user.clerkId ? "bg-zinc-800" : "hover:bg-zinc-800/50"}`, children: [_jsxs("div", { className: 'relative', children: [_jsxs(Avatar, { className: 'size-8 md:size-12', children: [_jsx(AvatarImage, { src: user.imageUrl }), _jsx(AvatarFallback, { children: user.fullName[0] })] }), _jsx("div", { className: `absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-zinc-900
                        ${onlineUsers.has(user.clerkId) ? "bg-green-500" : "bg-zinc-500"}` })] }), _jsx("div", { className: 'flex-1 min-w-0 lg:block hidden', children: _jsx("span", { className: 'font-medium truncate', children: user.fullName }) })] }, user._id)))) }) }) }) }));
};
export default UsersList;
