<template>
  <q-spinner
    class="spinner row justify-center items-start content-center"
    color="primary"
    size="3em"
    :thickness="10"
    v-if="loading"
  />

  <div v-else>
    <!-- <div

      class="row justify-center items-start content-center"
    >

    </div> -->

    <q-card v-for="vist in vis" :key="vist" class="my-card" flat bordered>
      <q-img src="https://images.unsplash.com/photo-1579463870606-64fcb6423feb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />

      <q-card-section>
        <div class="text-overline text-orange-9">Wayde.in</div>
        <div class="text-h5 q-mt-sm q-mb-xs text-black">Page Visited</div>
        <div class="text-caption text-grey">
          <q-chip
            class="chip"
            size="35px"
            color="deep-orange"
            text-color="white"
            icon="people"
            >{{ vist.visitors }} times</q-chip
          >
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import getPageVisitors from "../composables/getPageVisitors.js";
export default {
  setup() {
    const { vis, loading } = getPageVisitors();
    return { vis, loading };
  },
};
</script>

<style lang="scss" scoped>
.spinner {
  margin: 18% auto;
}
.my-card{
  width: 400px;
  margin: 30px auto;
}

@media (max-width: 500px) {
  .my-card{
    width: 300px;
    margin: 30px auto;
  }
}
</style>
