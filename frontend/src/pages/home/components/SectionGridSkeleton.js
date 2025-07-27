import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SectionGridSkeleton = () => {
    return (_jsxs("div", { className: 'mb-8', children: [_jsx("div", { className: 'h-8 w-48 bg-zinc-800 rounded mb-4 animate-pulse' }), _jsx("div", { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4', children: Array.from({ length: 4 }).map((_, i) => (_jsxs("div", { className: 'bg-zinc-800/40 p-4 rounded-md animate-pulse', children: [_jsx("div", { className: 'aspect-square rounded-md bg-zinc-700 mb-4' }), _jsx("div", { className: 'h-4 bg-zinc-700 rounded w-3/4 mb-2' }), _jsx("div", { className: 'h-4 bg-zinc-700 rounded w-1/2' })] }, i))) })] }));
};
export default SectionGridSkeleton;
