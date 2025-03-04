const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели", "");
const personalMovieDB = {
    count: (numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Еще один фильм из просмотренных?", ""),
    d = prompt("На сколько его оцениваете?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB)


