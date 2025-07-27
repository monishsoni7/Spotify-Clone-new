import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Library } from "lucide-react";
import AlbumsTable from "./AlbumsTable";
import AddAlbumDialog from "./AddAlbumDialog";
const AlbumsTabContent = () => {
    return (_jsxs(Card, { className: 'bg-zinc-800/50 border-zinc-700/50', children: [_jsx(CardHeader, { children: _jsxs("div", { className: 'flex items-center justify-between', children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: 'flex items-center gap-2', children: [_jsx(Library, { className: 'h-5 w-5 text-violet-500' }), "Albums Library"] }), _jsx(CardDescription, { children: "Manage your album collection" })] }), _jsx(AddAlbumDialog, {})] }) }), _jsx(CardContent, { children: _jsx(AlbumsTable, {}) })] }));
};
export default AlbumsTabContent;
