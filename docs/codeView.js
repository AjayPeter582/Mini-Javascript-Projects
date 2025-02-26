import projects from "./projects.js";

document.addEventListener("DOMContentLoaded", () => {
    const folder = localStorage.getItem("selectedProjectFolder");

    if (!folder) {
        document.getElementById("projectTitle").textContent = "Project Not Found";
        document.getElementById("code-display").textContent = "⚠️ Error: No project folder specified.";
        return;
    }

    // Set up Live Demo Button
    const btnEl = document.getElementById("live-demo");
if (btnEl) {
    btnEl.onclick = () => {
        window.open(`https://rawcdn.githack.com/AjayPeter582/Mini-Javascript-Projects/main/Projects/${folder}/index.html`, "_blank");
    };
}



    const sourceBtnEl = document.getElementById("source-code");
    if (sourceBtnEl) {
        sourceBtnEl.onclick = () => {
            window.location.href = `https://github.com/AjayPeter582/Mini-Javascript-Projects/tree/main/Projects/${folder}`;
        };
    }

    document.getElementById("copyButton").addEventListener("click", function () {
        const codeText = document.getElementById("code-display").textContent;
        navigator.clipboard.writeText(codeText).then(() => {
            const message = document.getElementById("copiedMessage");
            message.style.display = "inline";
            setTimeout(() => {
                message.style.display = "none";
            }, 1500);
        }).catch(err => console.error("Error copying text:", err));
    });

    // Find project data
    const project = projects.find((proj) => proj.folder === folder);
    if (!project) {
        document.getElementById("projectTitle").textContent = "Project Not Found";
        document.getElementById("code-display").textContent = "⚠️ Error: This project does not exist.";
        return;
    }

    document.getElementById("projectTitle").textContent = project.name;
    document.querySelector("p").textContent = project.description || "No description available.";

    function loadCode(fileName, lang) {
        const filePath = `../Projects/${folder}/${fileName}`;

        fetch(filePath)
            .then((response) => {
                if (!response.ok) throw new Error("File not found");
                return response.text();
            })
            .then((data) => {
                const codeDisplay = document.getElementById("code-display");
                codeDisplay.className = `language-${lang}`;
                codeDisplay.textContent = data;
                Prism.highlightElement(codeDisplay);
            })
            .catch((error) => {
                document.getElementById("code-display").textContent = `⚠️ Error: ${error.message}`;
            });
    }

    // Load default HTML file
    loadCode("index.html", "html");

    // Event Listeners for Buttons
    document.getElementById("htmlBtn").addEventListener("click", () => loadCode("index.html", "html"));
    document.getElementById("cssBtn").addEventListener("click", () => loadCode("style.css", "css"));
    document.getElementById("jsBtn").addEventListener("click", () => loadCode("index.js", "javascript"));
});
