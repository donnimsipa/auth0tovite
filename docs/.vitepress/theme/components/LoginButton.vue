<template>
  <div>
    <button @click="login()">Log in Now</button>
  </div>
</template>

<script lang="ts" allowJs="true">
// @ts-nocheck
import auth from "../../auth";
export default {
  props: ["client"],
  methods: {
    async login() {
      await auth.loginWithPopup(this.client);
      this.$emit("login-complete");
    },
  },
};
</script>