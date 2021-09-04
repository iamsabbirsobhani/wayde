<template>
  <div id="contactUs" class="parent-card">
    <!-- <div class="lottie"> -->

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card :style="isDarkBg" class="my-card"  bordered>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_bp1bwvhv.json"
          background="transparent"
          speed="0.5"
          :style="lottieStyle"
          loop
          autoplay
        ></lottie-player>

        <q-card-section>
          <div class="text-overline text-orange-9">Contact Us</div>
          <div class="text-h5 q-mt-sm q-mb-xs">
            Get an appointment for Meeting on our corporate Office space  at
            Kochi, India.
          </div>
          <div style="margin-top: 20px">
            <h6 class="text-light-green-14">Wayde LLP</h6>
            <address>
              <br />
              7th Floor, Centre A <br />
              Alapatt Heritage Building <br />
              MG Road North End, Ernakulam-682035 <br />
              Cochin <br />
              <br />
              <p href="tel:+91-0484-4148299">
                <i class="las la-phone-volume"></i>+91 484 4148299
              </p>
              <p><i class="las la-envelope"></i> contact@wayde.in</p>
            </address>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
export default {
  setup() {
    const windWidth = ref(null);
    const lottieStyle = ref(null);
    onMounted(() => {
      windWidth.value = window.innerWidth;
      if (windWidth.value > 600) {
        lottieStyle.value = {
          width: 400,
          height: 400,
        };
      } else if (600 > windWidth.value) {
        lottieStyle.value = {
          width: 300,
          height: 300,
        };
      }
    });
    const $store = useStore();
    // console.log($store.state.darkText)
    const isDarkText = computed({
      get: () => $store.state.darkText,
    });
    const isDarkBg = computed({
      get: () => $store.state.darkBG,
    });
    return { lottieStyle, isDarkBg, isDarkText };
  },
};
</script>

<style lang="scss" scoped>
.parent-card {
  max-width: 1150px;
  margin: auto;
  margin-top: 200px;
}
.my-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all .24s;
}
.my-card:hover {
  transform: scale(1.0001);
  box-shadow: 0 3px 15px -2px;
}
.contacts {
  h3 {
    font-size: 25px;
    font-weight: 500;
  }
  p {
    color: #005eb8;
    margin-left: 20px;
  }
  i {
    color: black;
  }
}
.lottie {
  max-width: 400px;
}

@media (max-width: 768px) {
  .my-card {
    flex-direction: column;
  }
  .parent-card {
    max-width: 600px;
    margin: auto;
    margin-top: 350px;
  }
}
@media (max-width: 500px) {
  .my-card {
    flex-direction: column;
  }
  .parent-card {
    max-width: 350px;
    margin: auto;
    margin-top: 250px;
  }
}
</style>
