const searchButton = document.querySelector('#search-button')
const searchButtonContent = document.querySelector('#search-button div')

searchButton.addEventListener('click', toggleButton) 

function toggleButton() {
  searchButtonContent.classList.toggle('loading')
  searchButtonContent.classList.toggle('please wait')
}

/* XXXXXXXXXXXXXXXXXXXXXXXX searching button with rotating circle.xxxxxxxxxxxxxxxxx */


