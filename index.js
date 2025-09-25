// Wait until the whole HTML document has loaded before running the script

document.addEventListener("DOMContentLoaded", () => {
  // Grab references to HTML elements by their IDs

  const animalList = document.getElementById("animal-list");
  const nameEl = document.getElementById("animal-name");
  const imageEl = document.getElementById("animal-image");
  const votesEl = document.getElementById("animal-votes");
  const voteBtn = document.getElementById("vote-btn");
  const resetBtn = document.getElementById("reset-btn");

  // Keeps track of the currently selected animal
  let currentAnimal = null;

  // Fetch animal data from JSON server (db.json must be running with json-server)
  fetch("http://localhost:3000/characters")
    .then((res) => res.json())
    .then((animals) => {
      // Loop through each animal object from the server

      animals.forEach((animal) => {
        // list item for each animal
        const li = document.createElement("li"); // Display the animal's name in the list
        li.textContent = animal.name;
        // Add a click event to show the animal's details when clicked

        li.addEventListener("click", () => showAnimal(animal));

        // Add the list item into the animal list container
        animalList.appendChild(li);
      });
    });

  // Function to display an animal's details on the page

  function showAnimal(animal) {
    // Save a copy of the selected animal as the "current" animal

    currentAnimal = { ...animal };
    // Update the UI with this animal's details

    nameEl.textContent = animal.name;
    imageEl.src = animal.image;
    votesEl.textContent = animal.votes;
  }
  // Event listener for the Vote button
  voteBtn.addEventListener("click", () => {
    if (currentAnimal) {
      // Make sure an animal is selected first
      currentAnimal.votes++; // Increase votes by 1
      votesEl.textContent = currentAnimal.votes;
    }
  });

  // Event listener for the Reset button

  resetBtn.addEventListener("click", () => {
    if (currentAnimal) {
      currentAnimal.votes = 0; // Reset votes to 0
      votesEl.textContent = 0; // Update display
    }
  });
});
