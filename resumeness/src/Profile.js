import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Profile = () => {
    const [cvs, setCvs] = useState([]);

  useEffect(() => {
    console.log("fetching");
    fetch('http://localhost:8080/getcvs', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }) 
      .then((response) => response.json())
      .then((cvs) => {
        setCvs(cvs);
        console.log(cvs[0].name);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
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
                    <div className='items'>
                        {cvs && cvs.map((cv,index) => (
                                <div key={index}>
                                    <img src="./photos/CV template2.jpg" alt="tmpimg" />
                                    <p>{cv.name}</p>
                                </div>
                            ))
                        }
                        {/* <img src="./photos/CV template2.jpg" alt="tmpimg" />
                        <img src="./photos/CV template2.jpg" alt="tmpimg" />
                        <img src="./photos/CV template2.jpg" alt="tmpimg" />
                        <img src="./photos/CV template2.jpg" alt="tmpimg" /> */}
                        <Link to='/Resume'>
                            <div className='add'>Add CV</div>
                        </Link>
                    </div>
                </div>
                <div className="profile-section">
                    <h1 className="category-title"> Coverletters</h1>
                    {
                        //the mapping function to display the User's Cover letters
                    }
                <div className="items">
                    <img src="photos/coverletter.webp" alt="tmpimg" />
                    <img src="photos/coverletter.webp" alt="tmpimg" />
                    <img src="photos/coverletter.webp" alt="tmpimg" />
                    <img src="photos/coverletter.webp" alt="tmpimg" />
                    <Link to='/Coverletter'>
                        <div className='add'>Add Cover Letter</div>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Profile;