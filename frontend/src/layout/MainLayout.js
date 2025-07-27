import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import FriendsActivity from "./components/FriendsActivity";
import AudioPlayer from "./components/AudioPlayer";
import { PlaybackControls } from "./components/PlaybackControls";
import { useEffect, useState } from "react";
const MainLayout = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return (_jsxs("div", { className: 'h-screen bg-black text-white flex flex-col', children: [_jsxs(ResizablePanelGroup, { direction: 'horizontal', className: 'flex-1 flex h-full overflow-hidden p-2', children: [_jsx(AudioPlayer, {}), _jsx(ResizablePanel, { defaultSize: 20, minSize: isMobile ? 0 : 10, maxSize: 30, children: _jsx(LeftSidebar, {}) }), _jsx(ResizableHandle, { className: 'w-2 bg-black rounded-lg transition-colors' }), _jsx(ResizablePanel, { defaultSize: isMobile ? 80 : 60, children: _jsx(Outlet, {}) }), !isMobile && (_jsxs(_Fragment, { children: [_jsx(ResizableHandle, { className: 'w-2 bg-black rounded-lg transition-colors' }), _jsx(ResizablePanel, { defaultSize: 20, minSize: 0, maxSize: 25, collapsedSize: 0, children: _jsx(FriendsActivity, {}) })] }))] }), _jsx(PlaybackControls, {})] }));
};
export default MainLayout;
