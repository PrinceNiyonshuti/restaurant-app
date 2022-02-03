<!-- @format -->

<template>
	<div className="flex items-center min-h-screen bg-gray-50">
		<div
			className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl"
		>
			<div className="flex flex-col md:flex-row">
				<div className="h-32 md:h-auto md:w-1/2">
					<img
						className="object-cover w-full h-full"
						src="../assets/bg.jpg"
						alt="Movie App Background"
					/>
				</div>
				<div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
					<div className="w-full">
						<div className="flex justify-center">
							<img
								className="object-cover w-1/4 h-1/4"
								src="../assets/logo.png"
								alt="Movie App Logo"
							/>
						</div>
						<h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
							Create your account
						</h1>
						<form onSubmit="{handleForm}" ref="{registerForm}">
							<div>
								<label className="block text-sm">Email</label>
								<input
									type="email"
									id="email"
									ref="{emailRef}"
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder="Enter your E-mail"
									required
								/>
							</div>
							<div>
								<label className="block mt-4 text-sm">Password</label>
								<input
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder=" **************** "
									type="password"
									id="password"
									ref="{passwordRef}"
									required
								/>
							</div>
							<div>
								<label className="block mt-4 text-sm">Confirm Password</label>
								<input
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder=" **************** "
									type="password"
									id="passwordConfirm"
									ref="{passwordConfirmRef}"
									required
								/>
							</div>
							<button
								className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
							>
								Register
							</button>
						</form>
						<p className="mt-4">
							have an account ? &nbsp;
							<a href="/" className=" text-blue-600 hover:underline">
								Login
							</a>
						</p>

						<hr className="my-8" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "SignUp",
	};
</script>
