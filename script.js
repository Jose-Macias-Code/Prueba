const movieList = document.getElementById('movie-list');
const addMovieButton = document.getElementById('add-movie-btn');
const newMovieInput = document.getElementById('new-movie');

function addMovie() {
    const movieName = newMovieInput.value.trim();

    if (movieName === "") {
        alert("No se puede agregar una película vacía.");
        return;
    }

    const newListItem = document.createElement('li');
    newListItem.textContent = movieName;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add('delete-btn');
    
    deleteButton.addEventListener('click', function() {
        movieList.removeChild(newListItem);
    });

    newListItem.appendChild(deleteButton);

    movieList.appendChild(newListItem);

    newMovieInput.value = "";
}

addMovieButton.addEventListener('click', addMovie);

const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const listItem = button.parentElement;
        movieList.removeChild(listItem);
    });
});
