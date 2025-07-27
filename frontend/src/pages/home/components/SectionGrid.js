import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SectionGridSkeleton from "./SectionGridSkeleton";
import { Button } from "@/components/ui/button";
import PlayButton from "./PlayButton";
const SectionGrid = ({ songs, title, isLoading }) => {
    if (isLoading)
        return _jsx(SectionGridSkeleton, {});
    return (_jsxs("div", { className: 'mb-8', children: [_jsxs("div", { className: 'flex items-center justify-between mb-4', children: [_jsx("h2", { className: 'text-xl sm:text-2xl font-bold', children: title }), _jsx(Button, { variant: 'link', className: 'text-sm text-zinc-400 hover:text-white', children: "Show all" })] }), _jsx("div", { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4', children: songs.map((song) => (_jsxs("div", { className: 'bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 transition-all group cursor-pointer', children: [_jsxs("div", { className: 'relative mb-4', children: [_jsx("div", { className: 'aspect-square rounded-md shadow-lg overflow-hidden', children: _jsx("img", { src: song.imageUrl, alt: song.title, className: 'w-full h-full object-cover transition-transform duration-300 \n\t\t\t\t\t\t\t\t\tgroup-hover:scale-105' }) }), _jsx(PlayButton, { song: song })] }), _jsx("h3", { className: 'font-medium mb-2 truncate', children: song.title }), _jsx("p", { className: 'text-sm text-zinc-400 truncate', children: song.artist })] }, song._id))) })] }));
};
export default SectionGrid;
