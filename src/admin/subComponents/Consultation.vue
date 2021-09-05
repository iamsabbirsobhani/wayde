<template>
  <q-spinner class="spinner row  justify-center items-start content-center" color="primary" size="3em" :thickness="10" v-if="loading" />
  <div class="cards" v-else>
    <q-card
      v-for="data in consultation"
      :key="data"
      bordered
      class="bg-white text-black my-card-subs"
    >
      <q-card-section>
        <div class="text-h6">{{ data.fullName }}</div>
      </q-card-section>

      <q-separator inset />
      <p>
        Company: <span>{{ data.company }}</span>
      </p>
      <p>
        Work Email: <span>{{ data.workEmail }}</span>
      </p>
      <p>
        Work Phone: <span>{{ data.workPhone }}</span>
      </p>
      <p>Discuss: <span v-html="data.quillEditor"></span></p>
      <q-card-section> </q-card-section>
    </q-card>
  </div>
</template>

<script>
import getConsultations from "../composables/getConsultations.js";
export default {
  setup() {
    const { consultation, loading } = getConsultations();

    return { consultation, loading };
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
  flex-wrap: wrap;
  //   max-width: 1100px;
}
.spinner{
    margin: 18% auto;
}
</style>
