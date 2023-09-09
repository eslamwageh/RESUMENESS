import { Link } from 'react-router-dom';

const Sign = () => {
    const handleSignUp = async () => {
        // Perform login request to the server and receive the token
        const response = await fetch('localhost:8080/auth/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          const { token } = await response.json();
          setToken(token);
    
          // Store the token in local storage
          localStorage.setItem('token', token);
        }
      };
    return (
        <div className="Sign">
            <div className="signUpContainer">
                <h1>Sign Up</h1>
                <form className="signUpForm" onSubmit={handleSignUp}>
                    <label>Username:</label>
                    <input type="text" name="" required />
                    <label>Email:</label>
                    <input type="text" required />
                    <label>Password:</label>
                    <input type="password" required />
                    <button className="sign-button" type="submit">Sign Up</button>
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