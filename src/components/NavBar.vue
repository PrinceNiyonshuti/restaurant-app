<!-- @format -->

<template>
	<nav className="bg-gray-800">
		<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div className="relative flex items-center justify-between h-16">
				<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<button
						type="button"
						className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
					</button>
				</div>
				<div
					className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
				>
					<div className="flex-shrink-0 flex items-center">
						<router-link to="/Dashboard">
							<img
								className="block lg:hidden h-8 w-auto"
								src="../assets/icon.jpg"
								alt="Movie App"
							/>
							<img
								className="hidden lg:block h-8 w-auto"
								src="../assets/icon.jpg"
								alt="Movie App"
							/>
						</router-link>
					</div>
					<div className="hidden sm:block sm:ml-6">
						<div className="flex space-x-4">
							<router-link
								to="/Dashboard"
								className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								All Restaurants
							</router-link>
							<router-link
								to="/add"
								className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								Add Restaurants
							</router-link>
							<router-link
								to="/update"
								className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								Orders Restaurants
							</router-link>
							<span
								@click="logOut"
								className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								Log Out
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="sm:hidden" id="mobile-menu">
			<div className="px-2 pt-2 pb-3 space-y-1">
				<router-link
					to="/Dashboard"
					className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
				>
					All Movies
				</router-link>
				<router-link
					to="/Favorite"
					className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				>
					Favorite
				</router-link>
				<router-link
					to="/WatchList"
					className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				>
					Watch List
				</router-link>
			</div>
		</div>
	</nav>
</template>
<script>
	export default {
		name: "NavBar",
		methods: {
			logOut() {
				localStorage.clear();
				this.$router.push({ name: "SignIn" });
			},
		}
	};
</script>
