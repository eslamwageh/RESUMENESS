import coverletter from "./photos/coverletter.webp";
import coverletter2 from "./RESUMENESS/photos/coverletter.webp";
const About = () => {
    return (
        <div className="about">
            <img src={coverletter2} alt="tmpimg" />
            <div className="centerabout">
                <h1>RESUMENESS</h1>
                <p>
                    Aren't you tired of doing CV and Cover Letters on your own
                </p>
                <p>instead of spending hours doing them you will just spend</p>
                <p>
                    <span>ONE CLICK!</span>
                </p>
                <div className="botabout">
                    <p>Soon more templates will be available.</p>
                    <p>
                        <span>STAY TUNED!</span>
                    </p>
                </div>
            </div>
            <img src={coverletter} alt="tmpimg" />
            <img src="/RESUMENESS/photos/coverletter.webp" alt="tmpimg" />
            <img src="./RESUMENESS/photos/coverletter.webp" alt="tmpimg" />
            <img src="RESUMENESS/photos/coverletter.webp" alt="tmpimg" />
        </div>
    );
};

export default About;
