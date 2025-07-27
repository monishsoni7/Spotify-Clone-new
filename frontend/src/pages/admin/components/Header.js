import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
const Header = () => {
    return (_jsxs("div", { className: 'flex items-center justify-between', children: [_jsxs("div", { className: 'flex items-center gap-3 mb-8', children: [_jsx(Link, { to: '/', className: 'rounded-lg', children: _jsx("img", { src: '/spotify.png', className: 'size-10 text-black' }) }), _jsxs("div", { children: [_jsx("h1", { className: 'text-3xl font-bold', children: "Music Manager" }), _jsx("p", { className: 'text-zinc-400 mt-1', children: "Manage your music catalog" })] })] }), _jsx(UserButton, {})] }));
};
export default Header;
