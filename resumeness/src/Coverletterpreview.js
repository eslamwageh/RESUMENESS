import { useRef } from "react";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";

const Coverletterpreview = () => {
    const location = useLocation();
    const info = location.state;
    //const { name, address } = location.state || {};

    const cl = useRef();
    async function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF("p", "pt");
        await html2canvas(cl.current, {
            width: 600,
            height: 800,
        }).then((canvas) => {
            doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 600, 1030);
        });
        doc.save("Document.pdf");
    }
    return (
        <div className="coverletterpreview">
            <div className="previewcl" ref={cl}>
                <div className="leftcl">
                    <h1>VICTORIA</h1>
                    <h1>BURKE</h1>
                    <h3>Manager</h3>
                    <hr />
                    <h4>CONTACT</h4>
                    <p>adfagadg</p>
                    <p>adfagadg</p>
                    <p>adfagadg</p>
                    <p>adfagadg</p>
                </div>
                <div className="rightcl">
                    <h4>DEAR RECIPIENT</h4>
                    <p>
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                        adfafafajjfjfjfjfjfjfj
                        fjfjfjfjfjfjfjjfjfjfjfj
                        fjfjfjfjfjfjfjfjf
                    </p>
                </div>
            </div>
            <button onClick={generatePDF}>Download pdf</button>
        </div>
    );
};

export default Coverletterpreview;
