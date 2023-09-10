import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const refresh = () => {
        window.location.reload();
      };

    const handleLogin = async (e) => {
        e.preventDefault();
        // Perform login request to the server and receive the token
        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate("/Profile", { replace: true });
        } else {
            if (response.status === 422) alert("not valid inputs");
            else if (response.status === 400) alert("Invalid email or password");
            else if (response.status === 500)
                alert(
                    "An error occurred while creating your account. Please try again."
                );
        }
        setTimeout(() => {
            refresh();
        }, 200);

    };
    return (
        <div className="Login">
            <div className="loginContainer">
                <h1>Log In</h1>
                <form className="LoginForm" onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} required />
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}required />
                        <button className="login-button" type="submit">
                            Log In
                        </button>
                </form>
                <h5>
                    {" "}
                    Don't have an account?
                    <Link to="/Sign">
                        <h6>Sign Up</h6>
                    </Link>
                </h5>
            </div>
        </div>
    );
};

export default Login;
