<script setup lang="ts">
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from '@firebase/auth';
import { useFirebaseAuth } from 'vuefire';

const formValue = reactive({
  email: '',
  password: '',
  confirmPassword: '',
});

const formSubmitHandle = async () => {
  const auth = useFirebaseAuth();

  const userCredential =
    auth &&
    (await createUserWithEmailAndPassword(
      auth,
      formValue.email,
      formValue.password
    ));

  userCredential && (await sendEmailVerification(userCredential.user));
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <form class="form-control w-80" @submit.prevent="formSubmitHandle">
      <h1 class="text-3xl font-semibold">Register</h1>
      <label class="label" for="username">
        <span class="label-text">Email:</span>
      </label>
      <input
        class="input border border-black w-full"
        id="email"
        type="email"
        v-model="formValue.email"
      />
      <label class="label">
        <span class="label-text">Password</span>
      </label>
      <input
        class="input border border-black w-full"
        id="confirmPassword"
        type="password"
        v-model="formValue.password"
      />
      <label class="label">
        <span class="label-text">Confirm password:</span>
      </label>
      <input
        class="input border border-black w-full"
        id="password"
        type="password"
        v-model="formValue.confirmPassword"
      />
      <button class="btn mt-3">Register</button>
    </form>
  </div>
</template>
