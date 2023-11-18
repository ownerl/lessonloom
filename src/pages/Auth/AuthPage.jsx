import LoginForm from "../../components/Login/LoginForm";
import SignUpForm from "../../components/SignUp/SignUpForm";

export default function AuthPage({ setUser }) {
    const login = () => {

    }

    const google = () => {
    }
    return (
        <main>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>
        </main>
    )
}