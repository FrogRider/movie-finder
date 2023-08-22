import { BASE_URL, API_KEY } from '../constants'
import { Film, MovieInfo } from '../api/interfaces'
import { useFetch } from '@vueuse/core'
import useMoviesStore from '../store/moviesStore'

export const getMoviesByTitle = async (title: string): Promise<string> => {
	const moviesStore = useMoviesStore()

	const { data } = await useFetch<Array<Film>>(
		`${BASE_URL}/?apikey=${API_KEY}&s=${title}&page=${
			moviesStore.currentPage + 1
		}`
	)

	return data
}

export const getMovieById = async (id: string | null): Promise<string> => {
	const moviesStore = useMoviesStore()

	const { data } = await useFetch<MovieInfo>(
		`${BASE_URL}/?apikey=${API_KEY}&i=${id}`
	)

	return data
}
