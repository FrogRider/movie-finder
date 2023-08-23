<template>
	<div>
		<div class="flex" :title="props.percentage">
			<RatingPart
				:transforms="[
					`transform: translateX(-${100 - getRating}%)`,
					`transform: translateX(${100 - getRating}%)`,
				]"
				:maximumNumberOfElementsOnScale="maximumNumberOfElementsOnScale"
			/>

			<RatingPart
				:transforms="[
					`transform: translateX(calc(-${100 - getRating}%))`,
					`transform: translateX(-${getRating}%)`,
				]"
				is-grayscale
				:maximumNumberOfElementsOnScale="maximumNumberOfElementsOnScale"
			/>
		</div>
		<p>{{ props.percentage }} / {{ maxValue }}</p>
	</div>
</template>

<script setup>
	const props = defineProps({
		percentage: {
			type: Number,
			default: 0,
			required: true,
		},
		maxValue: {
			type: Number,
			default: 100,
		},
		maximumNumberOfElementsOnScale: {
			type: Number,
			default: 10,
		},
	})

	const { percentage, maxValue, maximumNumberOfElementsOnScale } = props

	const getRating = computed(() => {
		return (percentage * 100) / maxValue
	})
</script>

<style lang="scss" scoped></style>
