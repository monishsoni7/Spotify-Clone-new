import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMusicStore } from "@/stores/useMusicStore";
import { Calendar, Trash2 } from "lucide-react";
const SongsTable = () => {
    const { songs, isLoading, error, deleteSong } = useMusicStore();
    if (isLoading) {
        return (_jsx("div", { className: 'flex items-center justify-center py-8', children: _jsx("div", { className: 'text-zinc-400', children: "Loading songs..." }) }));
    }
    if (error) {
        return (_jsx("div", { className: 'flex items-center justify-center py-8', children: _jsx("div", { className: 'text-red-400', children: error }) }));
    }
    return (_jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { className: 'hover:bg-zinc-800/50', children: [_jsx(TableHead, { className: 'w-[50px]' }), _jsx(TableHead, { children: "Title" }), _jsx(TableHead, { children: "Artist" }), _jsx(TableHead, { children: "Release Date" }), _jsx(TableHead, { className: 'text-right', children: "Actions" })] }) }), _jsx(TableBody, { children: songs.map((song) => (_jsxs(TableRow, { className: 'hover:bg-zinc-800/50', children: [_jsx(TableCell, { children: _jsx("img", { src: song.imageUrl, alt: song.title, className: 'size-10 rounded object-cover' }) }), _jsx(TableCell, { className: 'font-medium', children: song.title }), _jsx(TableCell, { children: song.artist }), _jsx(TableCell, { children: _jsxs("span", { className: 'inline-flex items-center gap-1 text-zinc-400', children: [_jsx(Calendar, { className: 'h-4 w-4' }), song.createdAt.split("T")[0]] }) }), _jsx(TableCell, { className: 'text-right', children: _jsx("div", { className: 'flex gap-2 justify-end', children: _jsx(Button, { variant: "ghost", size: "sm", className: 'text-red-400 hover:text-red-300 hover:bg-red-400/10', onClick: () => deleteSong(song._id), children: _jsx(Trash2, { className: 'size-4' }) }) }) })] }, song._id))) })] }));
};
export default SongsTable;
