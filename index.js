document.addEventListener("DOMContentLoaded", () => {
  const animalList = document.getElementById("animal-list");
  const nameEl = document.getElementById("animal-name");
  const imageEl = document.getElementById("animal-image");
  const votesEl = document.getElementById("animal-votes");
  const voteBtn = document.getElementById("vote-btn");
  const resetBtn = document.getElementById("reset-btn");

  let currentAnimal = null;

  fetch("http://localhost:3000/characters")
    .then((res) => res.json())
    .then((animals) => {
      animals.forEach((animal) => {
        const li = document.createElement("li");
        li.textContent = animal.name;
        li.addEventListener("click", () => showAnimal(animal));
        animalList.appendChild(li);
      });
    });

  function showAnimal(animal) {
    currentAnimal = { ...animal };
    nameEl.textContent = animal.name;
    imageEl.src = animal.image;
    votesEl.textContent = animal.votes;
  }

  voteBtn.addEventListener("click", () => {
    if (currentAnimal) {
      currentAnimal.votes++;
      votesEl.textContent = currentAnimal.votes;
    }
  });

  resetBtn.addEventListener("click", () => {
    if (currentAnimal) {
      currentAnimal.votes = 0;
      votesEl.textContent = 0;
    }
  });
});
