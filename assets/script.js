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
    {
        name: "Background Changer",
        description: "Simple program that will change the div and body elements background colors when a button is pressed. There is logic used so no two colors will match. ChatGPT helped with some JS on this project.",
        image: "assets/photos/backgroundChanger.png", // Path to the image
        github: "https://codalaw.github.io/backgroundChanger/",
    },
    {
        name: "Score Board",
        description: "This was a solo project that I was asked to do as part of my Scrimba Front End Career course. They gave me the design, and I had to build it from scratch and code the JS solo. Using knowledge from my 'coookie clicker ' game, i was successful",
        image: "assets/photos/scoreBoard.jpg", // Path to the image
        github: "https://codalaw.github.io/scoreBoard/",
    },
    {
        name: "Day 1",
        description: "Create a multi-section web page with semantic tags (header, footer, nav, section, article), including a table, image gallery, and forms.",
        image: "assets/photos/day1.jpg", // Path to the image
        github: "https://codalaw.github.io/day1/",
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
