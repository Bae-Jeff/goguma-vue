<script setup>
import {onMounted, ref} from 'vue';
import RowJob from "@/components/Article/job/RowJob.vue";
import {JobsService} from "@/service/JobsService.js";
import MplayerBox from "@/components/Mplayer/MplayerBox.vue";
const jobData = ref(null);
const JobsFetcher = new JobsService();

onMounted(() => {
  JobsFetcher.getNewJobs().then((data) => (jobData.value = data));
});

</script>

<template>
  <div class="grid m-0">
    <div class="col-12 lg:col xl:col p-3 mr-3 bg-white shadow-1 border-round-xs	" id="mainTabsA">
      <div class="text-left border-round-sm h-full font-bold text-sm" >
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
    <div class="hidden xl:block lg:block col-fixed p-0" style="width: 250px">
      <div class="text-center border-round-sm h-full font-bold">
        <MplayerBox></MplayerBox>
      </div>
    </div>
  </div>
</template>

<style scoped >
</style>