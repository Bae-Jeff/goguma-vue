
<template>
  <div class="card mx-auto top-menu-bar pt-3">
    <div class="flex">
      <div class="flex-none flex align-items-center justify-content-start font-bold m-2 ml-0 border-round">
        <p class="top-logo my-1 flex align-items-end flex-wrap">
          <span class="top-logo-image flex align-items-center">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2 " size="large" shape="circle" />
          </span>
          <span class="top-logo-text flex align-items-center">로컬호스트</span>
        </p>
      </div>
      <div class="flex-grow-1 flex align-items-center justify-content-end font-bold m-2 px-5  border-round">
        <Menubar :model="topMenus" class="border-0 top-menus font-semibold " style="color:var(--guma-deep) !important;"/>
      </div>
      <div class="flex-none flex align-items-center justify-content-end font-bold border-round">
        <Button icon="pi pi-user" severity="info" aria-label="User" style="background-color: var(--guma-light); color: #000" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const topMenus = ref([
  {
    label: '처음으로',
    root: true,
    command: () => {
      router.push('/')
    }
  },
  {
    label: '커뮤니티',
    root: true,
    command: () => router.push('/community')
  },
  {
    label: '생활·건강',
    root: true,
  },
  {
    label: '스포츠·제러',
    root: true
  },
  {
    label: '여행·법률',
    root: true
  },
  {
    label: '구인·구직',
    root: true
  }

]);
</script>
