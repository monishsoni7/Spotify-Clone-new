import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Laptop2, ListMusic, Mic2, Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};
export const PlaybackControls = () => {
    const { currentSong, isPlaying, togglePlay, playNext, playPrevious } = usePlayerStore();
    const [volume, setVolume] = useState(75);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    useEffect(() => {
        audioRef.current = document.querySelector("audio");
        const audio = audioRef.current;
        if (!audio)
            return;
        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        const handleEnded = () => {
            usePlayerStore.setState({ isPlaying: false });
        };
        audio.addEventListener("ended", handleEnded);
        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [currentSong]);
    const handleSeek = (value) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value[0];
        }
    };
    return (_jsx("footer", { className: 'h-20 sm:h-24 bg-zinc-900 border-t border-zinc-800 px-4', children: _jsxs("div", { className: 'flex justify-between items-center h-full max-w-[1800px] mx-auto', children: [_jsx("div", { className: 'hidden sm:flex items-center gap-4 min-w-[180px] w-[30%]', children: currentSong && (_jsxs(_Fragment, { children: [_jsx("img", { src: currentSong.imageUrl, alt: currentSong.title, className: 'w-14 h-14 object-cover rounded-md' }), _jsxs("div", { className: 'flex-1 min-w-0', children: [_jsx("div", { className: 'font-medium truncate hover:underline cursor-pointer', children: currentSong.title }), _jsx("div", { className: 'text-sm text-zinc-400 truncate hover:underline cursor-pointer', children: currentSong.artist })] })] })) }), _jsxs("div", { className: 'flex flex-col items-center gap-2 flex-1 max-w-full sm:max-w-[45%]', children: [_jsxs("div", { className: 'flex items-center gap-4 sm:gap-6', children: [_jsx(Button, { size: 'icon', variant: 'ghost', className: 'hidden sm:inline-flex hover:text-white text-zinc-400', children: _jsx(Shuffle, { className: 'h-4 w-4' }) }), _jsx(Button, { size: 'icon', variant: 'ghost', className: 'hover:text-white text-zinc-400', onClick: playPrevious, disabled: !currentSong, children: _jsx(SkipBack, { className: 'h-4 w-4' }) }), _jsx(Button, { size: 'icon', className: 'bg-white hover:bg-white/80 text-black rounded-full h-8 w-8', onClick: togglePlay, disabled: !currentSong, children: isPlaying ? _jsx(Pause, { className: 'h-5 w-5' }) : _jsx(Play, { className: 'h-5 w-5' }) }), _jsx(Button, { size: 'icon', variant: 'ghost', className: 'hover:text-white text-zinc-400', onClick: playNext, disabled: !currentSong, children: _jsx(SkipForward, { className: 'h-4 w-4' }) }), _jsx(Button, { size: 'icon', variant: 'ghost', className: 'hidden sm:inline-flex hover:text-white text-zinc-400', children: _jsx(Repeat, { className: 'h-4 w-4' }) })] }), _jsxs("div", { className: 'hidden sm:flex items-center gap-2 w-full', children: [_jsx("div", { className: 'text-xs text-zinc-400', children: formatTime(currentTime) }), _jsx(Slider, { value: [currentTime], max: duration || 100, step: 1, className: 'w-full hover:cursor-grab active:cursor-grabbing', onValueChange: handleSeek }), _jsx("div", { className: 'text-xs text-zinc-400', children: formatTime(duration) })] })] }), _jsxs("div", { className: 'hidden sm:flex items-center gap-4 min-w-[180px] w-[30%] justify-end', children: [_jsx(Button, { size: 'icon', variant: 'ghost', className: 'hover:text-white text-zinc-400', children: _jsx(Mic2, { className: 'h-4 w-4' }) }), _jsx(Button, { size: 'icon', variant: 'ghost', className: 'hover:text-white text-zinc-400', children: _jsx(ListMusic, { className: 'h-4 w-4' }) }), _jsx(Button, { size: 'icon', variant: 'ghost', className: 'hover:text-white text-zinc-400', children: _jsx(Laptop2, { className: 'h-4 w-4' }) }), _jsxs("div", { className: 'flex items-center gap-2', children: [_jsx(Button, { size: 'icon', variant: 'ghost', className: 'hover:text-white text-zinc-400', children: _jsx(Volume1, { className: 'h-4 w-4' }) }), _jsx(Slider, { value: [volume], max: 100, step: 1, className: 'w-24 hover:cursor-grab active:cursor-grabbing', onValueChange: (value) => {
                                        setVolume(value[0]);
                                        if (audioRef.current) {
                                            audioRef.current.volume = value[0] / 100;
                                        }
                                    } })] })] })] }) }));
};
