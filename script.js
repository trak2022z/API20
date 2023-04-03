const url = 'https://node16.tomkrok1.repl.co';

const categoriesList = document.getElementById('categories-list');
const categoryTitle = document.getElementById('category-title');
const joke = document.getElementById('joke');
const response = document.getElementById('response');

fetch('https://node16.tomkrok1.repl.co/jokebook/categories')
  .then(response => response.text())
  .then(categories => {
    const categoriesArray = categories.split('\n').filter(category => category !== '');
    categoriesArray.forEach(category => {
      const li = document.createElement('li');
      li.textContent = category;
      li.addEventListener('click', () => {
        getJoke(category);
      });
      categoriesList.appendChild(li);
    });
  });

function getJoke(category) {
  fetch('https://node16.tomkrok1.repl.co/jokebook/joke/${category}')
    .then(response => response.json())
    .then(joke => {
      categoryTitle.textContent = category.toUpperCase();
      joke.textContent = joke.joke;
      response.textContent = joke.response;
      console.log(joke.joke);
    })
    .catch(error => console.error(error));
}
