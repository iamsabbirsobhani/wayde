<template>
  <div class="parent-card">
    <q-card class="card">
      <q-card-section class="my-card">
        <div class="lottie">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_bp1bwvhv.json"
            background="transparent"
            speed="0.5"
            :style="lottieStyle"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="q-pa-md contacts" style="max-width: 400px">
          <h3>Our contact details</h3>
          <p><i class="las la-phone-volume"></i> +12345678910</p>
          <p><i class="las la-envelope"></i> hello@wayde.com</p>
        </div>
      </q-card-section>
    </q-card>
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
  margin-top: 350px;
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
