<template>
	<span
		class="overflow-hidden"
		:class="{ grayscale }"
		:style="props.transforms[0]"
	>
		<span class="rating flex" :style="props.transforms[1]">
			<svg
				v-for="i in maximumNumberOfElementsOnScale"
				:key="i"
				class="icon w-[40px] h-[40px]"
			>
				<use xlink:href="@/assets/images/sprites.svg#star" />
			</svg>
		</span>
	</span>
</template>

<script setup>
	const props = defineProps({
		transforms: Array,
		isGrayscale: {
			type: Boolean,
			default: false,
		},
		maximumNumberOfElementsOnScale: {
			type: Number,
			required: true,
		},
	})

	const { isGrayscale: grayscale, maximumNumberOfElementsOnScale } = props
</script>
