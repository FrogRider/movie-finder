import { defineStore } from 'pinia'
import { Film, MovieInfo, GetMoviesResponse } from '@/api/interfaces'
import { getMoviesByTitle, getMovieById } from '@/api'

const useMoviesStore = defineStore('MoviesStore', {
	state: () => ({
		isLoading: false,
		movies: [] as Array<Film>,
		searchTitle: 'titanic',
		currentPage: 0,
		currentIndex: 0,
		totalResults: null as number | null,
		curentMovieId: null as string | null,
		curentMovie: null as MovieInfo | null,
	}),
	getters: {},
	actions: {
		showLoader() {
			this.isLoading = true
		},

		hideLoader() {
			setTimeout(() => {
				this.isLoading = false
			}, 1000)
		},

		setInitialMovies(movies: Array<Film>): void {
			this.movies = movies
		},

		setTotalMoviesAmount(amount: number | string): void {
			this.totalResults = Number(amount)
		},

		addMovies(movies: Array<Film>): void {
			this.showLoader()
			this.movies = this.movies.concat(movies)
			this.hideLoader()
		},

		eraseMovies(): void {
			this.movies = []
		},

		setSearchTitle(title: string): void {
			this.searchTitle = title
		},

		setCurrentPage(page: number): void {
			this.currentPage = page
		},

		setCurrentIndex(index: number): void {
			this.currentIndex = index
		},

		getInitialMovies(): void {
			this.showLoader()
			getMoviesByTitle(this.searchTitle).then((response: string) => {
				const data = JSON.parse(response)
				const hasData = !data?.Error
				this.setTotalMoviesAmount(data.totalResults)

				if (!hasData) {
					this.eraseMovies()
					this.setCurrentPage(0)
					return
				}

				this.setInitialMovies(data.Search)
				this.setCurrentPage(0)
			})
			this.hideLoader()
		},

		getNextPage(): void {
			this.showLoader()

			this.currentPage += 1

			getMoviesByTitle(this.searchTitle).then((response: string) => {
				const data = JSON.parse(response)
				const hasData = !data?.Error

				if (!hasData) return

				this.addMovies(data.Search)
			})

			this.hideLoader()
		},

		clearState(): void {
			this.movies = []
			this.searchTitle = ''
			this.totalResults = 0
			this.curentMovie = null
			this.curentMovieId = null
			this.currentIndex = 0
		},

		getMovie(): void {
			this.showLoader()

			getMovieById(this.curentMovieId).then((response) => {
				const data = JSON.parse(response)
				const hasData = !data?.Error

				if (!hasData) {
					showError({
						statusCode: 404,
						statusMessage: `movie with id ${this.curentMovieId} not found`,
					})
					this.curentMovieId = null
					return
				}

				this.curentMovie = data

				this.hideLoader()
			})
		},

		setCurentMovieId(id: string): void {
			this.curentMovieId = id
		},

		clearCurrentMovie(): void {
			this.curentMovie = null
		},
	},
})

export default useMoviesStore
