<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>

<template>
	<div class="main-content">
		<div v-if="user">
      <Layout>
        <Content> </Content>
      </Layout>
    </div>
    <div v-else class="untuklogin">
      <div class="kotak-login">
			<h2 align="center">Mari kita achieve tahun ini ....</h2>
			<p align="center">
        <LoginButton
          v-if="auth0client"
          :client="auth0client"
          @login-complete="getUser()"
        />
      </p>
      </div>
		</div>
	</div>
</template>

<script>
import auth from "../../auth";
export default {
  data() {
    return {
      auth0client: null,
      user: null,
    };
  },
  async mounted() {
    this.auth0client = await auth.createClient();
    this.user = await this.auth0client.getUser();
  },
  methods: {
    async login() {
      await auth.loginWithPopup(this.auth0client);
    },
    async getUser() {
      this.user = await this.auth0client.getUser();
    },
  },
};
</script>