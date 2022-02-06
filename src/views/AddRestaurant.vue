<!-- @format -->

<template>
	<div class="h-screen bg-gray-100">
		<NavBar />
		<div class="flex items-center justify-center bg-gray-100">
			<div
				class="bg-white py-6 mt-4 shadow-lg flex items-center justify-center p-6 sm:p-12 md:w-1/2"
			>
				<div class="w-full">
					<div class="flex justify-center">
						<h3 class="text-2xl font-bold text-center">
							New Restaurant Details
						</h3>
					</div>
					<div>
						<label class="block font-medium">Photo</label>
						<input
							type="text"
							class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
							placeholder="Restaurant Photo"
							v-model="photo"
							required
						/>
					</div>
					<div>
						<label class="block font-medium">Restaurant Name</label>
						<input
							type="text"
							class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
							placeholder="Restaurant Name"
							v-model="name"
							required
						/>
					</div>
					<div>
						<label class="block mt-2 font-medium">Stars</label>
						<select
							class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
							v-model="stars"
							required
						>
							<option value="0">-- Choose Stars --</option>
							<option value="1">1 Star</option>
							<option value="2">2 Stars</option>
							<option value="3">3 Stars</option>
							<option value="4">4 Stars</option>
							<option value="5">5 Stars</option>
						</select>
					</div>
					<div>
						<label class="block font-medium">Price Range</label>
						<input
							type="text"
							class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
							placeholder="Restaurant Price Range"
							v-model="price_range"
							required
						/>
					</div>
					<div>
						<label class="block font-medium">Telephone</label>
						<input
							type="text"
							class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
							placeholder="Restaurant Telephone"
							v-model="tel"
							required
						/>
					</div>
					<div>
						<label class="block mt-2 font-medium"> Location </label>
						<select
							class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
							placeholder="Restaurant Location"
							v-model="location"
							required
						>
							<option value="0">-- Choose Location --</option>
							<option value="Kigali">Kigali City</option>
							<option value="Nyarugenge">Nyarugenge</option>
							<option value="Kicukiro">Kicukiro</option>
							<option value="Gasabo">Gasabo</option>
							<option value="Nyanza">Nyanza</option>
						</select>
					</div>
					<div>
						<label class="block mt-2 font-medium">Description</label>
						<textarea
							class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
							placeholder="Restaurant Descriptions"
							rows="5"
							v-model="description"
							required
						/>
					</div>
					<button
						@click="newRestaurant"
						class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
					>
						Add Restaurant
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	import NavBar from "../components/NavBar.vue";
	import Swal from "sweetalert2";
	export default {
		name: "AddRestaurant",
		components: {
			NavBar,
		},
		data() {
			return {
				photo: "",
				name: "",
				description: "",
				location: "",
				price_range: "",
				tel: "",
				stars: "",
			};
		},
		methods: {
			async newRestaurant() {
				let result = await axios.post("http://localhost:3000/restaurants", {
					photo: this.photo,
					name: this.name,
					description: this.description,
					location: this.location,
					price_range: this.price_range,
					tel: this.tel,
					stars: this.stars,
				});
				console.log(result);
				if (result.status === 201) {
					Swal.fire({
						title: "Created",
						icon: "success",
						timer: 2000,
						showConfirmButton: false,
					});
					this.$router.push({ name: "Dashboard" });
				} else {
					Swal.fire({
						title: "Failed To Create Restaurant",
						text: ``,
						icon: "info",
						timer: 2000,
						showConfirmButton: false,
					});
				}
			},
		},
	};
</script>
