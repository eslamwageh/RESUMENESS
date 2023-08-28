import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef} from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => {

  const data = useRef();
  const navigate = useNavigate();


  return (
    <form action="" className="form" ref={data} onSubmit=
    { navigate("./Preview",{state:{name : data.name, address:data.address}}) }
    >
      <div className="boxes">
        <h1>Personal information</h1>
        <div className="inner">
          <ul>
            <li>Full name:</li>
            <input type="text" name="name" required />
            <li>
              Contact information:
              <ol>
                <li>address:</li>
                <input type="text" name="address"required />
                <li>phone number:</li>
                <input type="number" name="number" required />
                <li>email:</li>
                <input type="email" name="email"required />
              </ol>
            </li>
            <li>LinkedIn profile: *</li>
            <input type="text" name="LI"/>
            <li>Website or portfolio links: *</li>
            <input type="text" name="links"/>
          </ul>
        </div>
      </div>

      <div className="boxes">
        <h1>Professional Summary:</h1>
        <label>
          give us a professional background, skills, and career goals:
        </label>
        <textarea name="summary" id="" rows={10} cols={110}></textarea>
      </div>
      <div className="boxes">
      <h1>Work Experience</h1>
      <div className="inner">
      
      </div>
      </div>
      
      <div className="boxes">
        <h1>Education</h1>
        <div className="inner">
          <ul>
            <li>Degrees earned: (e.g., Bachelor's, Master's)</li>
            <input type="text" required />
            <li>Field of Study</li>
            <input type="text" required />
            <li>
              Contact information:
              <ol>
                <li>address:</li>
                <input type="text" required />
                <li>phone number:</li>
                <input type="text" required />
                <li>email:</li>
                <input type="text" required />
              </ol>
            </li>
            <li>LinkedIn profile: *</li>
            <input type="text" />
            <li>Website or portfolio links: *</li>
            <input type="text" />
          </ul>
        </div>
      </div>
    <button className="but" type="submit">Create your cv</button>
    </form>
  );
};

export default Resume;
