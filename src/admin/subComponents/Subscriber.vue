<template>
  <q-spinner
    class="spinner row justify-center items-start content-center"
    color="primary"
    size="3em"
    :thickness="10"
    v-if="loading"
  />
  <div class="cards" v-else>
    <!-- <p class="text-h4" style="text-align: center;">Subscribers </p> -->
    <!-- <q-card v-for="subs in sub" :key="subs" class="my-card-subs">
      <q-card-section>
        <p class="text-h6" style="color: black;">{{ subs.email }}</p>
      </q-card-section>
    </q-card> -->

    <!-- class="my-card" -->
    <div v-for="subs in formatedSubs" :key="subs">
      <q-card class="my-card-subs" flat bordered>
        <!-- <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" /> -->

        <q-card-section>
          <div class="text-overline text-orange-9">Subscriber</div>
          <div class="text-h5 q-mt-sm q-mb-xs text-black">{{ subs.email }}</div>
          <div class="q-mt-sm q-mb-xs text-grey">{{ subs.createdAt }}</div>
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            color="positive"
            label="Enlisted"
            v-if="subs.done"
            @click="doneDisc(subs.id)"
          />
          <q-btn
            v-else
            flat
            color="primary"
            label="Enlist"
            @click="doneDisc(subs.id)"
          />
        </q-card-actions>
        <q-space />
      </q-card>
    </div>
  </div>
</template>

<script>
import getSubscriber from "../composables/getSubscriber.js";
import { subscribers } from "../composables/enlistSubscriber.js";
import { format } from "date-fns";
import { computed, ref } from "vue";

export default {
  setup() {
    const { sub, loading } = getSubscriber();

    const formatedSubs = computed(() => {
      // if (consultation.value) {
      return sub.value.map((doc) => {
        let time = format(doc.createdAt.toDate(), "PPp");
        return { ...doc, createdAt: time };
      });
      // }
      // return 0;
    });

    const doneDisc = async (docId) => {
      console.log(docId);
      await subscribers(docId);
    };
    return { formatedSubs, loading, doneDisc };
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
.spinner {
  margin: 18% auto;
}
</style>
