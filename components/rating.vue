<template>
	<div>
		<div class="flex" :title="props.percentage">
			<span
				class="overflow-hidden"
				:style="`transform: translateX(-${100 - getRating}%)`"
			>
				<span
					class="rating flex"
					:style="`transform: translateX(${100 - getRating}%)`"
				>
					<svg v-for="i in 10" :key="i" class="icon w-[40px] h-[40px]">
						<use xlink:href="../assets/images/sprites.svg#star-active" />
					</svg>
				</span>
			</span>
			<span
				class="overflow-hidden grayscale"
				:style="`transform: translateX(calc(-${100 - getRating}%))`"
			>
				<span
					class="rating flex"
					:style="`transform: translateX(-${getRating}%)`"
				>
					<svg v-for="i in 10" :key="i" class="icon w-[40px] h-[40px]">
						<use xlink:href="../assets/images/sprites.svg#star-active" />
					</svg>
				</span>
			</span>
		</div>
		<p>{{ props.percentage }}</p>
	</div>
</template>

<script setup>
	const props = defineProps({
		percentage: String,
	})

	const getRating = computed(() => {
		return (props.percentage * 100) / 10
	})
</script>

<style lang="scss" scoped></style>
