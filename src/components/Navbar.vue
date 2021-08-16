<template>
  <div @scroll="scrl" :style="scrollStyle" class="navbar">
    <div class="logo">
      <img src="../assets/WayedNavIco.png" alt="wayed" />
    </div>
    <div class="left-menu">
      <p>Who We Are</p>
      <p>How It Works</p>
      <p>Technology</p>
      <q-btn class="btn" color="black" label="Whitepaper" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "MainLayout",

  components: {},

  setup() {
    const scrollStyle = ref(null);

    const scrl = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        scrollStyle.value = {
          background: "white",
          height: `80px`,
          boxShadow: `0px 2px 10px rgb(12 39 34 / 5%)`,
        };
      } else {
        scrollStyle.value = {
          boxShadow: "none",
          background: "transparent",
        };
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", scrl);
    });

    return {
      scrollStyle,
      scrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  display: flex;
  padding: 20px;
  z-index: 15;
  background: transparent;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 91px;
  box-shadow: none;
  transition: 0.2s all;
}

.logo {
  img {
    width: 180px;
    padding: 15px;
  }
}
.left-menu {
  display: flex;
  align-items: center;
  p {
    margin: 0 20px 0 0;
    border-bottom: 2px solid black;
    border-width: 0px;
    // font-size: 1em;
    font-size: 18px;
    transition: all 0.1s;
    cursor: pointer;
  }
  p:hover {
    border-width: 2px;
  }
}
.btn {
  background-color: black !important;
  transition: all 0.2s;
}
.btn:hover {
  background-color: #399cc2 !important;
}
</style>
