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
				<rating :percentage="getInternetMovieDatabaseRating" />
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
	// import { getMovieById } from '../../api'
	import useMoviesStore from '../../store/moviesStore'
	import { storeToRefs } from 'pinia'
	import rating from '../../components/rating.vue'

	const moviesStore = useMoviesStore()

	const { curentMovie } = storeToRefs(moviesStore)

	const getInternetMovieDatabaseRating = computed(() => {
		return curentMovie.value.Ratings.find(
			(rating) => rating.Source == 'Internet Movie Database'
		).Value.split('/')[0]
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

<style lang="scss" scoped>
	.rating {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			background-color: transparent;
			// filter: grayscale(1);
			mix-blend-mode: darken;
			opacity: 0.5;
			height: 100%;
			width: 60px;
			left: 0;
			top: 0;
		}
	}
</style>
