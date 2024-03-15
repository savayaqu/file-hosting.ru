<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {getCookie} from "@/CookieUtils";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/authorization">Login</RouterLink>
        <RouterLink to="/registration">Sign Up</RouterLink>
        <RouterLink to="/logout">Logout</RouterLink>
        <RouterLink v-if="getCookie('token')" to="/files">Files</RouterLink>
      </nav>
    </div>
  </header>
<main>
    <RouterView />
</main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
