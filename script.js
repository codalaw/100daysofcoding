// Sample project data array with image paths
const projects = [
    {
        name: "Project 1",
        description: "This is a brief description of Project 1. It showcases my ability to work with JavaScript and HTML.",
        image: "assets/photos/alphabet.jpg", // Path to the image
        github: "https://github.com/your-username/project1",
    },
    {
        name: "Project 2",
        description: "This is a brief description of Project 2. It includes CSS styling and interactive elements.",
        image: "change me", // Path to the image
        github: "https://github.com/your-username/project2",
    },
    // Add more projects here
];

const projectContainer = document.getElementById("project-container");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    // Create an image element dynamically
    const projectImage = document.createElement("img");
    projectImage.src = project.image;  // Set the source to the image path
    projectImage.alt = `${project.name} Image`; // Set alt text for accessibility
    projectImage.classList.add("project-image");  // Optional: Add a CSS class for styling

    // Set the inner HTML for the project card
    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.github}" target="_blank">View Project</a>
    `;

    // Append the image to the project card
    projectCard.insertBefore(projectImage, projectCard.firstChild);

    // Append the project card to the container
    projectContainer.appendChild(projectCard);
});
