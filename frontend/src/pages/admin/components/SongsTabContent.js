import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music } from "lucide-react";
import SongsTable from "./SongsTable";
import AddSongDialog from "./AddSongDialog";
const SongsTabContent = () => {
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: 'flex items-center justify-between', children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: 'flex items-center gap-2', children: [_jsx(Music, { className: 'size-5 text-emerald-500' }), "Songs Library"] }), _jsx(CardDescription, { children: "Manage your music tracks" })] }), _jsx(AddSongDialog, {})] }) }), _jsx(CardContent, { children: _jsx(SongsTable, {}) })] }));
};
export default SongsTabContent;
