<template>
  <q-spinner class="spinner row  justify-center items-start content-center" color="primary" size="3em" :thickness="10" v-if="loading" />

    <div v-else>
        <p class="text-h4" style="text-align: center; color: black;">Page Visited </p>
        <div v-for="vist in vis" :key="vist" class="row  justify-center items-start content-center">
            <q-chip  class="chip" size="50px"  color="deep-orange" text-color="white"  icon="people">{{vist.visitors}} times</q-chip>
        </div>
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
.spinner{
    margin: 18% auto;
}
</style>