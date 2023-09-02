import { useRef } from "react";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import React from 'react';
import jsPDF from 'jspdf';

const Coverletterpreview = () => {
    const location = useLocation();
    const info = location.state;
    //const { name, address } = location.state || {};
    //8.26 × 11.69
    const captureRef = React.useRef(null);
    const generatePDF = async () => {
        if (captureRef.current) {
          const contentWidth = captureRef.current.offsetWidth;
          const contentHeight = captureRef.current.offsetHeight;
      
          const pdf = new jsPDF('p', 'pt', [contentWidth, contentHeight]);
          let position = 0;
      
          const renderPage = async () => {
            const canvas = await html2canvas(captureRef.current, {
              y: position,
              scrollY: -position,
              windowWidth: contentWidth,
              windowHeight: contentHeight
            });
      
            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            position -= contentHeight;
      
            if (position > -contentHeight) {
              pdf.addPage();
              await renderPage();
            } else {
              pdf.save('capture.pdf');
            }
          };
      
          await renderPage();
        }
      };
    return (
        <div className="coverletterpreview">
            <div className="previewcl" ref={captureRef}>
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
