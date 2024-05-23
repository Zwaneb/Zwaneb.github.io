document.addEventListener('DOMContentLoaded', () => {
    const addPdfButton = document.getElementById('add-pdf');
    const removePdfButton = document.getElementById('remove-pdf');
    const pdfContainer = document.getElementById('pdf-container');

    addPdfButton.addEventListener('click', () => {
        const pdfLink = document.createElement('a');
        pdfLink.href = 'assets/pdf/sample.pdf'; // Remplacez par le lien réel de votre PDF
        pdfLink.textContent = 'Sample Project PDF';
        pdfLink.className = 'pdf-link';
        pdfContainer.appendChild(pdfLink);
    });

    removePdfButton.addEventListener('click', () => {
        const pdfLinks = pdfContainer.getElementsByClassName('pdf-link');
        if (pdfLinks.length > 0) {
            pdfContainer.removeChild(pdfLinks[pdfLinks.length - 1]);
        }
    });
});
