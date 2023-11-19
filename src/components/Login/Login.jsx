import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function Login ({ user, setUser }) {
    const google = window.google;

    useEffect(function() {
        document.getElementById("signOutDiv").hidden = true;
    }, [])
    function handleCallbackResponse(response) {
        console.log("encoded jwt id token: ", response.credential);
        const userObject = jwtDecode(response.credential)
        console.log(userObject)
        const newUser = {
            name: userObject.name,
            email: userObject.email,
            picture: userObject.picture
        }
        setUser(newUser)
        document.getElementById("signOutDiv").hidden = false;
        document.getElementById("signInDiv").hidden = true;
    }

    useEffect(() => {
        // global google object coming from script tag in public index html
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" } // customization attributes
        );
    }, []);

    function onSignOut() {
        setUser(null)
        google.accounts.id.disableAutoSelect();
        document.getElementById("signOutDiv").hidden = true;
        document.getElementById("signInDiv").hidden = false;
    }

    return (
        <>
            <button id="signOutDiv" onClick={onSignOut} >Sign Out</button>
            <div id="signInDiv"></div>
        </>
    )
};