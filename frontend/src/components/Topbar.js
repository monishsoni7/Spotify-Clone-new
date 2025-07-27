import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { useAuthStore } from "@/stores/useAuthStore";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
const Topbar = () => {
    const { isAdmin } = useAuthStore();
    return (_jsxs("div", { className: "flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10", children: [_jsx("div", { className: "flex items-center gap-2", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("svg", { width: "32", height: "32", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "iconGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [_jsx("stop", { offset: "0%", style: { stopColor: "#1ED760", stopOpacity: 1 } }), _jsx("stop", { offset: "100%", style: { stopColor: "#1DB954", stopOpacity: 1 } })] }) }), _jsxs("g", { fill: "url(#iconGradient)", children: [_jsx("path", { d: "M25,55 C25,25 75,25 75,55", strokeWidth: "10", stroke: "url(#iconGradient)", fill: "none", strokeLinecap: "round" }), _jsx("circle", { cx: "25", cy: "60", r: "15" }), _jsx("path", { d: "M75,45 C64,45 55,54 55,65 C55,76 64,85 75,85 C83,85 89,81 92,75 L90,88 L98,78 C96,70 90,60 90,65 C90,54 83,45 75,45 Z" }), _jsx("polygon", { fill: "#FFFFFF", points: "70,58 83,65 70,72" })] })] }), _jsx("span", { className: "text-lg font-bold bg-clip-text text-transparent", style: {
                                backgroundImage: "linear-gradient(45deg, #1DB954, #1ED760)"
                            }, children: "JamLink" })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [isAdmin && (_jsxs(Link, { to: "/admin", className: cn(buttonVariants({ variant: "outline" })), children: [_jsx(LayoutDashboard, { className: "size-4 mr-2" }), "Admin Dashboard"] })), _jsx(SignedOut, { children: _jsx(SignInOAuthButtons, {}) }), _jsx(UserButton, {})] })] }));
};
export default Topbar;
