<template>
	<div>
		<el-carousel
			v-if="movies.length"
			:autoplay="false"
			trigger="click"
			indicator-position="none"
			:initial-index="currentIndex"
			:loop="false"
			:pause-on-hover="false"
			height="calc(100vh - 6lh - 40px)"
			arrow="always"
			@change="setItem"
		>
			<el-carousel-item v-for="(movie, index) in movies" :key="movie.imdbID">
				<div class="grid grid-rows-[auto_1fr_auto_auto] h-full">
					<div class="text-center">{{ movie.Title }}</div>
					<div
						class="bg-center bg-contain bg-no-repeat"
						:style="`background-image: url('${getPoster}')`"
					></div>
					<div class="text-center">{{ movie.Year }}</div>
					<div class="text-center">
						<NuxtLink :to="`/results/${movie.imdbID}`">
							<el-button type="primary"> Details </el-button>
						</NuxtLink>
					</div>
					<div class="text-center">{{ index + 1 }} / {{ totalResults }}</div>
				</div>
			</el-carousel-item>
		</el-carousel>
		<div v-else>
			<p>there are no movies found yet</p>
			<NuxtLink to="/">
				<el-button type="primary"> Search </el-button>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia'
	import useMoviesStore from '../../store/moviesStore'
	import { ITEMS_PER_PAGE } from '../../constants'

	// const currentIndex = ref(0)

	const moviesStore = useMoviesStore()

	const { movies, totalResults, currentIndex } = storeToRefs(moviesStore)

	const setItem = (index) => {
		// .value = index
		moviesStore.setCurrentIndex(index)
		if (index % ITEMS_PER_PAGE == ITEMS_PER_PAGE - 2) {
			moviesStore.getNextPage()
		}
	}

	const getPoster = computed(() => {
		// https://static.thenounproject.com/png/4143644-200.png
		const currentPoster = movies.value[currentIndex.value]?.Poster
		return !currentPoster || currentPoster == 'N/A'
			? 'http://drive.google.com/uc?export=view&id=1futXAfSaeknVeF1sfkZ4fWxyH4eYxeGd'
			: currentPoster
	})
</script>
