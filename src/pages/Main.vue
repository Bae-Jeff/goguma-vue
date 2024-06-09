<script setup>

</script>

<template>
  <div class="grid nested-grid">
    <div class="col-9">
      <div class="text-left border-round-sm h-full font-bold border-1 px-3 text-sm">
        <TabView class="p-0">
          <TabPanel header="구인" >
            <Card class="no-padding-card">
              <template #title>[생산직] 주 6일 월 3일 휴식</template>
              <template #subtitle>Sub Title</template>
              <template #content>
                <p class="m-0">
                  가나다 회사에서 43세이하의 나/녀 직원 모집합니다. 원하시는 분은 연락주시기 바랍니다.
                </p>
              </template>
              <template #footer>Footer</template>
            </Card>
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
.p-card .p-card-body {
  padding: 0px !important;
}

.no-padding-card .p-card .p-card-body {
  padding: 0px !important;
}
</style>