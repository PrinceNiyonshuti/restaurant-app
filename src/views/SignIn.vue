<!-- @format -->

<template>
	<div class="flex items-center min-h-screen bg-gray-50">
		<div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
			<div class="flex flex-col md:flex-row">
				<div class="h-32 md:h-auto md:w-1/2">
					<img
						class="object-cover w-full h-full"
						src="../assets/bg.jpg"
						alt="Movie App Background"
					/>
				</div>
				<div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
					<div class="w-full">
						<div class="flex justify-center">
							<img
								class="object-cover w-1/4 h-1/4"
								src="../assets/icon.jpg"
								alt="Movie App Logo"
							/>
						</div>
						<h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
							Login
						</h1>
						<div>
							<label class="block text-sm">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								v-model="email"
								class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
								placeholder="Enter your E-mail"
								required
							/>
						</div>
						<div>
							<label class="block mt-4 text-sm">Password</label>
							<input
								class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
								placeholder=" **************** "
								type="password"
								id="password"
								name="password"
								v-model="password"
								required
							/>
						</div>
						<button
							@click="login"
							class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
						>
							Log in
						</button>
						<p class="mt-4">
							Need an account ? &nbsp;
							<router-link to="/register" class="text-blue-600 hover:underline">
								Register
							</router-link>
						</p>
						<hr class="my-8" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	import Swal from "sweetalert2";
	export default {
		name: "SignIn",
		mounted() {
			let user = localStorage.getItem("user-info");
			if (user) {
				this.$router.push({ name: "Dashboard" });
			}
		},
		data() {
			return {
				email: "",
				password: "",
			};
		},
		methods: {
			async login() {
				let result = await axios.get(
					`http://localhost:3000/users?email=${this.email}&password=${this.password}`
				);
				console.log(result);
				if (result.status === 200 && result.data.length > 0) {
					Swal.fire({
						title: "Logged In",
						icon: "success",
						timer: 2000,
						showConfirmButton: false,
					});
					localStorage.setItem("user-info", JSON.stringify(result.data[0]));
					this.$router.push({ name: "Dashboard" });
				} else {
					Swal.fire({
						title: "Invalid Credentials",
						text: ``,
						icon: "error",
						timer: 2000,
						showConfirmButton: false,
					});
				}
			},
		},
	};
</script>
