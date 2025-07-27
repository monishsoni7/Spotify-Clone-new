import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMusicStore } from "@/stores/useMusicStore";
import { Calendar, Music, Trash2 } from "lucide-react";
import { useEffect } from "react";
const AlbumsTable = () => {
    const { albums, deleteAlbum, fetchAlbums } = useMusicStore();
    useEffect(() => {
        fetchAlbums();
    }, [fetchAlbums]);
    return (_jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { className: 'hover:bg-zinc-800/50', children: [_jsx(TableHead, { className: 'w-[50px]' }), _jsx(TableHead, { children: "Title" }), _jsx(TableHead, { children: "Artist" }), _jsx(TableHead, { children: "Release Year" }), _jsx(TableHead, { children: "Songs" }), _jsx(TableHead, { className: 'text-right', children: "Actions" })] }) }), _jsx(TableBody, { children: albums.map((album) => (_jsxs(TableRow, { className: 'hover:bg-zinc-800/50', children: [_jsx(TableCell, { children: _jsx("img", { src: album.imageUrl, alt: album.title, className: 'w-10 h-10 rounded object-cover' }) }), _jsx(TableCell, { className: 'font-medium', children: album.title }), _jsx(TableCell, { children: album.artist }), _jsx(TableCell, { children: _jsxs("span", { className: 'inline-flex items-center gap-1 text-zinc-400', children: [_jsx(Calendar, { className: 'h-4 w-4' }), album.releaseYear] }) }), _jsx(TableCell, { children: _jsxs("span", { className: 'inline-flex items-center gap-1 text-zinc-400', children: [_jsx(Music, { className: 'h-4 w-4' }), album.songs.length, " songs"] }) }), _jsx(TableCell, { className: 'text-right', children: _jsx("div", { className: 'flex gap-2 justify-end', children: _jsx(Button, { variant: 'ghost', size: 'sm', onClick: () => deleteAlbum(album._id), className: 'text-red-400 hover:text-red-300 hover:bg-red-400/10', children: _jsx(Trash2, { className: 'h-4 w-4' }) }) }) })] }, album._id))) })] }));
};
export default AlbumsTable;
