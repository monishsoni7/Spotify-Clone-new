import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";
import ChatPage from "./pages/chat/ChatPage";
import AlbumPage from "./pages/album/AlbumPage";
import AdminPage from "./pages/admin/AdminPage";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/404/NotFoundPage";
function App() {
    return (_jsxs(_Fragment, { children: [_jsxs(Routes, { children: [_jsx(Route, { path: '/sso-callback', element: _jsx(AuthenticateWithRedirectCallback, { signUpForceRedirectUrl: "/auth-callback" }) }), _jsx(Route, { path: '/auth-callback', element: _jsx(AuthCallbackPage, {}) }), _jsx(Route, { path: '/admin', element: _jsx(AdminPage, {}) }), _jsxs(Route, { element: _jsx(MainLayout, {}), children: [_jsx(Route, { path: '/', element: _jsx(HomePage, {}) }), _jsx(Route, { path: '/chat', element: _jsx(ChatPage, {}) }), _jsx(Route, { path: '/albums/:albumId', element: _jsx(AlbumPage, {}) }), _jsx(Route, { path: '*', element: _jsx(NotFoundPage, {}) })] })] }), _jsx(Toaster, {})] }));
}
export default App;
