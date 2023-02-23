//@ts-nocheck
import DefaultTheme from "vitepress/theme";
import './donni.css'
// import Layout from "./components/Layout.vue";
import LoginButton from "./components/LoginButton.vue";
import LogoutButton from "./components/LogoutButton.vue";

const Theme = {
  ...DefaultTheme,
  // Layout
  enhanceApp({ app }: { app: any }) {
    app.component("LoginButton", LoginButton);
    app.component("LogoutButton", LogoutButton);
  },
};

export default Theme;