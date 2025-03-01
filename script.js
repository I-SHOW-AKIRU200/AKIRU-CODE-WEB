// script.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("projects.json")
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById("projects-container");
            container.innerHTML = "";
            projects.forEach(project => {
                const div = document.createElement("div");
                div.className = "project";
                div.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="view.html?name=${encodeURIComponent(project.name)}" class="btn">View Code</a>
                `;
                container.appendChild(div);
            });
        });
});
