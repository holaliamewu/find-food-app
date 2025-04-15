"use client";

import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import '/firebase';

function AuthPage() {

    const handleGoogleSignIn = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('User signed in:', user);
            window.location.href = "/map";
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-[100svh] font-[manrope]">
            <button
                onClick={handleGoogleSignIn}
                className="px-3 py-1.5 bg-stone-50 text-sm font-bold text-stone-600 border border-stone-200  rounded-xl hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Sign in with Google
            </button>
        </div>
    );
};



export default AuthPage;
