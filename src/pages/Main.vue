<script setup>
import {onMounted, ref} from 'vue';
import RowJob from "@/components/Article/jobs/RowJob.vue";
import {JobsService} from "@/service/JobsService.js";
const jobData = ref(null);
const JobsFetcher = new JobsService();

onMounted(() => {
  JobsFetcher.getNewJobs().then((data) => (jobData.value = data));
});

</script>

<template>
  <div class="grid nested-grid">
    <div class="col-9">
      <div class="text-left border-round-sm h-full font-bold border-1 px-3 text-sm">
        <TabView class="p-0">
          <TabPanel header="구인" >
            <RowJob
                v-for="job in jobData" :jobData="job"
            ></RowJob>
          </TabPanel>
          <TabPanel header="구직">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
        </TabView>
      </div>
    </div>
    <div class="col-3">
      <div class="text-center border-round-sm h-full font-bold border-1">
        ㅇㄴㄹ
      </div>
    </div>
  </div>
</template>

<style scoped >
</style>