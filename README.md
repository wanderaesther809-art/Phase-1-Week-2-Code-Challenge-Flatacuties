This is a simple animal voting web app.
It fetches a list of animals from a local JSON server, displays them in a list, and allows the user to;

View an animal’s details (name, image, and votes).

Add votes to an animal.

Reset votes to 0.

✨ Features

Dynamic fetching of animals from a JSON server.

Clickable animal list that updates the display.

Increment votes with a Vote button.

Reset votes to 0 with a Reset button.

🛠️ Setup
Prerequisites

Node.js installed

json-server installed globally or locally

npm install -g json-server

Running the Project

Clone this repository.

Start the JSON server:

json-server --watch db.json


By default, this will run on http://localhost:3000/characters.

Open the index.html file in your browser.

🚀 Usage

On page load, the list of animals appears.

Click an animal’s name → see its details (name, image, votes).

Click Vote → increase the vote count.

Click Reset → set votes back to 0.