import "./Login.css";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { loginUser } from "../../utilities/users-api";
import { useNavigate } from "react-router-dom";

export default function Login({ showNav, setShowNav, setUser }) {
    const google = window.google;
    const navigate = useNavigate();

    function handleCallbackResponse(response) {
        const idToken = response.credential;
        console.log("encoded jwt id token: ", response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
        const newUser = {
            name: userObject.name,
            email: userObject.email,
            picture: userObject.picture,
            googleId: userObject.sub,
        };
        const userData = {
            userInfo: newUser,
            idToken,
            CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        };
        localStorage.setItem("token", response.credential);
        console.log("dis da user data: ", userData);
        console.log(newUser.googleId);
        setUser(newUser);
        loginUser(userData);
        setShowNav(true);
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            ux_mode: "popup",
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            type: "standard",
            theme: "filled_blue",
            size: "large",
            shape: "pill",
            logo_alignment: "center",
            text: "signin_with",
        });
    }, [showNav]);

    function onSignOut() {
        setUser(null);
        setShowNav(false);
        localStorage.clear();
        google.accounts.id.disableAutoSelect();
        navigate("/");
    }

    return (
        <>
            {localStorage.getItem("token") ? (
                <button id="signOutDiv" onClick={onSignOut}>
                    Sign Out
                </button>
            ) : (
                <div className="googleSignIn" id="signInDiv"></div>
            )}
        </>
    );
}
