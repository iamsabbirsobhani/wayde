<template>
  <q-spinner
    class="spinner row justify-center items-start content-center"
    color="primary"
    size="3em"
    :thickness="10"
    v-if="loading"
  />
  <div class="cards" v-else>
    <!-- <q-card
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
    </q-card> -->

    <div v-for="data in formatedConsultation" :key="data">
      <div v-if="data.done">
        <q-card class="my-card-subs" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline text-black">{{ data.fullName }}</div>
              <div class="text-h5 q-mt-sm q-mb-xs text-black">Discuss</div>
              <div
                class="text-caption text-grey"
                v-html="data.quillEditor"
              ></div>
            </q-card-section>

            <q-card-section class="col-5 text-black">
              <!-- <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          /> -->
              <p class="text-light-blue-13">
                Company: <span class="text-black">{{ data.company }}</span>
              </p>
              <p class="text-light-blue-13">
                Work Email: <span class="text-black">{{ data.workEmail }}</span>
              </p>
              <p class="text-light-blue-13">
                Work Phone: <span class="text-black">{{ data.workPhone }}</span>
              </p>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" class="text-black" />
            <q-btn flat class="text-black"> {{ data.createdAt }} </q-btn>
            <q-btn
              flat
              color="red"
              label="Undone"
              icon-right="close"
              @click="undoneDisc(data.id)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import getConsultations from "../composables/getConsultations.js";
import { doneDiscussion } from "../composables/doneDiscussion.js";
import { format } from "date-fns";
import { computed, ref } from "vue";
export default {
  setup() {
    const { consultation, loading } = getConsultations();

    const formatedConsultation = computed(() => {
      // if (consultation.value) {
      return consultation.value.map((doc) => {
        let time = format(doc.createdAt.toDate(), "PPp");
        return { ...doc, createdAt: time };
      });
      // }
      // return 0;
    });

    const undoneDisc = async (docId) => {
      console.log(docId);
      await doneDiscussion(docId);
    };

    return { formatedConsultation, loading, undoneDisc };
  },
};
</script>

<style lang="scss" scoped>
.my-card-subs {
  // width: 300px;
  margin: 10px;
  padding: 20px;
}
.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  //   max-width: 1100px;
}
.spinner {
  margin: 18% auto;
}
</style>
