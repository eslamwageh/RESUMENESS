import { useRef } from "react";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";

const Coverletterpreview = () => {
    const location = useLocation();
    const info = location.state;
    //const { name, address } = location.state || {};
    //8.26 × 11.69
    const cl = useRef();
    async function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF("p", "pt");
        await html2canvas(cl.current, {
            width: 600,
            height: 800,
        }).then((canvas) => {
            doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 600, 1000);
        });
        doc.save("Document.pdf");
    }
    return (
        <div className="coverletterpreview">
            <div className="previewcl" ref={cl}>
                <div className="leftcl">
                    <h1>{info.name.split(' ')[0]}</h1>
                    <h1>{info.name.split(' ')[1]}</h1>
                    <h3>{info.title}</h3>
                    <hr />
                    <h4>CONTACT</h4>
                    <p>{info.address}</p>
                    <p>{info.number}</p>
                    <p>{info.email}</p>
                    {info.LI && <p>{info.LI}</p>}
                </div>
                <div className="rightcl">
                    <div className="compinfo">
                        <p>{info.recname}</p>
                        <p>{info.rectitle}</p>
                        <p>{info.compname}</p>
                        <p>{info.comploc}</p>
                    </div>
                    <div className="paragraph">
                        <h4>DEAR {info.recname}</h4>
                        <p>    {info.para}</p>  
                    </div>
                    
                </div>
            </div>
            <button onClick={generatePDF}>Download pdf</button>
        </div>
    );
};

export default Coverletterpreview;
