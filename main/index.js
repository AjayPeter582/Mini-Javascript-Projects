import projects from "./projects.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projectsContainer");

    projects.forEach(project => {
        // Create a wrapper for each card
        const wrapper = document.createElement("div");
        wrapper.classList.add("card-wrapper");

        // Create the card element
        const card = document.createElement("div");
        card.classList.add("card");

        // Set background dynamically
        card.style.backgroundImage = `url('./Projects/${project.folder}/output.png')`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        card.style.backgroundRepeat = "no-repeat";

        // Create the text div inside the card
        const textDiv = document.createElement("div");
        textDiv.classList.add("card-text");
        textDiv.textContent = project.name;

        // Append text inside the card
        card.appendChild(textDiv);

        // Click event for redirection
        card.onclick = () => {
            window.location.href = `codeView.html?id=${project.id}&folder=${encodeURIComponent(project.folder)}`;
        };

        // Append card inside the wrapper
        wrapper.appendChild(card);

        // Append the wrapper inside the container
        container.appendChild(wrapper);
    });
});
