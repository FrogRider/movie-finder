<template>
	<div class="wrapper min-h-screen grid grid-rows-[3lh_1fr_3lh] relative">
		<div
			v-if="isLoading"
			class="loading absolute w-[100%] h-[100%] absolute grid place-items-center bg-slate-400"
		></div>
		<header
			class="bg-slate-400 flex justify-between items-center px-[20px] drop-shadow-2xl"
		>
			<NuxtLink to="/">Movie Finder</NuxtLink>

			<ul class="flex gap-[20px]">
				<li><NuxtLink to="/results">Results</NuxtLink></li>
				<li><NuxtLink to="/">Home</NuxtLink></li>
			</ul>
		</header>

		<div class="content-zone p-[20px_60px]">
			<slot> </slot>
		</div>

		<footer class="bg-slate-400">some footer here</footer>
	</div>
</template>

<script setup>
	import useMoviesStore from '../store/moviesStore'
	import { storeToRefs } from 'pinia'

	const moviesStore = useMoviesStore()
	const { isLoading } = storeToRefs(moviesStore)
</script>

<style lang="scss">
	ul .router-link-active {
		border-bottom: 3px solid #2bd24a;
	}

	.content-zone {
		background-color: #ccc;
	}

	.loading {
		z-index: 1000;
		opacity: 0.8;
		&::after {
			content: '';
			height: 20vh;
			aspect-ratio: 1/1;
			border-radius: 100%;
			border: 5px solid rgb(64, 158, 255);
			border-top: 5px solid transparent;
			left: 50%;
			top: 50%;
			animation: rotation 1s linear infinite;
		}
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
