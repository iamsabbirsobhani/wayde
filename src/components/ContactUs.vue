<template>
  <div id="contactUs" class="parent-card">
    <!-- <div class="lottie"> -->

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered>
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
            Get an appointment for Meeting on our Corporate office space at
            Kochi, The queen of arabian sea
          </div>
          <div style="margin-top: 20px;">
            <h6 class="text-light-green-14">Wayde LLP</h6>
            <address>
              <br>
              USA 7th Floor, Centre A <br />
              Alapatt Heritage Building <br />
              MG Road North End, Ernakulam-682035 <br />
              Cochin <br/>
               <br/>
              <p href="tel:+91-0484-4148299"><i class="las la-phone-volume"></i>+91 0484-4148299</p>
              <p><i class="las la-envelope"></i> helpdesk@wayde.in</p>
            </address>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
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

    return { lottieStyle };
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
