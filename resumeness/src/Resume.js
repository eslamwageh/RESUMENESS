import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  return (
    <form action="" className="form">

      <div className="boxes">
        <h1>Personal information</h1>
        <div className="inner">
          <ul>
            <li>Full name:</li>
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

      <div className="boxes">
        <h1>Professional Summary:</h1>
        <label>
          give us a professional background, skills, and career goals:
        </label>
        <textarea name="" id="" rows={10} cols={110}></textarea>
      </div>
      <div className="boxes">
      <h1>Work Experience</h1>
      <div className="inner">
          {/* <ul>
            <li>Job Objective:*</li>
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
          </ul> */}
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

    </form>
  );
};

export default Resume;
