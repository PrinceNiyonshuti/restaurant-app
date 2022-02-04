<!-- @format -->

<template>
	<div class="h-screen bg-gray-100">
		<NavBar />
		<div class="px-2">
			<div class="container mx-auto">
				<div class="button-container flex flex-wrap justify-between mb-2">
					<div class="p-2 flex items-center text-sm">
						<div class="flex flex-wrap -mx-2">
							<h1 class="text-2xl font-bold text-center mt-4 ml-8">
								Add Restaurants
							</h1>
						</div>
					</div>
				</div>
				<div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import NavBar from "../components/NavBar.vue";
	export default {
		name: "AddRestaurant",
		components: {
			NavBar,
		},
	};
</script>
