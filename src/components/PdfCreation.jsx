import React from "react";
import jsPDF from "jspdf";
import html2pdf from 'html2pdf.js';


const PdfCreation = ({ textContent }) => {
    //   const sanitizeHtml = (html) => {
    // const doc = new DOMParser().parseFromString(html, 'text/html');
    // return doc.body.textContent || "";
//   };
    const handleCreatePdf = () => {

        // const sanitizedText = sanitizeHtml(textContent)
        // const pdfDoc = new jsPDF();

        // pdfDoc.text(sanitizedText, 10, 10)
        
        // pdfDoc.save("generated_doc.pdf")
         html2pdf().from(textContent).save();
    }

    return (
        <div>
            <h2> PDF Creation</h2>
            <button onClick={handleCreatePdf}> Create PDF</button>
        </div>
    )
}



export default PdfCreation