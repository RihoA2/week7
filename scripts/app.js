const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const releaseDate = document.querySelector('.userInputReleaseDate');
const movieReleaseDateToDisplay = document.querySelector('.movieReleaseDate')
let titleInStorage = localStorage.getItem('title');
let  imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseDateInStorage = localStorage.getItem('releaseDate');

if(titleInStorage && imageUrlInStorage && releaseDateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieReleaseDateToDisplay.textContent = releaseDateInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.432), rgba(0, 0, 0, 0.575)),
    url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () =>{
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let releaseDateInput = releaseDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseDate', releaseDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieReleaseDateToDisplay.textContent = releaseDateInput;
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 255, 0.432), rgba(0, 0, 0, 0.575)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    releaseDate.value = '';
});