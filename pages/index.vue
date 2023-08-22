<template>
	<div>
		<h2 class="font-bold">
			MovieFinder is a web app that allows users to search for movies by title.
			The app has three pages:
		</h2>

		<p>
			Homepage: The homepage contains a search box where users can enter the
			title of a movie. The app will then search the Open Movie Database (OMDb)
			API for movies that match the search criteria. If the app finds any
			matches, it will display them in a slider on the homepage.
		</p>
		<hr class="my-[10px]" />
		<p>
			Results page: The results page displays the movies that were found by the
			search query. Each movie slide contains the movie's title, poster,
			director, and year.
		</p>
		<hr class="my-[10px]" />
		<p>
			Detail page: The detail page displays more information about a specific
			movie. This information includes the movie's title, poster, director,
			year, plot, and rating.
		</p>

		<h2 class="font-bold mt-[20px]">
			Here are some additional details about the app's functionality:
		</h2>

		<p>
			The app uses the OMDb API to fetch information about movies. The OMDb API
			is a free API that provides information about movies, TV shows, and
			actors.
		</p>
		<hr class="my-[10px]" />
		<p>
			The app uses a slider to display the movies on the homepage. This makes it
			easy for users to scroll through the results and find the movies they are
			looking for.
		</p>
		<div class="grid grid-cols-[auto_1fr] gap-[20px] mt-[40px]">
			<el-button
				type="primary"
				:disabled="!isSearchEnabled"
				@click="fetchFilms"
			>
				Search
			</el-button>

			<el-input
				v-model="searchTitleValue"
				placeholder="Please input"
				clearable
				@keyup.enter="fetchFilms"
				@clear="moviesStore.clearState"
			/>
		</div>
		<!-- <div v-if="totalResults">results: {{ totalResults }}</div> -->
		<NuxtLink to="/results">
			<el-button v-if="totalResults" type="primary" class="mt-[20px]">
				Show results ({{ totalResults }})
			</el-button>
		</NuxtLink>
	</div>
</template>

<script setup>
	import { MIN_INPUT_LENGTH } from '../constants'
	import useMoviesStore from '../store/moviesStore'
	import { storeToRefs } from 'pinia'

	const moviesStore = useMoviesStore()

	const { totalResults } = storeToRefs(moviesStore)

	const title = ref('')

	const searchTitleValue = computed({
		get: () => moviesStore.searchTitle,
		set: (title) => {
			moviesStore.setSearchTitle(title)
		},
	})

	const isSearchEnabled = computed(() => {
		return moviesStore.searchTitle.length >= MIN_INPUT_LENGTH
	})

	// const getMoviesAmount = computed(() => {
	// 	return totalResults
	// })

	const fetchFilms = () => {
		if (!isSearchEnabled.value) return

		moviesStore.getInitialMovies()
	}

	watch(title, () => {
		// handleLoaderStatusUpdate()
	})
</script>

<style lang="scss" scoped></style>
