<template>
  <div class="footer" :style="isDarkBg">
    <div class="left">
      <img src="../assets/WayedNavIco.png" alt="" />
      <p :style="isDarkText">
        You don’t want to miss the news on Wayde. Subscribe - we’ll only send
        updates on our launch.
      </p>
      <form @submit.prevent="onSubmit">
        <q-input
          class="inp"
          outlined
          label="Enter your email"
          type="email"
          required
          :dark="isDark"
          v-model="email"
        />
        <q-btn
          class="btn"
          type="submit"
          size="16px"
          no-wrap
          color="black"
          label="Get updates"
          dark
        />
      </form>
    </div>
    <div class="right">
      <div class="social">
        <h3>Social</h3>
        <p>Twitter</p>
        <p>Medium</p>
        <p>Telegram</p>
      </div>
      <div class="lossless">
        <h3>Wayde</h3>
        <p>Technology</p>
      </div>
      <div class="getin">
        <h3>Get in Touch</h3>
        <p>contact@wayde.in</p>
        <q-btn flat  label="Admin" @click="goAdmin" />
      </div>
    </div>
  </div>
  <div :style="isDarkBg" class="foot-bottom">
    <!-- <div class="foot-b-left"> -->
    <p>Copyright © 2021 Wayde</p>
    <p>Terms & Conditions</p>
    <p>Privacy Policy</p>
    <!-- </div> -->
  </div>
</template>

<script>
import useConsultation from "../admin/composables/useConsultation";
import { pageVisited } from "../admin/composables/pageVisited.js";
import { useRouter } from "vue-router";
import {timestamp} from "../firebase/config"

import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
export default {
  setup() {
    const router = useRouter();
    const $store = useStore();
    // console.log($store.state.darkText)
    const isDarkText = computed({
      get: () => $store.state.darkText,
    });
    const isDarkBg = computed({
      get: () => $store.state.darkBG,
    });
    const isDark = computed({
      get: () => $store.state.dark,
    });
    const { postConsultation, error } = useConsultation("subscribers");

    const email = ref(null);
    const onSubmit = async () => {
      console.log(email.value);
      const doc = {
        email: email.value,
        done: false,
        createdAt: timestamp()
      };
      await postConsultation(doc);
      email.value = null;
    };

    onMounted(async () => {
      await pageVisited();
    });
    const goAdmin = () => {
      router.push({ name: "AdminLogin" });
    };
    return { isDarkBg, isDarkText, isDark, onSubmit, email, goAdmin };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 150px;
  display: flex;
  background: white;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 50px;
  padding: 80px;
  width: 100%;
  box-shadow: 0 2px 4px 1px;
}
.right {
  display: flex;
  max-width: 500px;
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    cursor: pointer;
    font-weight: 350;
  }
  .social {
    margin-right: 20px;
  }
  .lossless {
    margin-right: 20px;
  }
  .getin {
    margin-right: 40px;
  }
}
.left {
  max-width: 500px;
  img {
    max-width: 180px;
  }
  form {
    display: flex;
  }
  p {
    font-size: 18px;
    color: #394047;
  }
  .btn {
    width: 150px;
    margin-left: 20px;
    border: 2px solid white;
    transition: all 0.24s;
  }
  .btn:hover {
    background: #ffffff !important;
    color: black !important;
  }
  .inp {
    width: 250px;
  }
}
.foot-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  p {
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    color: #8a8a8a;
    margin: 5px;
  }
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
  }
  form {
    flex-direction: column;
  }
  .left {
    .btn {
      width: 500px;
      margin-left: unset;
      margin-top: 20px;
      border: 2px solid white;
    }
    .inp {
      width: 500px;
    }
  }
  .right {
    margin-top: 50px;
  }
}

@media (max-width: 500px) {
  .footer {
    flex-direction: column;
  }
  form {
    flex-direction: column;
  }
  .left {
    .btn {
      width: 300px;
      margin-left: unset;
    }
    .inp {
      width: 300px;
    }
  }
  .right {
    margin-top: 50px;
    // margin-left: 30px;
  }
  .foot-bottom {
    flex-direction: column;
  }
}
</style>
