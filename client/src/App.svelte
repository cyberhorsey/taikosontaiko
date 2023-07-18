<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import { wrap } from "svelte-spa-router/wrap";
  import Navbar from "./components/Navbar.svelte";
  import ViewForAddress from "./pages/ViewForAddress.svelte";

  const routes = {
    "/": wrap({
      component: Home,
      props: {},
    }),
    "/viewForAddress": wrap({
      component: ViewForAddress,
      props: {},
    }),
  };
</script>

<Navbar />

<div
  class="hero min-h-screen"
  style="background-image: url('./bg.gif'); background-repeat: repeat;"
>
  <div class="hero-overlay bg-opacity-60" />
  <div class="hero-content text-center text-neutral-content">
    <Router {routes} />
  </div>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
