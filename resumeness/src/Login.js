import { Link } from 'react-router-dom';

const Login = () => {
        return (
            <div className="Login">
                <div className="loginContainer">
                    <h1>Log In</h1>
                    <form className="LoginForm">
                        <label>Email:</label>
                        <input type="text" required />
                        <label>Password:</label>
                        <input type="password" required />
                        <button className="but" type="submit"><Link to='/Profile'>Log In</Link></button>
                    </form>
                    <h5> Don't have an account?
                        <Link to='/Sign'>
                            <h6>Sign Up</h6>
                        </Link>
                    </h5>
                </div>
            </div>
        );
    }
    
export default Login;