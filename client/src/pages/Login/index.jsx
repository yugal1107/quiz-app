import React from "react";

function Login() {
  return (
    <>
      <div class="flex justify-center items-center h-screen">
        <div class="w-96 p-8 bg-gray-100 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div class="mb-4">
              <label for="username" class="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                class="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div class="mb-6">
              <label for="password" class="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full border rounded-md px-3 py-2"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white font-bold py-2 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
        <div class="w-96 p-8 bg-gray-100 rounded-lg shadow-lg ml-8">
          <h2 class="text-2xl font-bold mb-4">Register</h2>
          <form>
            <div class="mb-4">
              <label for="newUsername" class="block text-gray-700">
                New Username
              </label>
              <input
                type="text"
                id="newUsername"
                name="newUsername"
                class="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div class="mb-6">
              <label for="newPassword" class="block text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                class="w-full border rounded-md px-3 py-2"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-green-500 text-white font-bold py-2 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;