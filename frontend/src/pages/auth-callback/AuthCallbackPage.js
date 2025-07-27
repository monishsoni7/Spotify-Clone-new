import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { axiosInstance } from "@/lib/axios";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const AuthCallbackPage = () => {
    const { isLoaded, user } = useUser();
    const navigate = useNavigate();
    const syncAttempted = useRef(false);
    useEffect(() => {
        const syncUser = async () => {
            if (!isLoaded || !user || syncAttempted.current)
                return;
            try {
                syncAttempted.current = true;
                await axiosInstance.post("/auth/callback", {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    imageUrl: user.imageUrl,
                });
            }
            catch (error) {
                console.log("Error in auth callback", error);
            }
            finally {
                navigate("/");
            }
        };
        syncUser();
    }, [isLoaded, user, navigate]);
    return (_jsx("div", { className: 'h-screen w-full bg-black flex items-center justify-center', children: _jsx(Card, { className: 'w-[90%] max-w-md bg-zinc-900 border-zinc-800', children: _jsxs(CardContent, { className: 'flex flex-col items-center gap-4 pt-6', children: [_jsx(Loader, { className: 'size-6 text-emerald-500 animate-spin' }), _jsx("h3", { className: 'text-zinc-400 text-xl font-bold', children: "Logging you in" }), _jsx("p", { className: 'text-zinc-400 text-sm', children: "Redirecting..." })] }) }) }));
};
export default AuthCallbackPage;
