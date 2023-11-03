import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const logged = localStorage.getItem("token");
    const linkres = logged !== null ? "/Resume" : "/Login";
    const linkcov = logged !== null ? "/Coverletter" : "/Login";
    const linkprof = logged !== null ? "/Profile" : "/Login";
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    };
    return (
        <div className="navbar">
            <h2>RESUMENESS</h2>
            <div className="nav-pages">
                <Link to="/">Home</Link>
                <Link to={linkprof}>Profile</Link>
                <Link to={linkres}>Resume</Link>
                <Link to={linkcov}>Cover Letter</Link>
                <Link to="/About">About</Link>
                <Link onClick={handleLogout}>Logout</Link>
            </div>
        </div>
    );
};

export default Navbar;
