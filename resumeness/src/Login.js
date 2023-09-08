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
                        <Link to='/Profile' className='link'>
                            <button className="login-button" type="submit">Log In</button>
                        </Link>
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