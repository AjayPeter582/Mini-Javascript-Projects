import projects from "./projects.js"; // ✅ Import project data



document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    let folder = urlParams.get("folder");

    if (!folder) {
        document.getElementById("projectTitle").textContent = "Project Not Found";
        document.getElementById("code-display").textContent = "⚠️ Error: No project folder specified.";
        return;
    }

    folder = decodeURIComponent(folder).trim().replace(/[^a-zA-Z0-9-_ ]/g, "");

    if (folder.includes("..") || folder.includes("/")) {
        document.getElementById("code-display").textContent = "⚠️ Error: Invalid folder path.";
        return;
    }

    // ✅ Set up Live Demo Button
    const btnEl = document.getElementById("live-demo");
    if (btnEl) {
        btnEl.onclick = () => {
            let encodedFolder = encodeURIComponent(folder); // Encode spaces properly
            window.location.href = `../Projects/${encodedFolder}/index.html`;
        };
    }

    const sourceBtnEl = document.getElementById("source-code");

if (sourceBtnEl) {
    sourceBtnEl.onclick = () => {
        let encodedFolder = encodeURIComponent(folder); // Encode spaces properly
        window.location.href = `https://github.com/AjayPeter582/Mini-Javascript-Projects/tree/Projects/${encodedFolder}`;
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

    // ✅ Find project data
    const project = projects.find((proj) => proj.folder === folder);
    if (!project) {
        document.getElementById("projectTitle").textContent = "Project Not Found";
        document.getElementById("code-display").textContent = "⚠️ Error: This project does not exist.";
        return;
    }

    // ✅ Set Project Title and Description
    document.getElementById("projectTitle").textContent = project.name;
    document.querySelector("p").textContent = project.description || "No description available.";

    function loadCode(fileName, lang) {
        const filePath = `../Projects/${encodeURIComponent(folder)}/${fileName}`;

        fetch(filePath)
            .then((response) => {
                if (!response.ok) throw new Error("File not found");
                return response.text();
            })
            .then((data) => {
                const codeDisplay = document.getElementById("code-display");
                codeDisplay.className = `language-${lang}`;
                codeDisplay.textContent = data;
                Prism.highlightElement(codeDisplay); // Highlight syntax
            })
            .catch((error) => {
                document.getElementById("code-display").textContent = `⚠️ Error: ${error.message}`;
            });
    }

    // ✅ Load default HTML file
    loadCode("index.html", "html");

    // ✅ Event Listeners for Buttons
    document.getElementById("htmlBtn").addEventListener("click", () => loadCode("index.html", "html"));
    document.getElementById("cssBtn").addEventListener("click", () => loadCode("style.css", "css"));
    document.getElementById("jsBtn").addEventListener("click", () => loadCode("index.js", "javascript"));
});
