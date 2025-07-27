import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";
const SignInOAuthButtons = () => {
    const { signIn, isLoaded } = useSignIn();
    if (!isLoaded) {
        return null;
    }
    const signInWithGoogle = () => {
        signIn.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/auth-callback",
        });
    };
    return (_jsxs(Button, { onClick: signInWithGoogle, variant: "secondary", className: 'w-full text-white border-zinc-200 h-11', children: [_jsx("img", { src: '/google.png', alt: 'Google', className: 'size-5' }), "Continue with Google"] }));
};
export default SignInOAuthButtons;
