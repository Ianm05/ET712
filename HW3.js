class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails() {
        return `${this.title}, directed by ${this.director}, released in ${this.year}.`;
    }
}

class MovieCollection {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    removeMovie(title) {
        try {
            const index = this.movies.findIndex(movie => movie.title === title);
            if (index === -1) throw new Error("Movie not found in collection.");
            this.movies.splice(index, 1);
        } catch (error) {
            console.error(error.message);
        }
    }

    showMovies() {
        try {
            if (this.movies.length === 0) throw new Error("No movies in the collection.");
            this.movies.forEach(movie => console.log(movie.getDetails()));
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Example usage:
const collection = new MovieCollection();

const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
const movie2 = new Movie("The Matrix", "The Wachowskis", 1999);

collection.addMovie(movie1);
collection.addMovie(movie2);

collection.showMovies();
collection.removeMovie("The Matrix");
collection.showMovies();
collection.removeMovie("Avatar");
collection.showMovies();
