<script setup lang="ts">
const formValue = reactive({
  email: '',
  password: '',
});

const formSubmitHandle = () => {
  console.log(toRaw(formValue));
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <form class="form-control w-80" @submit.prevent="formSubmitHandle">
      <h1 class="text-3xl font-semibold">Login</h1>
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
        id="password"
        type="password"
        v-model="formValue.password"
      />
      <button class="btn mt-3">Login</button>
    </form>
  </div>
</template>
