<template>
  <div :style="isDarkBg" style="height: 350px">
    <q-splitter v-model="splitterModel">
      <template  v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab

            name="blockchaintools"
            icon="las la-tools"
            label="Blockchain tools"
          />
          <q-tab
            name="proglang"
            icon="las la-laptop-code"
            label="Programming Languages"
          />
          <q-tab
            name="cloudplatform"
            icon="las la-cloud"
            label="Cloud platforms"
          />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"

        >
          <q-tab-panel :style="isDarkBg" name="blockchaintools">
            <div class="text-h4 q-mb-md">
              <div class="bdc-subtitle">
                <h3>Blockchain tools</h3>
                <div class="dash"></div>
              </div>
            </div>

            <div class="card">
              <q-card class="my-card-bct">
                <q-card-section class="qcard">
                  <img src="../assets/download.png" alt="" />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section>
                  <img src="../assets/blockchains/ethereum.svg" alt="" />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section>
                  <img
                    src="../assets/blockchains/hyperledger_fabric.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section>
                  <img src="../assets/blockchains/graphene-logo.svg" alt="" />
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel :style="isDarkBg" name="proglang">
            <div class="text-h4 q-mb-md">
              <div class="bdc-subtitle">
                <h3>Programming Languages</h3>
                <div class="dash"></div>
              </div>
            </div>

            <div class="card">
              <q-card class="my-card-bct">
                <q-card-section>
                  <img src="../assets/blockchains/c-plus-plus.svg" alt="" />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section>
                  <img src="../assets/blockchains/java-logo.svg" alt="" />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section>
                  <img
                    src="../assets/blockchains/go-logo-blue-small.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>
              <q-card class="my-card-bct">
                <q-card-section>
                  <img
                    src="../assets/blockchains/node-js-logo-small.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>
              <q-card class="my-card-bct">
                <q-card-section>
                  <img src="../assets/blockchains/c-sharp-logo.svg" alt="" />
                </q-card-section>
              </q-card>
              <q-card class="my-card-bct">
                <q-card-section>
                  <img src="../assets/blockchains/python_1.svg" alt="" />
                </q-card-section>
              </q-card>
              <q-card class="my-card-bct">
                <q-card-section>
                  <img
                    src="../assets/blockchains/javascript-logo-unofficial.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel :style="isDarkBg" name="cloudplatform">
            <div class="text-h4 q-mb-md">
              <div class="bdc-subtitle">
                <h3>Cloud Platforms</h3>
                <div class="dash"></div>
              </div>
            </div>

            <div class="card">
              <q-card class="my-card-bct">
                <q-card-section>
                  <img
                    src="../assets/blockchains/amazon-managed-blockchain-logo.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section>
                  <img
                    src="../assets/blockchains/google-cloud-platform-logo.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section>
                  <img
                    src="../assets/blockchains/oracle-blockchain-logo.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>

              <q-card class="my-card-bct">
                <q-card-section>
                  <img
                    src="../assets/blockchains/ibm-blockchain-logo.svg"
                    alt=""
                  />
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>

  <!-- mobile version tab panel -->
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const $store = useStore();
    // console.log($store.state.darkText)
    const isDarkText = computed({
      get: () => $store.state.darkText,
    });
    const isDarkBg = computed({
      get: () => $store.state.darkBG,
    });
    return {
      tab: ref("blockchaintools"),
      splitterModel: ref(20),
      isDarkBg,
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
}

.my-card-bct {
  margin: 10px;
  width: 300px !important;
  img {
    width: 50px;
  }
}
</style>
