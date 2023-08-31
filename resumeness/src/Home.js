import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
        {/* <div className="title">RESUMENESS</div> */}
        <div className="details">ONLINE RESUME BUILDER</div>;
        <div className="create">
            <div className="items">
                <img src="./photos/CV template2.jpg" alt="tmpimg" />
                <button><Link to='/Resume'>Add CV</Link></button>
            </div>
            <div className="items">
                <img src="photos/coverletter.webp" alt="tmpimg" />
                <button><Link to='/Coverletter'>Add Cover Letter</Link></button>
            </div>
        </div>
        </div>
        
      );
}
 
export default Home;