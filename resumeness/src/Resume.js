// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { useRef} from "react"; we didnt need it as we accessed the form by the e.target so no need for it
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Resume = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(-1);
        //    setTimeout(() => {        how to navigate back then to the reqired page ?
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        navigate("./Preview", {
            state: { name: values.name, address: values.address },
        });
        //   }, 1);
    };

    const [inputFields, setInputFields] = useState([]);

    const handleAddField = () => {
        setInputFields([...inputFields, ""]);
    };

    const [eduinputFields, setEduInputFields] = useState([]);

    const handleAddFieldEdu = () => {
        setEduInputFields([...eduinputFields, ""]);
    };

    const [skillinputFields, setSkillInputFields] = useState([]);

    const handleAddFieldSkill = () => {
        setSkillInputFields([...skillinputFields, ""]);
    };
    return (
        <form action="" className="form" onSubmit={handleSubmit}>
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
                                <input type="text" name="address" required />
                                <li>phone number:</li>
                                <input type="number" name="number" required />
                                <li>email:</li>
                                <input type="email" name="email" required />
                            </ol>
                        </li>
                        <li>LinkedIn profile: *</li>
                        <input type="text" name="LI" />
                        <li>Website or portfolio links: *</li>
                        <input type="text" name="links" />
                    </ul>
                </div>
            </div>

            <div className="boxes">
                <h1>Professional Summary:</h1>
                <ul>
                    <li>
                        give us a professional background, skills, and career
                        goals:
                    </li>
                </ul>
                <textarea name="summary" id="" rows={10} cols={110}></textarea>
            </div>
            <div className="boxes">
                <h1>Work Experience</h1>
                <ul>
                    <li>
                        Job Objective: (a specific job title or career
                        objective)
                    </li>
                </ul>
                <textarea
                    name="summary"
                    id="freetextarea"
                    rows={3}
                    cols={90}
                ></textarea>

                <div className="inner">
                    {inputFields.map((field, index) => (
                        <div>
                            <h2> Job number : {index + 1}</h2>
                            <div key={index} className="work">
                                <div>
                                    <label>Job title: </label>
                                    <input
                                        type="text"
                                        className="smallinput"
                                        name={`title${index}`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Company name: </label>
                                    <input
                                        type="text"
                                        className="smallinput"
                                        name={`compname${index}`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Company location: </label>
                                    <input
                                        type="text"
                                        className="smallinput"
                                        name={`comploc${index}`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Start date - End date: </label>
                                    <input
                                        type="text"
                                        className="smallinput"
                                        name={`date${index}`}
                                        required
                                    />
                                </div>
                                <div id="widefield">
                                    <label>
                                        A brief description about your job
                                        there: *{" "}
                                    </label>
                                    <textarea
                                        type="text"
                                        rows={4}
                                        cols={90}
                                        name={`desc${index}`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div class="rightflex">
                        <button type="button" onClick={handleAddField}>
                            add work field
                        </button>
                    </div>
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
                    </ul>
                    <div>
                        {eduinputFields.map((field, index) => (
                            <div>
                                <h2> Institution number : {index + 1}</h2>
                                <div key={index} className="work">
                                    <div>
                                        <label>Institution name: </label>
                                        <input
                                            type="text"
                                            className="smallinput"
                                            name={`instname${index}`}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Graduation date: </label>
                                        <input
                                            type="text"
                                            className="smallinput"
                                            name={`instdate${index}`}
                                            required
                                        />
                                    </div>
                                    <div id="widefield">
                                        <label>Location of institution: </label>
                                        <input
                                            type="text"
                                            className="smallinput"
                                            name={`instloc${index}`}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div class="rightflex">
                        <button type="button" onClick={handleAddFieldEdu}>
                            Add educational institution
                        </button>
                    </div>
                </div>
            </div>

            <div className="boxes">
                <h1>Skills</h1>
                <div className="inner">
                    {skillinputFields.map((field, index) => (
                        <div>
                            <h2> Skill number : {index + 1}</h2>
                            <div key={index} className="work">
                                <div>
                                    <label>Skill name: </label>
                                    <input
                                        type="text"
                                        className="smallinput"
                                        name={`skill${index}`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Percentage of mastery: </label>
                                    <input
                                        type="text"
                                        className="smallinput"
                                        name={`skillprc${index}`}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div class="rightflex">
                        <button
                            type="button"
                            onClick={handleAddFieldSkill}
                        >
                            add skill
                        </button>
                    </div>
                </div>
            </div>

            <button className="but" type="submit">
                Create your cv
            </button>
        </form>
    );
};

export default Resume;
