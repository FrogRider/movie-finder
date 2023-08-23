import { BASE_URL, API_KEY } from '@/constants'
import { useFetch } from '@vueuse/core'
import useMoviesStore from '@/store/moviesStore'

export const getMoviesByTitle = async (title: string): Promise<string> => {
	const moviesStore = useMoviesStore()

	const { data } = await useFetch(
		`${BASE_URL}/?apikey=${API_KEY}&s=${title}&page=${
			moviesStore.currentPage + 1
		}`
	)

	const result = data.value as string

	return result
}

export const getMovieById = async (id: string | null): Promise<string> => {
	const { data } = await useFetch(`${BASE_URL}/?apikey=${API_KEY}&i=${id}`)

	const result = data.value as string

	return result
}
