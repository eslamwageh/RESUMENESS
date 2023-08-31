import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>RESUMENESS</h2>
            <div className="nav-pages">
                <Link to='/'>Home</Link>
                <Link to='/Resume'>Resume</Link>
                <Link to='/Coverletter'>Cover Letter</Link>
                <Link to='/About'>About</Link>
            </div>
        </div>
    );
}
 
export default Navbar;