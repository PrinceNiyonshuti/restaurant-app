<!-- @format -->

<template>
	<div class="bg-gray-100">
		<NavBar />
		<div class="px-2">
			<div class="container mx-auto">
				<div class="button-container flex flex-wrap justify-between mb-2">
					<div class="p-2 flex items-center text-sm">
						<div class="flex flex-wrap -mx-2">
							<h1 class="text-2xl font-bold text-center mt-4 ml-8">
								Restaurants
							</h1>
						</div>
					</div>
					<div class="p-2 flex items-center text-sm">
						<div class="flex border-2 rounded">
							<input
								onChange="{handleSearch}"
								type="text"
								class="px-4 py-2 w-80"
								placeholder="Search Restaurants...."
							/>
							<button
								onClick="{searchMovie}"
								class="flex items-center justify-center px-4 border-l"
							>
								<svg
									class="w-6 h-6 text-black"
									fill="black"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path
										d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="p-2 pr-4 flex items-center text-sm">
						<div class="float-right mt-2">
							<select
								onChange="{getFilteredMovies}"
								class="float-right px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
								placeholder="Movie Genre"
								required
							>
								<option value="all">-- Choose City --</option>
								<option value="Action">Action</option>
								<option value="Commedy">Commedy</option>
								<option value="Sci-Fi">Sci-Fi</option>
								<option value="Drama">Drama</option>
								<option value="Romantic">Romantic</option>
							</select>
						</div>
					</div>
				</div>
				<div class="flex-wrap">
					<h1>Hello {{ username }} , welcome back</h1>
					<div class="container mx-auto">
						<div class="flex flex-wrap -mx-4">
							<Restaurant/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import NavBar from "../components/NavBar.vue";
	import Restaurant from "../components/Restaurant.vue";
	export default {
		name: "Dashboard",
		components: {
			NavBar,
			Restaurant,
		},
		data() {
			return {
				username: "",
			};
		},
		mounted() {
			let user = localStorage.getItem("user-info");
			this.username = JSON.parse(user).username;
			if (!user) {
				this.$router.push({ name: "SignIn" });
			}
		},
	};
</script>
