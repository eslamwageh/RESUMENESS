import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>RESUMENESS</h2>
            <div className="nav-pages">
                <Link to='/'>Home</Link>
                <Link to='/'>Resume</Link>
                <Link to='/'>Cover Letter</Link>
                <Link to='/'>About</Link>
            </div>
        </div>
    );
}
 
export default Navbar;