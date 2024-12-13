// Sample project data array with image paths
const projects = [
    {
        name: "Winter Wonderland",
        description: "Small program highlighting the use of Css and JS to animate flashing lights, and falling snow.",
        image: "assets/photos/winterWonderland.jpg", // Path to the image
        github: "https://codalaw.github.io/winterWonderland/",
    },
    {
        name: "Cookie Clicker",
        description: "Classic game of cookie clicker highlighting the use of onClick, this was my first project that ChatGPT was not copy/pasted for JS. Took my time and learned how the code worked via resources on Google.",
        image: "assets/photos/cooieClicker.jpg", // Path to the image
        github: "https://codalaw.github.io/cookieClicker/",
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
