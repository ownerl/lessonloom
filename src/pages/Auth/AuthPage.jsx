import LoginForm from "../../components/Login/LoginForm";
import SignUpForm from "../../components/SignUp/SignUpForm";

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>
        </main>
    )
}