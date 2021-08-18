<template>
  <!-- mobile version tab panel -->
  <div class="tabpanel">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="tabPanel"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="blockchain" no-caps label="Blockchain Tools" />
          <q-tab name="programming" label="Programming Language" />
          <q-tab name="cloud" label="Cloud Platforms" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tabPanel" animated>
          <q-tab-panel name="blockchain">
           <div class="text-h4 q-mb-md">
              <div class="bdc-subtitle">
                <h3>Blockchain tools</h3>
                <div class="dash"></div>
              </div>
            </div>

            <div class="card">
              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img src="../assets/blockchains/ethereum.svg" alt="" />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img
                    src="../assets/blockchains/hyperledger_fabric.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img src="../assets/blockchains/graphene-logo.svg" alt="" />
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="programming">

               <div class="text-h4 q-mb-md">
              <div class="bdc-subtitle">
                <h3>
                  Programming Languages
                </h3>
                <div class="dash"></div>
              </div>
            </div>

            <div class="card">
              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img src="../assets/blockchains/c-plus-plus.svg" alt="" />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img src="../assets/blockchains/java-logo.svg" alt="" />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img
                    src="../assets/blockchains/go-logo-blue-small.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>
              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img
                    src="../assets/blockchains/node-js-logo-small.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>
              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img src="../assets/blockchains/c-sharp-logo.svg" alt="" />
                </q-card-section>
              </q-card>
              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img src="../assets/blockchains/python_1.svg" alt="" />
                </q-card-section>
              </q-card>
              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img
                    src="../assets/blockchains/javascript-logo-unofficial.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>
            </div>

          </q-tab-panel>

          <q-tab-panel name="cloud">
            <div class="text-h4 q-mb-md">
              <div class="bdc-subtitle">
                <h3>
                  Cloud Platforms
                </h3>
                <div class="dash"></div>
              </div>
            </div>

            <div class="card">
              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img
                    src="../assets/blockchains/amazon-managed-blockchain-logo.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img
                    src="../assets/blockchains/google-cloud-platform-logo.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img
                    src="../assets/blockchains/oracle-blockchain-logo.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img
                    src="../assets/blockchains/ibm-blockchain-logo.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
  <!-- mobile version tab panel -->
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tabPanel: ref("blockchain"),
      splitterModel: ref(20),
    };
  },
};
</script>

<style lang="scss" scoped>
.bdc-subtitle {
  margin-bottom: 50px;
  h3 {
    font-size: 20px;
  }
}

.dash {
  border: 3px solid orange;
  width: 100px;
  margin-bottom: 10px;
}

.card {
  display: flex;
  width: 300px !important;
  flex-direction: column;
}

.my-card-bct {
  margin: 10px;
  width: 300px !important;
  height: 200px !important;
  img {
    width: 150px;
    overflow: hidden;
  }
}

.qcard {
    display: flex;
    justify-content: center;
}

</style>