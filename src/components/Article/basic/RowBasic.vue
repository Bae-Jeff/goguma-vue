<template>
  <div class="article">
    <h1 class="title">{{ title }}</h1>
    <div class="content">
      <p>{{ content }}</p>
    </div>
    <div class="meta">
      <span class="writer">Written by: {{ writer }}</span>
      <span class="view-count">Views: {{ view_count }}</span>
      <span class="status">Status: {{ status }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  view_count: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});
console.log(props)
</script>

<style scoped lang="scss">
.article {
  border-bottom: 1px solid #e7e7e7;
}
.article:last-child {
  border-bottom: 0px;
}
.title {
  font-size: 16px;
  margin-bottom: 8px;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #777;
  margin-bottom: 16px;

  .writer, .view-count, .status {
    margin-right: 16px;
  }
}

.content {
  font-size: 13px;
  line-height: 1.6;
  min-height: 45px;
}
</style>
