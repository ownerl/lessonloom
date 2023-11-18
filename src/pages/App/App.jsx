import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import NewOrderPage from "../NewOrder/NewOrderPage";
import NavBar from "../../components/Nav/NavBar";
import AuthPage from "../Auth/AuthPage";

export default function App() {
    const [user, setUser] = useState(getUser());
    return (
        <main className="App">
            <NewOrderPage />
            <AuthPage />
        </main>
    );
}
