<template>
  <q-spinner class="spinner row  justify-center items-start content-center" color="primary" size="3em" :thickness="10" v-if="loading" />
  <div class="cards" v-else>
    <!-- <p class="text-h4" style="text-align: center;">Subscribers </p> -->
    <q-card v-for="subs in sub" :key="subs" class="my-card-subs">
      <q-card-section>
        <p class="text-h6" style="color: black;">{{ subs.email }}</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import getSubscriber from "../composables/getSubscriber.js";
export default {
  setup() {
    const { sub, loading } = getSubscriber();
    return { sub, loading };
  },
};
</script>

<style lang="scss" scoped>
.my-card-subs {
  width: 300px;
  margin: 10px;
  padding: 20px;
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  //   max-width: 1100px;
}
.spinner{
    margin: 18% auto;
}
</style>
