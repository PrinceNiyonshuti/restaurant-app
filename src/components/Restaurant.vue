<!-- @format -->

<template>
	<div
		class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
		v-for="restaurant in restaurant"
		:key="restaurant.id"
	>
		<router-link
			to="/dashboard"
			class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
		>
			<div class="relative pb-48 overflow-hidden">
				<img
					class="absolute inset-0 h-full w-full object-cover"
					:src="restaurant.photo"
					alt=""
				/>
			</div>
			<div class="p-4">
				<span
					class="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs"
					>{{ restaurant.location }}</span
				>
				<h2 class="mt-2 mb-2 font-bold">{{ restaurant.name }}</h2>
				<p class="text-sm">
					{{ restaurant.description }}
				</p>
				<div class="mt-3 flex items-center">
					<span class="font-bold text-lg">{{ restaurant.price_range }}</span
					>&nbsp;<span class="text-sm font-semibold">Rwf</span>
				</div>
			</div>
			<div class="p-4 flex items-center text-sm text-gray-600">
				<span class="ml-2">{{ restaurant.stars }} Stars</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name: "Restaurant",
		props: {
			restaurant: Array,
		},
	};
</script>
