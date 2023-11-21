import { useState, useEffect, useRef } from "react";
import { jwtDecode } from "jwt-decode";
import "./Login.css";

export default function Login({ showNav, setShowNav, user, setUser }) {
    const google = window.google;

    function handleCallbackResponse(response) {
        console.log("encoded jwt id token: ", response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
        const newUser = {
            name: userObject.name,
            email: userObject.email,
            picture: userObject.picture,
            googleId: userObject.sub,
        };
        console.log(newUser.googleId)
        setUser(newUser);
        localStorage.setItem('token', response.credential);
        setShowNav(true);
    }

    useEffect(() => {
        // global google object coming from script tag in public index html
            google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            ux_mode: "popup",
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                type: "standard",
                theme: "filled_blue",
                size: "large",
                shape: "pill",
                logo_alignment: "center",
                text: "signin_with",
            } // customization attributes
        );
    }, [showNav]);

    function onSignOut() {
        setUser(null);
        setShowNav(false);
        localStorage.removeItem('token');
        google.accounts.id.disableAutoSelect();
    }

    return (
        <>
            {showNav ? (
                <button id="signOutDiv" onClick={onSignOut}>
                    Sign Out
                </button>
            ) : (
                <>
                    <div className="googleSignIn" id="signInDiv"></div>
                </>
            )}
        </>
    );
}
