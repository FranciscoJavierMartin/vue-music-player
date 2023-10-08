<template>
  <div
    v-if="loginShowAlert"
    class="text-white text-center font-bold p-4 rounded mb-4"
    :class="loginAlertVariant"
  >
    {{ loginAlertMsg }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      :disabled="loginInSubmission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loginInSubmission = ref<boolean>(false);
const loginShowAlert = ref<boolean>(false);
const loginAlertVariant = ref<string>('bg-blue-500');
const loginAlertMsg = ref<string>('Please wait! Your account is being created');

const loginSchema = {
  email: 'required|email',
  password: 'required|min:3|max:100',
};

function login(values: any): void {
  loginShowAlert.value = true;
  loginInSubmission.value = true;
  loginAlertVariant.value = 'bg-blue-500';
  loginAlertMsg.value = 'Please wait! We are logging you in.';

  loginAlertVariant.value = 'bg-green-500';
  loginAlertMsg.value = 'Success! Your are now logged in.';
}
</script>
