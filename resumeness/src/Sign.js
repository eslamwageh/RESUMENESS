import { Link } from 'react-router-dom';

const Sign = () => {
    return (
        <div className="Sign">
            <div className="signUpContainer">
                <h1>Sign Up</h1>
                <form className="signUpForm">
                    <label>Username:</label>
                    <input type="text" required />
                    <label>Email:</label>
                    <input type="text" required />
                    <label>Password:</label>
                    <input type="password" required />
                    <button className="but" type="submit"><Link to='/Profile'>Sign Up</Link></button>
                </form>
                <h5> Already have an account?
                    <Link to='/Login'>
                        <h6>Log In</h6>
                    </Link>
                </h5>
            </div>
        </div>
    );
}

export default Sign;