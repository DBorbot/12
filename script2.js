const numberOfFilms = +prompt("How many films you looking?", "");

const personalMovieDB = {
    count: (numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt("Какой последний фильм вы просмотрели?", ""),
    b = +prompt("Какая его оценка?", ""),
    c = prompt("Какой последний фильм вы просмотрели?", ""),
    d = +prompt("Какая его оценка?", "")
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;



console.log(personalMovieDB); 
