import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PlaylistSkeleton from "@/components/skeletons/PlaylistSkeleton";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useMusicStore } from "@/stores/useMusicStore";
import { SignedIn } from "@clerk/clerk-react";
import { HomeIcon, Library, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const LeftSidebar = () => {
    const { albums, fetchAlbums, isLoading } = useMusicStore();
    useEffect(() => {
        fetchAlbums();
    }, [fetchAlbums]);
    console.log({ albums });
    return (_jsxs("div", { className: 'h-full flex flex-col gap-2', children: [_jsx("div", { className: 'rounded-lg bg-zinc-900 p-4', children: _jsxs("div", { className: 'space-y-2', children: [_jsxs(Link, { to: "/", className: cn(buttonVariants({
                                variant: "ghost",
                                className: "w-full justify-start text-white hover:bg-zinc-800",
                            })), children: [_jsx(HomeIcon, { className: 'mr-2 size-5' }), _jsx("span", { className: 'hidden md:inline', children: "Home" })] }), _jsx(SignedIn, { children: _jsxs(Link, { to: "/chat", className: cn(buttonVariants({
                                    variant: "ghost",
                                    className: "w-full justify-start text-white hover:bg-zinc-800",
                                })), children: [_jsx(MessageCircle, { className: 'mr-2 size-5' }), _jsx("span", { className: 'hidden md:inline', children: "Messages" })] }) })] }) }), _jsxs("div", { className: 'flex-1 rounded-lg bg-zinc-900 p-4', children: [_jsx("div", { className: 'flex items-center justify-between mb-4', children: _jsxs("div", { className: 'flex items-center text-white px-2', children: [_jsx(Library, { className: 'size-5 mr-2' }), _jsx("span", { className: 'hidden md:inline', children: "Playlists" })] }) }), _jsx(ScrollArea, { className: 'h-[calc(100vh-300px)]', children: _jsx("div", { className: 'space-y-2', children: isLoading ? (_jsx(PlaylistSkeleton, {})) : (albums.map((album) => (_jsxs(Link, { to: `/albums/${album._id}`, className: 'p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer', children: [_jsx("img", { src: album.imageUrl, alt: 'Playlist img', className: 'size-12 rounded-md flex-shrink-0 object-cover' }), _jsxs("div", { className: 'flex-1 min-w-0 hidden md:block', children: [_jsx("p", { className: 'font-medium truncate', children: album.title }), _jsxs("p", { className: 'text-sm text-zinc-400 truncate', children: ["Album \u2022 ", album.artist] })] })] }, album._id)))) }) })] })] }));
};
export default LeftSidebar;
