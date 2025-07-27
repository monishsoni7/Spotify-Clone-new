import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import FeaturedSection from "./components/FeaturedSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "@/stores/usePlayerStore";
const HomePage = () => {
    const { fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs, isLoading, madeForYouSongs, featuredSongs, trendingSongs, } = useMusicStore();
    const { initializeQueue } = usePlayerStore();
    useEffect(() => {
        fetchFeaturedSongs();
        fetchMadeForYouSongs();
        fetchTrendingSongs();
    }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);
    useEffect(() => {
        if (madeForYouSongs.length > 0 && featuredSongs.length > 0 && trendingSongs.length > 0) {
            const allSongs = [...featuredSongs, ...madeForYouSongs, ...trendingSongs];
            initializeQueue(allSongs);
        }
    }, [initializeQueue, madeForYouSongs, trendingSongs, featuredSongs]);
    return (_jsxs("main", { className: 'rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900', children: [_jsx(Topbar, {}), _jsx(ScrollArea, { className: 'h-[calc(100vh-180px)]', children: _jsxs("div", { className: 'p-4 sm:p-6', children: [_jsx("h1", { className: 'text-2xl sm:text-3xl font-bold mb-6', children: "Good afternoon" }), _jsx(FeaturedSection, {}), _jsxs("div", { className: 'space-y-8', children: [_jsx(SectionGrid, { title: 'Made For You', songs: madeForYouSongs, isLoading: isLoading }), _jsx(SectionGrid, { title: 'Trending', songs: trendingSongs, isLoading: isLoading })] })] }) })] }));
};
export default HomePage;
