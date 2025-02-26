import projects from "./projects.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projectsContainer");

    // Detect if running on GitHub Pages
    const isGitHubPages = window.location.hostname.includes("github.io");

    projects.forEach(project => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("card-wrapper");

        const card = document.createElement("div");
        card.classList.add("card");

        const imageUrl = `../Projects/${project.folder}/output.png`;
        console.log(imageUrl);

        card.style.backgroundImage = `url('${imageUrl}')`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        card.style.backgroundRepeat = "no-repeat";

        const textDiv = document.createElement("div");
        textDiv.classList.add("card-text");
        textDiv.textContent = project.name;

        card.appendChild(textDiv);

        // Click event to store folder name and navigate
        card.onclick = () => {
            localStorage.setItem("selectedProjectFolder", project.folder);
            window.location.href = "codeView.html";
        };

        wrapper.appendChild(card);
        container.appendChild(wrapper);
    });
});
