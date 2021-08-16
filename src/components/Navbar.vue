<template>
  <div class="navbar">
      <div class="logo">
          <img src="../assets/WayedNavIco.png" alt="wayed">
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
export default {
  name: "MainLayout",

  components: {},

  setup() {
    return {};
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
    background: white;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 81px;
    background: #fff;
    box-shadow: 0px 2px 10px rgb(12 39 34 / 5%);
    transition: 0.2s all;
}
.logo{
    img {
        width: 180px;
        padding: 15px;
    }
}
.left-menu {
    display: flex;
    align-items: center;
    p{
        margin: 0 20px 0 0;
        border-bottom: 2px solid black;
        border-width: 0px;
        font-size: 1em;
        transition: all 0.1s;
        cursor: pointer;
    }
    p:hover {
        border-width: 2px;
    }
}
.btn {
    background-color: black !important;
    transition: all .2s;
}
.btn:hover {
    background-color: #399CC2 !important;
}
</style>
