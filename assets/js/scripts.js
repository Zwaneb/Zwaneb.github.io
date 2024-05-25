document.addEventListener("DOMContentLoaded", function() {
    const pdfContainer = document.getElementById("pdf-container");
    const addPdfButton = document.getElementById("add-pdf");
    const removePdfButton = document.getElementById("remove-pdf");
    const pdfList = document.getElementById("pdf-list");

    // List of initial PDF files
    const pdfFiles = [
        "https://zwaneb.github.io/ZwanebprojectsDS/quizCifar-1.pdf",
        "https://zwaneb.github.io/ZwanebprojectsDS/Titanic_Stacking_Exercice.pdf",
        "https://zwaneb.github.io/ZwanebprojectsDS/zwaneb_ridge.pdf",
        "https://zwaneb.github.io/ZwanebprojectsDS/Adaboost_ou_XGBoost.pdf"
    ];

    function displayPdfLinks() {
        // Clear existing links and options
        pdfContainer.innerHTML = '';
        pdfList.innerHTML = '';

        // Display all PDF links and populate the select list
        pdfFiles.forEach(function(pdfLink) {
            const link = document.createElement("a");
            link.href = pdfLink;
            link.textContent = pdfLink.split('/').pop().replace(/%20/g, ' '); // Display just the filename
            link.target = "_blank"; // Open in a new tab
            pdfContainer.appendChild(link);
            pdfContainer.appendChild(document.createElement("br"));

            const option = document.createElement("option");
            option.value = pdfLink;
            option.textContent = pdfLink.split('/').pop().replace(/%20/g, ' '); // Display just the filename
            pdfList.appendChild(option);
        });
    }

    function addProjectPdf() {
        const newPdf = prompt("Enter the URL of the new project PDF:");
        if (newPdf && !pdfFiles.includes(newPdf)) {
            pdfFiles.push(newPdf);
            displayPdfLinks();
        } else {
            alert("The PDF already exists in the list or the URL is invalid.");
        }
    }

    function removeProjectPdf() {
        const pdfToRemove = pdfList.value;
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
