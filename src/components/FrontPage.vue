<template>
  <div class="frontPage">
    <div id="radial"></div>
    <div id="radial2"></div>
    <div class="deco-bg">
      <img src="../assets/main-deco-bg.png" alt="" />
    </div>
    <div class="front-template">
      <div class="front-typo">
        <h1>
          SOFTWARE <strong>CONSULTING</strong> AND DEVELOPMENT <br />
          FOR YOUR DIGITAL SUCCESS.
        </h1>
        <p>
          Since 1989. For millions of users. We transform businesses with
          powerful and adaptable digital solutions that satisfy the needs of
          today and unlock the opportunities of tomorrow.
        </p>
      </div>
      <div class="front-btn">
        <q-btn class="btn" size="23px" color="black" label="Whitepaper" />
        <q-btn
          class="btn2"
          size="23px"
          no-wrap
          color="black"
          label="Early access"
        />
      </div>
    </div>
    <q-page-sticky
      :style="totopStyle"
      position="bottom-right"
      :offset="[18, 18]"
    >
      <transition name="fade">
        <q-btn
          @click="scrollTop"
          glossy
          fab
          icon="keyboard_arrow_up"
          color="lime-13"
          v-if="isFade"
        />
      </transition>
    </q-page-sticky>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const scrl = ref(null);
    const totopStyle = ref({
      display: "none",
      zIndex: 30,
    });

    const isFade = ref(false)

    let sss = () => {
      scrl.value = window.scrollY;
      if (window.scrollY > 1500) {
        totopStyle.value = {
          display: "block",
          zIndex: 30,
        };
        isFade.value = true;
      } else {
        totopStyle.value = {
          display: "none",
          zIndex: 30,
        };
        isFade.value = false;
      }
    };

    var scrollTop = function () {
      window.scrollTo({ top: 0, behavior: `smooth` });
    };

    onMounted(() => {
      window.addEventListener("scroll", sss);
    });
    return { scrollTop, totopStyle, isFade };
  },
};
</script>

<style lang="scss" scoped>
// totop transition
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
// totop transition



.front-template {
  position: relative;
  top: 0;
  z-index: 11;
  max-width: 1300px;
  margin: auto;
  h1 {
    text-align: center;
    font-size: 55px;
    font-weight: 550;
    padding: 0;
    line-height: 1.5;
    color: #222;
  }

  h1 strong {
    font-weight: 450;
    font-style: italic;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -ms-background-clip: text;
    -ms-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    display: inline-block;
    animation: 0.8s shake infinite alternate;
    background-color: #191c1f;
    color: #191c1f;
  }

  @keyframes shake {
    0% {
      transform: skewX(-15deg);
    }

    5% {
      transform: skewX(15deg);
    }
    10% {
      transform: skewX(-15deg);
    }
    15% {
      transform: skewX(15deg);
    }
    20% {
      transform: skewX(0deg);
    }
    100% {
      transform: skewX(0deg);
    }
  }

  p {
    text-align: center;
    color: gray;
    max-width: 600px;
    margin: auto;
    font-size: 18px;
  }
  .front-btn {
    display: flex;
    justify-content: center;
    // width: 10px;
    margin: auto;
    margin-top: 20px;
  }
  .btn {
    // margin: auto;
    // margin-left: 20px;
    transition: all 0.2s;
  }
  .btn:hover {
    background-color: #399cc2 !important;
    transform: scale(1.05);
    box-shadow: 0 3px 15px -2px;
  }
  .btn2 {
    // margin: auto;
    margin-left: 20px;
    width: 200px !important;
    background: white !important;
    border: 2px solid black !important;
    color: black !important;
    transition: all 0.24s;
  }
  .btn2:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 15px -2px;
  }
}
// .frontPage {
//   background-image: url("../assets/main-deco-bg.png");
//   height: 100%;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #f0f0f9;
//   background-size: cover;
//   position: relative;
//   overflow: hidden;
// }
.frontPage {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/main-deco-bg.png");
  /* background: url(../images/hero-bg2.png); */
  background: #f0f0f9;
  // background: #fff;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.deco-bg {
  position: absolute;
  right: 0;
  bottom: 0;
  img {
    width: 387px;
    height: 387px;
  }
}

#radial {
  z-index: 1;
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 900px;
  height: 900px;
  margin: -450px 0 0 -450px;
  -webkit-animation: 7s radial1 linear infinite;
  -moz-animation: 7s radial1 linear infinite;
  background: radial-gradient(
    32.53% 32.53% at 50.08% 49.92%,
    rgba(250, 255, 0, 0.46) 27.24%,
    rgba(248, 251, 132, 0) 100%
  );
  opacity: 0.9;
}
@keyframes radial1 {
  0% {
    -webkit-transform: translate(-5%, -25%) scale(1, 1);
  }

  50% {
    -webkit-transform: translate(20%, 40%) scale(1, 1.33);
  }
  100% {
    -webkit-transform: translate(-5%, -25%) scale(1, 1);
  }
}
#radial2 {
  z-index: 1;
  position: absolute;
  top: 5%;
  right: 5%;
  width: 900px;
  height: 900px;
  margin: -450px 0 0 -450px;
  -webkit-animation: 7s radial2 linear infinite;
  -moz-animation: 7s radial2 linear infinite;
  opacity: 0.5;
  background: radial-gradient(
    circle,
    rgba(2, 185, 226, 0.4) 20%,
    rgba(2, 185, 226, 0.2) 51%,
    rgba(240, 240, 249, 1) 70%
  );
}
@keyframes radial2 {
  0% {
    -webkit-transform: translate(-5%, -25%) scale(1, 1);
  }

  50% {
    -webkit-transform: translate(20%, 40%) scale(1, 1.33);
  }
  100% {
    -webkit-transform: translate(-5%, -25%) scale(1, 1);
  }
}

@media (max-width: 768px) {
  .front-template {
    top: 30px;
    h1 {
      font-size: 30px;
    }
    p {
      color: #394047;
      font-size: 18px;
    }
  }
  .front-btn {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btn {
      margin-left: unset;
      margin-bottom: 20px;
      width: 300px;
    }
    .btn2 {
      width: 300px !important;
      // margin: unset;
      margin-left: unset;
    }
  }
}
@media (max-width: 500px) {
  .front-template {
    top: 20px;
    h1 {
      font-size: 30px;
    }
    p {
      color: #394047;
      width: 310px;
      font-size: 17px;
    }
  }
  .front-btn {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btn {
      margin-left: unset;
      margin-bottom: 20px;
      width: 300px;
    }
    .btn2 {
      width: 300px !important;
      // margin: unset;
      margin-left: unset;
    }
  }
}
</style>
