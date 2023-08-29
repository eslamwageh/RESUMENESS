import { useRef } from "react";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";

const Preview = () => {
    const location = useLocation();
    const { name, address } = location.state;
    console.log(location);
    //const { name, address } = location.state || {};

    const cv = useRef();
    async function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF("p", "pt");
        await html2canvas(cv.current, {
            width: 500,
            height: 800,
        }).then((canvas) => {
            doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 600, 1030);
        });
        doc.save("Document.pdf");
    }
    return (
        <div className="preview">
            <div className="previewcv" ref={cv}>
                <div className="left-part">
                    <h2>EDUCATION</h2>
                    <hr />
                    <div className="degree">
                        <h3>info.degree</h3>
                        <p>info.college</p>
                        <p>info.grad-date</p>
                    </div>
                    <h2>LICENECES</h2>
                    <hr />
                    <div className="degree">
                        <h3>info.licence</h3>
                        <p>info.licence-field</p>
                    </div>
                    <div className="contacts">
                        <div className="contact">
                            <div className="mark"></div>
                            <div className="type">Phone</div>
                        </div>
                        <p>info.phone</p>
                        <div className="contact">
                            <div className="mark"></div>
                            <div className="type">Phone</div>
                        </div>
                        <p>info.phone</p>
                        <div className="contact">
                            <div className="mark"></div>
                            <div className="type">Phone</div>
                        </div>
                        <p>info.phone</p>
                        <div className="contact">
                            <div className="mark"></div>
                            <div className="type">Phone</div>
                        </div>
                        <p>info.phone</p>
                    </div>
                </div>
                <div className="right-part">
                    <div className="cv-title">
                        <h1>INFO.NAME</h1>
                        <h3>INFO.PROF TITLE</h3>
                    </div>
                    <div className="right-body">
                        <h3>ABOUT ME</h3>
                        <hr />
                        <p>
                            info.about info.about info.about info.about
                            info.about info.about info.about info.about
                            info.about info.about info.about info.about
                            info.about info.about
                        </p>

                        <h3>WORK EXPERIENCE</h3>
                        <hr />
                        <div className="exp">
                            <h4>2012-2014</h4>
                            <div>
                                <h4>JOB POSITION</h4>
                                <h5>Company Name</h5>
                                <p>
                                    paragraph paragraph paragraph paragraph
                                    paragraph paragraph paragraph paragraph
                                    paragraph paragraph
                                </p>
                            </div>
                            <h4>2012-2014</h4>
                            <div>
                                <h4>JOB POSITION</h4>
                                <h5>Company Name</h5>
                                <p>
                                    paragraph paragraph paragraph paragraph
                                    paragraph paragraph paragraph paragraph
                                    paragraph paragraph
                                </p>
                            </div>
                            <h4>2012-2014</h4>
                            <div>
                                <h4>JOB POSITION</h4>
                                <h5>Company Name</h5>
                                <p>
                                    paragraph paragraph paragraph paragraph
                                    paragraph paragraph paragraph paragraph
                                    paragraph paragraph
                                </p>
                            </div>
                        </div>

                        <h3>SKILLS</h3>
                        <hr />
                        <div className="skills">
                            <div className="skill">
                                <h4>Skill</h4>
                                <progress value="32" max="100"></progress>
                            </div>
                            <div className="skill">
                                <h4>Skill</h4>
                                <progress value="32" max="100"></progress>
                            </div>
                            <div className="skill">
                                <h4>Skill</h4>
                                <progress value="32" max="100"></progress>
                            </div>
                            <div className="skill">
                                <h4>Skill</h4>
                                <progress value="32" max="100"></progress>
                            </div>
                            <div className="skill">
                                <h4>Skill</h4>
                                <progress value="32" max="100"></progress>
                            </div>
                            <div className="skill">
                                <h4>Skill</h4>
                                <progress value="32" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={generatePDF}>Download pdf</button>
        </div>
    );
};

export default Preview;
