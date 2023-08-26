import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="navbar">
            <h2>RESUMENESS</h2>
            <div className="nav-pages">
                <Link to='/'> yes</Link>
            </div>
        </div>
    );
}
 
export default Navbar;