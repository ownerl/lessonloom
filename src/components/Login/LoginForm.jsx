export default function Login () {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };
    return (
        <div className="login">

        </div>
    );
};