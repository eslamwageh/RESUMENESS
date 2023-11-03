import { Link } from "react-router-dom";
import Sign from "./Sign";
const Home = () => {
    return (
        <div className="home">
            <h1 className="home-title">RESUMENESS</h1>
            <p className="home-paragraph">
                Log in, fill in the blanks, and download your resume instantly.
            </p>
            <div className="view">
                <img
                    className="first"
                    src="./Photos/CVtemplate2.jpg"
                    alt="tmpimg"
                />
                <img
                    className="second"
                    src="Photos/coverletter.webp"
                    alt="tmpimg"
                />
                <img className="third" src="./Photos/resume.jpg" alt="tmpimg" />
            </div>
            <Link to="/Login">
                <button className="but" type="submit">
                    Let's Start
                </button>
            </Link>
        </div>
    );
};
export default Home;
