export interface Film {
	Poster: string
	Title: string
	Type: string
	Year: string
	imdbID: string
}

export interface GetMoviesResponse {
	Response: string
	Search: Array<Film>
	totalResults: string
}

export interface MovieInfo extends Film {
	Rated: string
	Released: string
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Ratings: Array<RatingProvider>
	Metascore: string
	imdbRating: string
	imdbVotes: string
	DVD: string
	BoxOffice: string
	Production: string
	Website: string
	Response: string
}

interface RatingProvider {
	Source: string
	Value: string
}
