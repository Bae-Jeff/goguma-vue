<script setup>

</script>

<template>
  <Card style="overflow: hidden" id="box_player" >
    <template #header>
      <img alt="user header" class="w-full" src="https://i.ytimg.com/vi/F0B7HDiY-10/default.jpg" />
    </template>
    <template #content>Advanced Card</template>
    <template #footer>
      <div class="grid align-items-center ">
        <div class="col-fixed">
          <span class="text-xs">00:00</span>
        </div>
        <div class="col">
          <ProgressBar :value="50"  style="height: 10px">&nbsp;</ProgressBar>
        </div>
      </div>
      <div class="grid">
        <div class="col-3	" >
          <Button icon="pi pi-caret-right" class="bg-gray-50 text-color"></Button>
        </div>
        <div class="col-3	">
          <Button icon="pi pi-video" class="bg-gray-50 text-color"></Button>
        </div>
        <div class="col-3	">
          <Button icon="pi pi-video" class="bg-gray-50 text-color"></Button>
        </div>
        <div class="col-3	" >
          <Button icon="pi pi-list" class="bg-gray-50 text-color"></Button>
        </div>
      </div>
    </template>
  </Card>
</template>

<style>
#box_player .p-card-body {
  padding-top: 4px;
}
</style>