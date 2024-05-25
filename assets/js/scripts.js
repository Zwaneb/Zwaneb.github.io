document.addEventListener("DOMContentLoaded", function() {
    const pdfContainer = document.getElementById("pdf-container");
    const addPdfButton = document.getElementById("add-pdf");
    const removePdfButton = document.getElementById("remove-pdf");

    // List of initial PDF files
    const pdfFiles = [
        "https://zwaneb.github.io/ZwanebprojectsDS/quizCifar-1.pdf",
        "https://zwaneb.github.io/ZwanebprojectsDS/Titanic%20-%20Stacking%20Exercice.pdf",
        "https://zwaneb.github.io/ZwanebprojectsDS/zwaneb_ridge.pdf",
        "https://zwaneb.github.io/ZwanebprojectsDS/Adaboost%20ou%20XGBoost%20.pdf"
    ];

    function displayPdfLinks() {
        // Clear existing links
        pdfContainer.innerHTML = '';

        // Display all PDF links
        pdfFiles.forEach(function(pdfLink) {
            const link = document.createElement("a");
            link.href = pdfLink;
            link.textContent = pdfLink.split('/').pop().replace(/%20/g, ' '); // Display just the filename
            link.target = "_blank"; // Open in a new tab
            pdfContainer.appendChild(link);
            pdfContainer.appendChild(document.createElement("br"));
        });
    }

    function addProjectPdf() {
        const newPdf = prompt("Enter the URL of the new project PDF:");
        if (newPdf && !pdfFiles.includes(newPdf)) {
            pdfFiles.push(newPdf);
            displayPdfLinks();
        } else {
            alert("Invalid URL or PDF already exists.");
        }
    }

    function removeProjectPdf() {
        const pdfToRemove = prompt("Enter the URL of the project PDF to remove:");
        const index = pdfFiles.indexOf(pdfToRemove);
        if (index > -1) {
            pdfFiles.splice(index, 1);
            displayPdfLinks();
        } else {
            alert("PDF not found.");
        }
    }

    addPdfButton.addEventListener("click", addProjectPdf);
    removePdfButton.addEventListener("click", removeProjectPdf);

    // Display the initial PDF links
    displayPdfLinks();
});
