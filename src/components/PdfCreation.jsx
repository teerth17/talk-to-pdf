import React from "react";
import jsPDF from "jspdf";

const PdfCreation = ({ textContent }) => {
    const handleCreatePdf = () => {
        const pdfDoc = new jsPDF();

        pdfDoc.text(textContent, 10, 10)
        
        pdfDoc.save("generated_doc.pdf")
    }

    return (
        <div>
            <h2> PDF Creation</h2>
            <button onClick={handleCreatePdf}> Create PDF</button>
        </div>
    )
}



export default PdfCreation