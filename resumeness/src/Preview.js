import { useRef } from "react";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";

const Preview = () => {
    const location = useLocation();
    const info = location.state;
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
                    <h2>DEGREE</h2>
                    <hr />
                    <h3>{info.degrees}</h3>
                    <h2>FIELD OF STUDY</h2>
                    <hr />
                    <h3>{info.field}</h3>
                    <h2>EDUCATION</h2>
                    <hr />
                    {info.instname0 && (
                    <>
                    <div className="degree">
                        <h3>{info.instname0}</h3>
                        <p>{info.instloc0}</p>
                        <p>{info.instdate0}</p>
                    </div>
                    </>)}
                    {info.instname1 && (
                    <>
                    <div className="degree">
                        <h3>{info.instname1}</h3>
                        <p>{info.instloc1}</p>
                        <p>{info.instdate1}</p>
                    </div>
                    </>)}
                    <h2>CERTIFICATES</h2>
                    <hr />
                    {info.crt0 && (
                    <>
                    <div className="degree">
                        <h3>{info.crt0}</h3>
                    </div>
                    </>)}
                    {info.crt1 && (
                    <>
                    <div className="degree">
                        <h3>{info.crt1}</h3>
                    </div>
                    </>)}

                    <h2>HOBBIES</h2>
                    <hr />    
                    {info.hobb0 && (
                            <h3>{info.hobb0}</h3>
                    )}
                    {info.hobb1 && (
                            <h3>{info.hobb1}</h3>
                    )}
                    {info.hobb2 && (
                            <h3>{info.hobb2}</h3>
                    )}
                    <div className="contacts">
                        <div className="contact">
                            <div className="mark"></div>
                            <div className="type">PHONE</div>
                        </div>
                        <p>{info.number}</p>
                        <div className="contact">
                            <div className="mark"></div>
                            <div className="type">ADDRESS</div>
                        </div>
                        <p>{info.address}</p>
                        <div className="contact">
                            <div className="mark"></div>
                            <div className="type">EMAIL</div>
                        </div>
                        <p>{info.email}</p>
                        {info.li && (
                        <>
                        <div className="contact">
                            <div className="mark"></div>
                            <div className="type">LINKEDIN</div>
                        </div>
                        <p>{info.li}</p>
                        </>)}
                        {info.links && (
                        <>
                        <div className="contact">
                            <div className="mark"></div>
                            <div className="type">WEBSITES OR LINKS</div>
                        </div>
                        <p>{info.links}</p>
                        </>)}
                    </div>
                </div>
                <div className="right-part">
                    <div className="cv-title">
                        <h1>{info.name}</h1>
                        <h3>{info.title}</h3>
                    </div>
                    <div className="right-body">
                        <h3>ABOUT ME</h3>
                        <hr />
                        <p>{info.summary}</p>

                        <h3>WORK EXPERIENCE</h3>
                        <hr />
                        <div className="exp">
                            {info.title0 && (
                                <>
                                    <h4>{info.date0}</h4>
                                    <div>
                                        <h4>{info.title0}</h4>
                                        <h5>{info.compname0}/{info.comploc0}</h5>
                                        <p>
                                            {info.desc0}
                                        </p>
                                    </div>
                                </>
                            )}
                            {info.title1 && (
                                <>
                                    <h4>{info.date1}</h4>
                                    <div>
                                        <h4>{info.title1}</h4>
                                        <h5>{info.compname1}/{info.comploc1}</h5>
                                        <p>
                                            {info.desc1}
                                        </p>
                                    </div>
                                </>
                            )}
                            {info.title2 && (
                                <>
                                    <h4>{info.date2}</h4>
                                    <div>
                                        <h4>{info.title2}</h4>
                                        <h5>{info.compname2}/{info.comploc2}</h5>
                                        <p>
                                            {info.desc2}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>

                        <h3>SKILLS & LANGUAGES</h3>
                        <hr />
                        <div className="skills">
                            {info.skill0 && (
                            <>
                            <div className="skill">
                                <h4>{info.skill0}</h4>
                                <progress value={info.skillprc0} max="100"></progress>
                            </div>
                            </>)}
                            {info.skill1 && (
                            <>
                            <div className="skill">
                                <h4>{info.skill1}</h4>
                                <progress value={info.skillprc1} max="100"></progress>
                            </div>
                            </>)}
                            {info.skill2 && (
                            <>
                            <div className="skill">
                                <h4>{info.skill2}</h4>
                                <progress value={info.skillprc2} max="100"></progress>
                            </div>
                            </>)}
                            {info.lang0 && (
                            <>
                            <div className="skill">
                                <h4>{info.lang0}</h4>
                                <progress value={info.langprc0} max="100"></progress>
                            </div>
                            </>)}
                            {info.lang1 && (
                            <>
                            <div className="skill">
                                <h4>{info.lang1}</h4>
                                <progress value={info.langprc1} max="100"></progress>
                            </div>
                            </>)}
                            {info.lang2 && (
                            <>
                            <div className="skill">
                                <h4>{info.lang2}</h4>
                                <progress value={info.langprc2} max="100"></progress>
                            </div>
                            </>)}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={generatePDF}>Download pdf</button>
        </div>
    );
};

export default Preview;
