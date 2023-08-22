<template>
	<div class="h-[100vh] grid place-items-center">
		<div
			class="h-[40vh] aspect-square text-center bg-slate-400 p-[20px] card flex flex-col justify-between"
		>
			<p class="text-7xl font-bold">{{ error.statusCode }}</p>
			<p>{{ error.message }}</p>
			<NuxtLink to="/">
				<el-button type="primary"> Home </el-button>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	defineProps(['error'])
</script>

<style lang="scss" scoped></style>
