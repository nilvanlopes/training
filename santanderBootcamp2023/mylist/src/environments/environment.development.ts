export const environment = {
    production: false,
    options: {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjkwYThhYWM2YmNlMmVmYTM1MWNkOWJjMjg4OTUyMCIsInN1YiI6IjY1MmZlMTYwYTgwMjM2MDEzNzY4ZjgxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uz-dAeRSzatcd5erjsXbXEF_UbKQXct7HlWmmk869h8'
        }
    },
    api: 'https://api.themoviedb.org/3/account/20591656/favorite/tv',
    images: 'https://image.tmdb.org/t/p/w300'
};
