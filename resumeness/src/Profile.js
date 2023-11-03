import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [cvs, setCvs] = useState([]);
    const [cls, setCls] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        console.log("fetching");
        fetch("http://localhost:8080/getcvs", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((cvs) => {
                setCvs(cvs);
                console.log(cvs[0].name);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

        fetch("http://localhost:8080/getcls", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((cls) => {
                setCls(cls);
                console.log(cls[0].name);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="Profile">
            {/* <div className="title">Hello, {User.name} </div> */}
            <h1 className="profile-title">Your Profile</h1>;
            <div className="create">
                <div className="profile-section">
                    <h1 className="category-title"> Resumes</h1>
                    {
                        //the mapping function to display the User's Resumes
                    }
                    <div className="items">
                        {cvs &&
                            cvs.map((cv, index) => (
                                <div key={index} onClick={() => {navigate ('/Resume/Preview', {state: cv})}}>
                                    <img
                                        src="./Photos/CV template2.jpg"
                                        alt="tmpimg"
                                    />
                                    <p className="myname">{cv.name}</p>
                                </div>
                            ))}
                        {/* <img src="./Photos/CV template2.jpg" alt="tmpimg" />
                        <img src="./Photos/CV template2.jpg" alt="tmpimg" />
                        <img src="./Photos/CV template2.jpg" alt="tmpimg" />
                        <img src="./Photos/CV template2.jpg" alt="tmpimg" /> */}
                        <Link to="/Resume">
                            <div className="add">Add CV</div>
                        </Link>
                    </div>
                </div>
                <div className="profile-section">
                    <h1 className="category-title"> Coverletters</h1>
                    {
                        //the mapping function to display the User's Cover letters
                    }

                    <div className="items">
                        {cls &&
                            cls.map((cl, index) => (
                                <div key={index} onClick={() => {navigate ('/Coverletter/Previewcoverletter', {state: cl})}}>
                                    <img
                                        src="./Photos/coverletter.webp"
                                        alt="tmpimg"
                                    />
                                    <p className="myname">{cl.name}</p>
                                </div>
                            ))}

                        <Link to="/Coverletter">
                            <div className="add">Add Cover Letter</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
