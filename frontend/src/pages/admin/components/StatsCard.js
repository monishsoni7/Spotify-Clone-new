import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
const StatsCard = ({ bgColor, icon: Icon, iconColor, label, value }) => {
    return (_jsx(Card, { className: 'bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-800/80 transition-colors', children: _jsx(CardContent, { className: 'p-6', children: _jsxs("div", { className: 'flex items-center gap-4', children: [_jsx("div", { className: `p-3 rounded-lg ${bgColor}`, children: _jsx(Icon, { className: `size-6 ${iconColor}` }) }), _jsxs("div", { children: [_jsx("p", { className: 'text-sm text-zinc-400', children: label }), _jsx("p", { className: 'text-2xl font-bold', children: value })] })] }) }) }));
};
export default StatsCard;
