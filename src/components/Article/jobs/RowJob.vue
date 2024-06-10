<template>
  <div class="article">
    <div class="title">{{occupation}} | {{ title }}</div>
    <div class="meta">
      <span class="company">{{ company }}</span>
      <span class="type">{{ type }}</span>
    </div>
    <div class="content">
      <p>{{ content }}</p>
      <p><strong>Position:</strong> {{ position }}</p>  <!--직위-->
      <p><strong>Department:</strong> {{ department }}</p> <!-- 부서-->
      <p><strong>Specialties:</strong> {{ specialties }}</p> <!-- 분야-->
      <p><strong>Location:</strong> {{ location }}</p> <!-- 주소-->
      <p><strong>Experience:</strong> {{ experience }}</p><!-- 경력-->
      <p><strong>Education:</strong> {{ education }}</p><!--학력-->
      <p><strong>Salary:</strong> {{ salary }}</p> <!--연봉-->
      <p><strong>Deadline:</strong> {{ deadline }}</p><!--마감시간-->
      <p><strong>Posted:</strong> {{ posted }}</p><!---->
    </div>
  </div>
</template>

<script setup>
defineProps({
  occupation: String,
  company: String,
  type: String,
  title: String,
  content: String,
  position: String,
  department: String,
  specialties: String,
  location: String,
  experience: String,
  education: String,
  salary: String,
  deadline: String,
  posted: String
});
</script>

<style scoped>
.article {
  border-bottom: 1px solid #ccc;
  margin: 0 auto 16px;
}
.article:last-child {
  border-bottom: 0px ;
}
.title {
  font-size: 18px;
  margin-bottom: 8px;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #777;
  margin-bottom: 16px;
}

.content {
  font-size: 16px;
  line-height: 1.6;
}
.content p {
  font-size: 13px;
}
</style>
