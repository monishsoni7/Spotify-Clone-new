import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMusicStore } from "@/stores/useMusicStore";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Clock, Pause, Play } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};
const AlbumPage = () => {
    const { albumId } = useParams();
    const { fetchAlbumById, currentAlbum, isLoading } = useMusicStore();
    const { currentSong, isPlaying, playAlbum, togglePlay } = usePlayerStore();
    useEffect(() => {
        if (albumId)
            fetchAlbumById(albumId);
    }, [fetchAlbumById, albumId]);
    if (isLoading)
        return null;
    const handlePlayAlbum = () => {
        if (!currentAlbum)
            return;
        const isCurrentAlbumPlaying = currentAlbum?.songs.some((song) => song._id === currentSong?._id);
        if (isCurrentAlbumPlaying)
            togglePlay();
        else {
            // start playing the album from the beginning
            playAlbum(currentAlbum?.songs, 0);
        }
    };
    const handlePlaySong = (index) => {
        if (!currentAlbum)
            return;
        playAlbum(currentAlbum?.songs, index);
    };
    return (_jsx("div", { className: 'h-full', children: _jsx(ScrollArea, { className: 'h-full rounded-md', children: _jsxs("div", { className: 'relative min-h-full', children: [_jsx("div", { className: 'absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80\n\t\t\t\t\t to-zinc-900 pointer-events-none', "aria-hidden": 'true' }), _jsxs("div", { className: 'relative z-10', children: [_jsxs("div", { className: 'flex p-6 gap-6 pb-8', children: [_jsx("img", { src: currentAlbum?.imageUrl, alt: currentAlbum?.title, className: 'w-[240px] h-[240px] shadow-xl rounded' }), _jsxs("div", { className: 'flex flex-col justify-end', children: [_jsx("p", { className: 'text-sm font-medium', children: "Album" }), _jsx("h1", { className: 'text-7xl font-bold my-4', children: currentAlbum?.title }), _jsxs("div", { className: 'flex items-center gap-2 text-sm text-zinc-100', children: [_jsx("span", { className: 'font-medium text-white', children: currentAlbum?.artist }), _jsxs("span", { children: ["\u2022 ", currentAlbum?.songs.length, " songs"] }), _jsxs("span", { children: ["\u2022 ", currentAlbum?.releaseYear] })] })] })] }), _jsx("div", { className: 'px-6 pb-4 flex items-center gap-6', children: _jsx(Button, { onClick: handlePlayAlbum, size: 'icon', className: 'w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 \n                hover:scale-105 transition-all', children: isPlaying && currentAlbum?.songs.some((song) => song._id === currentSong?._id) ? (_jsx(Pause, { className: 'h-7 w-7 text-black' })) : (_jsx(Play, { className: 'h-7 w-7 text-black' })) }) }), _jsxs("div", { className: 'bg-black/20 backdrop-blur-sm', children: [_jsxs("div", { className: 'grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm \n            text-zinc-400 border-b border-white/5', children: [_jsx("div", { children: "#" }), _jsx("div", { children: "Title" }), _jsx("div", { children: "Released Date" }), _jsx("div", { children: _jsx(Clock, { className: 'h-4 w-4' }) })] }), _jsx("div", { className: 'px-6', children: _jsx("div", { className: 'space-y-2 py-4', children: currentAlbum?.songs.map((song, index) => {
                                                const isCurrentSong = currentSong?._id === song._id;
                                                return (_jsxs("div", { onClick: () => handlePlaySong(index), className: `grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-4 py-2 text-sm 
                      text-zinc-400 hover:bg-white/5 rounded-md group cursor-pointer
                      `, children: [_jsxs("div", { className: 'flex items-center justify-center', children: [isCurrentSong && isPlaying ? (_jsx("div", { className: 'size-4 text-green-500', children: "\u266B" })) : (_jsx("span", { className: 'group-hover:hidden', children: index + 1 })), !isCurrentSong && (_jsx(Play, { className: 'h-4 w-4 hidden group-hover:block' }))] }), _jsxs("div", { className: 'flex items-center gap-3', children: [_jsx("img", { src: song.imageUrl, alt: song.title, className: 'size-10' }), _jsxs("div", { children: [_jsx("div", { className: `font-medium text-white`, children: song.title }), _jsx("div", { children: song.artist })] })] }), _jsx("div", { className: 'flex items-center', children: song.createdAt.split("T")[0] }), _jsx("div", { className: 'flex items-center', children: formatDuration(song.duration) })] }, song._id));
                                            }) }) })] })] })] }) }) }));
};
export default AlbumPage;
