import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuthStore } from "@/stores/useAuthStore";
import Header from "./components/Header";
import DashboardStats from "./components/DashboardStats";
import { Album, Music } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SongsTabContent from "./components/SongsTabContent";
import AlbumsTabContent from "./components/AlbumsTabContent";
import { useEffect } from "react";
import { useMusicStore } from "@/stores/useMusicStore";
const AdminPage = () => {
    const { isAdmin, isLoading } = useAuthStore();
    const { fetchAlbums, fetchSongs, fetchStats } = useMusicStore();
    useEffect(() => {
        fetchAlbums();
        fetchSongs();
        fetchStats();
    }, [fetchAlbums, fetchSongs, fetchStats]);
    if (!isAdmin && !isLoading)
        return _jsx("div", { children: "Unauthorized" });
    return (_jsxs("div", { className: 'min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900\n   to-black text-zinc-100 p-8', children: [_jsx(Header, {}), _jsx(DashboardStats, {}), _jsxs(Tabs, { defaultValue: 'songs', className: 'space-y-6', children: [_jsxs(TabsList, { className: 'p-1 bg-zinc-800/50', children: [_jsxs(TabsTrigger, { value: 'songs', className: 'data-[state=active]:bg-zinc-700', children: [_jsx(Music, { className: 'mr-2 size-4' }), "Songs"] }), _jsxs(TabsTrigger, { value: 'albums', className: 'data-[state=active]:bg-zinc-700', children: [_jsx(Album, { className: 'mr-2 size-4' }), "Albums"] })] }), _jsx(TabsContent, { value: 'songs', children: _jsx(SongsTabContent, {}) }), _jsx(TabsContent, { value: 'albums', children: _jsx(AlbumsTabContent, {}) })] })] }));
};
export default AdminPage;
