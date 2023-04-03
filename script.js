// Make a GET request to the server to get the jokes
    fetch('https://node16.tomkrok1.repl.co/jokebook/categories')
      .then(response => response.json())
      .then(categories => {
        // Create a select element with the categories
        const select = document.createElement('select');
        categories.forEach(category => {
          const option = document.createElement('option');
          option.value = category;
          option.textContent = category;
          select.appendChild(option);
        });
        // Add an event listener to the select element to get the jokes when a category is selected
        select.addEventListener('change', () => {
          const category = select.value;
          fetch(`https://node16.tomkrok1.repl.co/jokebook/joke/${category}`)
            .then(response => response.json())
            .then(joke => {
              // Display the joke in the page
              const jokeContainer = document.querySelector('.joke-container');
              jokeContainer.innerHTML = '';
              const jokeElement = document.createElement('div');
              jokeElement.classList.add('joke');
              jokeElement.innerHTML = `
                <p class="joke-text">${joke.joke}</p>
                <p class="joke-response">${joke.response}</p>
              `;
              jokeContainer.appendChild(jokeElement);
            })
            .catch(error => {
              console.error(error);
            });
        });
        // Add the select element to the page
        document.body.insertBefore(select, document.querySelector('.joke-container'));
      })
      .catch(error => {
        console.error(error);
      });