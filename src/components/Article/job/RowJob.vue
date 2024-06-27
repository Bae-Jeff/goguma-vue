<template>
  <div class="article">
    <div class="title">{{jobData.occupation}} | {{jobData.title }}</div>
    <div class="meta">
      <span class="company">{{jobData.company }}</span>
      <span class="type">{{jobData.type }}</span>
    </div>
    <div class="content">
<!--      <p>{{ validatedjobData.content }}</p> 유효성 검사시-->
      <p>{{jobData.content }}</p>
      <p><strong>Position:</strong> {{jobData.position }}</p>  <!--직위-->
      <p><strong>Department:</strong> {{jobData.department }}</p> <!-- 부서-->
      <p><strong>Specialties:</strong> {{jobData.specialties }}</p> <!-- 분야-->
      <p><strong>Location:</strong> {{jobData.location }}</p> <!-- 주소-->
      <p><strong>Experience:</strong> {{jobData.experience }}</p><!-- 경력-->
      <p><strong>Education:</strong> {{jobData.education }}</p><!--학력-->
      <p><strong>Salary:</strong> {{jobData.salary }}</p> <!--연봉-->
      <p><strong>Deadline:</strong> {{jobData.deadline }}</p><!--마감시간-->
      <p><strong>Posted:</strong> {{jobData.posted }}</p><!---->
    </div>
  </div>
</template>

<script setup>
// import {ref} from "vue";
const props = defineProps({
  jobData: Object
});

// // 유효성 검사 함수 예시
// const validatejobData = (jobData) => {
//   // 예시: 필수 속성 검사
//   if (!jobData.title) {
//     console.error('Title is required.');
//     return null;
//   }
//
//   // 예시: 경력 경력을 허용하는지 검사
//   if (jobData.experience !== '경력' && jobData.experience !== '신입') {
//     console.error('Invalid experience type.');
//     return null;
//   }
//
//   // 예시: 위치가 한국 내에 있는지 검사
//   if (!jobData.location.includes('한국')) {
//     console.warn('This position is not located in Korea.');
//   }
//
//   return jobData;
// };
//
// const validatedjobData = ref(validatejobData(props.jobData));
//
// console.log(validatedjobData.value); // 유효성 검사된 jobData 객체
console.log(props.jobData);
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
