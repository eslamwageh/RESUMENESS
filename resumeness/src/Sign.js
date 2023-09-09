import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        // Perform login request to the server and receive the token
        const response = await fetch('http://localhost:8080/auth/signup', {
          method: 'POST',
          body: JSON.stringify({ fullName, email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
            navigate('/Login', { replace: true });
        }
        else {
            if (response.status === 422)
                alert("not valid inputs");
            else if (response.status === 400)
                alert("user is already taken");
            else if (response.status === 500)    
                alert("An error occurred while creating your account. Please try again.");
        }
      };
    return (
        <div className="Sign">
            <div className="signUpContainer">
                <h1>Sign Up</h1>
                <form className="signUpForm" onSubmit={handleSignUp}>
                    <label>Username:</label>
                    <input type="text" onChange={(e) => setFullName(e.target.value)} required />
                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} required />
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} required />
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