const url = 'https://node16.tomkrok1.repl.co';

const category = window.location.pathname.split('/').pop();
      const jokeContainer = document.getElementById('joke-container');
      const getJokeBtn = document.getElementById('get-joke-btn');

      // Fetch a random joke from the server
      async function fetchJoke() {
        const response = await fetch('https://node16.tomkrok1.repl.co/jokebook/joke/${category}');
        const joke = await response.json();
        return joke;
      }

      // Display the joke on the page
      function displayJoke(joke) {
        jokeContainer.innerHTML = `
          <p>${joke.joke}</p>
          <p>${joke.response}</p>
        `;
      }

      // Add an event listener to the button to fetch a new joke when clicked
      getJokeBtn.addEventListener('click', async () => {
        const joke = await fetchJoke();
        displayJoke(joke);
      });

      // Fetch and display a joke when the page loads
      fetchJoke().then(joke => displayJoke(joke));