export default function Login () {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };
    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt="" className="icon" />
                        Google
                    </div>
                </div>
            </div>
        </div>
    );
};