import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PlaylistSkeleton = () => {
    return Array.from({ length: 7 }).map((_, i) => (_jsxs("div", { className: 'p-2 rounded-md flex items-center gap-3', children: [_jsx("div", { className: 'w-12 h-12 bg-zinc-800 rounded-md flex-shrink-0 animate-pulse' }), _jsxs("div", { className: 'flex-1 min-w-0 hidden md:block space-y-2', children: [_jsx("div", { className: 'h-4 bg-zinc-800 rounded animate-pulse w-3/4' }), _jsx("div", { className: 'h-3 bg-zinc-800 rounded animate-pulse w-1/2' })] })] }, i)));
};
export default PlaylistSkeleton;
