import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMusicStore } from "@/stores/useMusicStore";
import FeaturedGridSkeleton from "@/components/skeletons/FeaturedGridSkeleton";
import PlayButton from "./PlayButton";
const FeaturedSection = () => {
    const { isLoading, featuredSongs, error } = useMusicStore();
    if (isLoading)
        return _jsx(FeaturedGridSkeleton, {});
    if (error)
        return _jsx("p", { className: 'text-red-500 mb-4 text-lg', children: error });
    return (_jsx("div", { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8', children: featuredSongs.map((song) => (_jsxs("div", { className: 'flex items-center bg-zinc-800/50 rounded-md overflow-hidden\n         hover:bg-zinc-700/50 transition-colors group cursor-pointer relative', children: [_jsx("img", { src: song.imageUrl, alt: song.title, className: 'w-16 sm:w-20 h-16 sm:h-20 object-cover flex-shrink-0' }), _jsxs("div", { className: 'flex-1 p-4', children: [_jsx("p", { className: 'font-medium truncate', children: song.title }), _jsx("p", { className: 'text-sm text-zinc-400 truncate', children: song.artist })] }), _jsx(PlayButton, { song: song })] }, song._id))) }));
};
export default FeaturedSection;
