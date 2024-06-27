<script setup>

import SubMenu from "@/components/common/SubMenu.vue";
</script>

<template>
  <div id="main_wrap" class="mx-auto align-items-center">
    <header class="mx-3" id="header">
      <Header></Header>
    </header>
    <main class="mx-3" id="contents">
      <SubMenu></SubMenu>
      <router-view></router-view>
    </main>
    <footer class="mx-3" id="footer">
      <Footer></Footer>
    </footer>
  </div>

</template>

<style>
body {
  background: #f8fafc;
}
</style>
