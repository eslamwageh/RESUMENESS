import { useNavigate } from "react-router";

const Coverletter = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        navigate("./Previewcoverletter", {
            state: values,
        });
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
                                <input type="text" name="number" required />
                                <li>email:</li>
                                <input type="email" name="email" required />
                            </ol>
                        </li>
                        <li>LinkedIn profile: *</li>
                        <input type="text" name="LI" />
                        <li>Job title: </li>
                        <input type="text" name="title" />
                        <li>Date: </li>
                        <input type="text" name="date" />
                        <li>Contact person's name: </li>
                        <input type="text" name="recname" />
                        <li>Contact title's name: </li>
                        <input type="text" name="rectitle" />
                        <li>Company name: </li>
                        <input type="text" name="compname" />
                        <li>Company location: </li>
                        <input type="text" name="comploc" />
                        <li>Paragraph: </li>
                        <input type="text" name="para" />
                    </ul>
                </div>
            </div>
            <but className="butdiv">
            <button className="but" type="submit">
                Create your coverletter
            </button>
            </but>
        </form>
    );
};

export default Coverletter;
