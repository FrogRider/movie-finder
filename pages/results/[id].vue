<template>
	<div>
		<div v-if="curentMovie" class="grid grid-cols-[1fr_4fr]">
			<div>
				<img :src="curentMovie.Poster" alt="" />
			</div>

			<div>
				<p><b>Title:</b> {{ curentMovie.Title }}</p>
				<hr class="my-[10px]" />

				<p><b>Director:</b> {{ curentMovie.Director }}</p>
				<hr class="my-[10px]" />

				<p><b>Description:</b> {{ curentMovie.Plot }}</p>
				<hr class="my-[10px]" />

				<b>Rating:</b>
				<Rating :percentage="getInternetMovieDatabaseRating" :max-value="10" />
				<hr class="my-[10px]" />

				<NuxtLink to="/results">
					<el-button type="primary" class="my-[10px]">
						Back to results
					</el-button>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
	import useMoviesStore from '@/store/moviesStore'
	import { storeToRefs } from 'pinia'

	const moviesStore = useMoviesStore()

	const { curentMovie } = storeToRefs(moviesStore)

	const getInternetMovieDatabaseRating = computed(() => {
		const rating =
			curentMovie.value.Ratings.find(
				(rating) => rating.Source == 'Internet Movie Database'
			).Value.split('/')[0] || 0

		return Number(rating)
	})

	onMounted(() => {
		const id = useRoute().params.id
		moviesStore.setCurentMovieId(id)
		moviesStore.getMovie()
	})

	onBeforeUnmount(() => {
		moviesStore.setCurentMovieId(null)
		moviesStore.clearCurrentMovie()
	})
</script>

<style lang="scss" scoped></style>
