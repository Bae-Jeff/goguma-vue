<script setup>
  import { ref } from "vue";

  const home = ref({
    icon: 'pi pi-home'
  });
  const subItems = ref([
    { label: 'Electronics',to:'/' },
    { label: 'Computer',to:'/comunity' },
    { label: 'Accessories',to:'/comunity' },
    { label: 'Keyboard',to:'/comunity' },
    { label: 'Wireless',to:'/comunity' }
  ]);
</script>

<template>
  <div >
    <Breadcrumb :home="home" :model="subItems" class="text-sm mt-1 mb-2" />
  </div>
</template>

<style scoped lang="scss">

</style>