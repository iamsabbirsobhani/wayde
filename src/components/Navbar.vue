<template>
  <div @scroll="scrl" :style="scrollStyle" class="navbar">
    <div class="logo">
      <img src="../assets/WayedNavIco.png" alt="wayed" />
    </div>
    <div class="left-menu">

      <q-btn class="text-light-blue-13 nav-btn-1" flat @click="scroll('twr')" label="Technology" />

      <!-- glowing button -->
      <!-- blue -->
      <!-- <a style="cursor: pointer;" @click="scroll('twr')" class="button blue">Technology</a> -->
      <!-- Yellow -->
      <a style="cursor: pointer;" @click="scroll('offerings')" class="button yellow nav-btn-yellow">Our Offerings</a>
      <!-- White -->
      <!-- <a style="cursor: pointer;" @click="scroll('bcd')" class="button white">Blockchain</a> -->
      <!-- glowing button -->

      <q-btn flat @click="scroll('bcd')" class="text-orange-14 nav-btn-2" label="Blockchain" />
      <!-- <q-btn class="btn" color="black" label="Whitepaper" /> -->
    </div>
  </div>

  <div class="mobile-navbar" :style="scrollStyle">
    <div class="mobile-logo">
      <img src="../assets/WayedNavIco.png" alt="" />
    </div>
    <div @click="addNavCls" class="header-nav-mobile">
      <div id="menu-toggle" :class="{ active: isTrue, open: isTrue }">
        <div id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="cross">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>

  <!-- <div id="overlay" class="overlay">
    <div class="deco-bg">
      <img src="assets/images/mobile-menu-bg.png" />
    </div>
    <nav class="overlay-menu">
      <ul>
        <li>
          <a href="#detect">Who We Are</a>
        </li>
        <li>
          <a href="#twoLevels">How It Works</a>
        </li>
        <li>
          <a href="#technical">Technology</a>
        </li>
      </ul>
      <div class="mobile-btn-header overlay-menu">
        <a
          class="btn btn-primary btn-header"
          href="../assets/mobile-menu-bg.png"
          target="_blank"
          >Whitepaper</a
        >
      </div>
    </nav>
  </div> -->

  <div id="myNav" :style="navStyle" class="overlay">
    <!-- Button to close the overlay navigation -->

    <!-- Overlay content -->
    <div class="overlay-content">
      <q-btn
        @click="scroll('twr')"
        label="Technology"
        flat
      />
      <!-- <q-btn
        class="q-btn"

        outline
        style="background: #FF0080; color: white"
        label="Technology"
      /> -->
      <!-- style="color: #ff0080" -->
        <!-- class="bg-deep-orange button yellow" -->
        <!-- size="20px" -->
      <q-btn
        @click="scroll('offerings')"
        label="Our Offerings"
        flat
      />
        <!-- class="bg-lime-14 q-btn" -->
        <!-- style="color: white" -->
      <q-btn
        @click="scroll('bcd')"
        label="Blockchain"
        flat
      />
        <!-- class="bg-indigo-10" -->
      <q-btn
        @click="scroll('bcc')"
        style="color: black"
        flat
        label="Blockchain cycle"
      />
        <!-- class="bg-light-blue-5 button blue"
        size="20px"
        style="color: white; width: 280px" -->
      <q-btn
        @click="scroll('bswd')"
        label="Solutions"
        flat
        style="color: black"
      />
        <!-- style="color: white"
        class="bg-green" -->
      <q-btn
        @click="scroll('bucws')"
        label="Cases We Support"
        flat
      />
        <!-- class="bg-red-13" -->
        <!-- style="color: white" -->
      <q-btn
        @click="scroll('bdps')"
        label="Our Principles"
        flat
      />
        <!-- style="color: white; width: 280px" -->
        <!-- class="bg-purple button white" -->
        <!-- size="20px" -->
      <q-btn
        @click="scroll('solutions')"
        flat
        label="Solution We Deliver"
      />
        <!-- class="bg-pink-9" -->
        <!-- style="color: white" -->
      <q-btn
        @click="scroll('contactUs')"
        label="Contact Us"
        flat
      />
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

    const isTrue = ref(false);
    const navStyle = ref(null);

    const addNavCls = () => {
      isTrue.value = !isTrue.value;
      if (isTrue.value) {
        navStyle.value = {
          height: `100%`,
        };
      } else {
        navStyle.value = {
          height: `0%`,
        };
      }
    };

    //scroll to our offerings
    const scroll = (id) => {
      isTrue.value = false;
      navStyle.value = {
        height: `0%`,
      };
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    };

    return {
      scrollStyle,
      scrl,
      isTrue,
      addNavCls,
      navStyle,
      scroll,
    };
  },
  // methods: {
  //   scroll(id) {
  //     document.getElementById(id).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   },
  // },
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

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 0%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 35; /* Sit on top */
  left: 0;
  top: 0;
  // background-color: rgb(248, 248, 248); /* Black fallback color */
  // background-color: rgba(255, 255, 255, 0.979); /* Black w/opacity */
  // background: #f0f0f9;
  background: white;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: 10%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 30px;
  color: #000000;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: #888888;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

.mobile-navbar {
  display: none;
}




// glowing button

/* Blue Shadow */
@-moz-keyframes blue {
  0%, 100% {
    -moz-box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5);
    box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    -moz-box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0), inset 0px 0px 0px rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

@-webkit-keyframes blue {
  0%, 100% {
    -webkit-box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5);
    box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0), inset 0px 0px 0px rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

@-o-keyframes blue {
  0%, 100% {
    box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

@keyframes blue {
  0%, 100% {
    box-shadow: 1px 0px 19px 4px rgba(0, 130, 196, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(0, 130, 196, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

/* Yellow Shadow */
@-moz-keyframes yellow {
  0%, 100% {
    -moz-box-shadow: 1px 0px 19px 4px #fff503, inset 0px 0px 10px rgba(255, 255, 255, 0.5);
    box-shadow: 1px 0px 19px 4px #fff503, inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    -moz-box-shadow: 0px 0px 0px 0px rgba(255, 245, 3, 0), inset 0px 0px 0px rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 0px rgba(255, 245, 3, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

@-webkit-keyframes yellow {
  0%, 100% {
    -webkit-box-shadow: 1px 0px 19px 4px #fff503, inset 0px 0px 10px rgba(255, 255, 255, 0.5);
    box-shadow: 1px 0px 19px 4px #fff503, inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    -webkit-box-shadow: 0px 0px 0px 0px rgba(255, 245, 3, 0), inset 0px 0px 0px rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 0px rgba(255, 245, 3, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

@-o-keyframes yellow {
  0%, 100% {
    box-shadow: 1px 0px 19px 4px #fff503, inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(255, 245, 3, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

@keyframes yellow {
  0%, 100% {
    box-shadow: 1px 0px 19px 4px #fff503, inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(255, 245, 3, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

/* White Shadow */
@-moz-keyframes white {
  0%, 100% {
    -moz-box-shadow: 1px 0px 19px 4px rgba(255, 255, 255, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5);
    box-shadow: 1px 0px 19px 4px rgba(255, 255, 255, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    -moz-box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0), inset 0px 0px 0px rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

@-webkit-keyframes white {
  0%, 100% {
    -webkit-box-shadow: 1px 0px 19px 4px rgba(255, 255, 255, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5);
    box-shadow: 1px 0px 19px 4px rgba(255, 255, 255, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    -webkit-box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0), inset 0px 0px 0px rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

@-o-keyframes white {
  0%, 100% {
    box-shadow: 1px 0px 19px 4px rgba(255, 255, 255, 0.7), inset 0px 0px 10px rgba(255, 255, 255, 0.5); }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

@keyframes white {
  0%, 100% {
    box-shadow: 1px 0px 7px 2px rgba(255, 255, 255, 0.7), inset 0px 0px 6px rgba(255, 255, 255, 0.5); }

  50% {
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0), inset 0px 0px 0px rgba(255, 255, 255, 0); } }

/* Button */
.button {
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px 0;
  border-radius: 10px 0;
  margin-right: 20px; }

/* Blue Background */
.blue {
  text-shadow: 0px 1px 0px #83e0f7;
  background-image: -webkit-linear-gradient(top, #87e0fd, #53cbf1);
  background-image: -moz-linear-gradient(top, #87e0fd, #53cbf1);
  background-image: -o-linear-gradient(top, #87e0fd, #53cbf1);
  background-image: linear-gradient(to bottom, #87e0fd, #53cbf1);
  -webkit-animation: blue 2s infinite;
  -moz-animation: blue 2s infinite;
  -o-animation: blue 2s infinite;
  animation: blue 2s infinite; }

/* Yellow Background */
.yellow {
  text-shadow: 0px 1px 0px #faffc7;
  background-image: -webkit-linear-gradient(top, #fff966, #f3fd80);
  background-image: -moz-linear-gradient(top, #fff966, #f3fd80);
  background-image: -o-linear-gradient(top, #fff966, #f3fd80);
  background-image: linear-gradient(to bottom, #fff966, #f3fd80);
  -webkit-animation: yellow 2s infinite;
  -moz-animation: yellow 2s infinite;
  -o-animation: yellow 2s infinite;
  animation: yellow 2s infinite; }

/* White Background */
.white {
  text-shadow: 0px 1px 0px #fff;
  background-image: -webkit-linear-gradient(top, #ffffff, #cccccc);
  background-image: -moz-linear-gradient(top, #ffffff, #cccccc);
  background-image: -o-linear-gradient(top, #ffffff, #cccccc);
  background-image: linear-gradient(to bottom, #ffffff, #cccccc);
  -webkit-animation: white 2s infinite;
  -moz-animation: white 2s infinite;
  -o-animation: white 2s infinite;
  animation: white 2s infinite; }

// glowing button


.nav-btn-1 {
  margin-right: 10px;
  transition: all .24s;
}

.nav-btn-1:hover {
  transform: scale(1.07);
  box-shadow: 1px 1px 1px 2px #83e0f7;
}
.nav-btn-2 {
  margin-left: 10px;
  transition: all 0.24s;
}

.nav-btn-2:hover {
  transform: scale(1.07);
  box-shadow: 1px 1px 1px 2px #ffa53e;
}
.nav-btn-yellow {
  margin-left: 10px;
  transition: all 0.24s;
}
.nav-btn-yellow:hover {
  transform: scale(1.07);
  box-shadow: 1px 1px 1px 2px #e8ff66;
}


@media (max-width: 768px) {
  .q-btn {
    width: 250px;
    height: 50px;
    margin: 5px;
    align-self: center;
  }
  .navbar {
    display: none;
  }
  .mobile-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: fixed;
    top: 0;
    z-index: 40;
    background: transparent;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 91px;
    box-shadow: none;
    transition: 0.2s all;
  }

  .mobile-logo {
    img {
      max-width: 150px;
    }
  }
  #cross {
    position: absolute;
    height: 24px;
    width: 24px;
    transform: rotate(45deg);
  }
  #hamburger {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  #menu-toggle {
    width: 24px;
    height: 24px;
    margin: 0;
    position: relative;
    cursor: pointer;
    border-radius: 0;
    z-index: 30;
  }
  .header-nav {
    display: none;
  }

  .header-nav-mobile {
    display: block;
    z-index: 20;
    padding: 10px;
  }

  .header-nav-mobile .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-nav-mobile .hamburger:hover {
    cursor: pointer;
  }

  .header-nav-mobile .hamburger span {
    width: 24px;
    height: 2px;
    background: #0c2722;
    margin: 2px 0;
  }

  * {
    transition: 0.25s ease-in-out;
    box-sizing: border-box;
  }

  #menu-toggle span {
    display: block;
    background: #0c2722;
    border-radius: 2px;
  }

  #overlay .deco-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  #overlay .deco-bg img {
    width: 100%;
  }

  #menu-toggle {
    width: 24px;
    height: 24px;
    margin: 0;
    position: relative;
    cursor: pointer;
    border-radius: 0;
  }

  #menu-toggle:hover {
    background: transparent;
  }

  #hamburger {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  #hamburger span {
    width: 24px;
    height: 2px;
    position: relative;
    top: 0px;
    left: 0;
    margin: 4px 0;
  }

  #hamburger span:nth-child(1) {
    transition-delay: 0.5s;
  }

  #hamburger span:nth-child(2) {
    transition-delay: 0.625s;
  }

  #hamburger span:nth-child(3) {
    transition-delay: 0.75s;
  }

  #cross {
    position: absolute;
    height: 24px;
    width: 24px;
    transform: rotate(45deg);
  }

  #cross span:nth-child(1) {
    height: 0%;
    width: 2px;
    position: absolute;
    transition-delay: 0s;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }

  #cross span:nth-child(2) {
    width: 0%;
    height: 2px;
    position: absolute;
    transition-delay: 0.25s;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }

  #menu-toggle.open #hamburger span {
    width: 0%;
  }

  #menu-toggle.open #hamburger span:nth-child(1) {
    transition-delay: 0s;
  }

  #menu-toggle.open #hamburger span:nth-child(2) {
    transition-delay: 0.125s;
  }

  #menu-toggle.open #hamburger span:nth-child(3) {
    transition-delay: 0.25s;
  }

  #menu-toggle.open #cross span:nth-child(1) {
    height: 100%;
    transition-delay: 0.625s;
  }

  #menu-toggle.open #cross span:nth-child(2) {
    width: 100%;
    transition-delay: 0.375s;
  }

  // overlay menu items
  //   .overlay {
  //     position: relative;
  //     background: #f6f6f6;
  //     bottom: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 0%;
  //     opacity: 0;
  //     visibility: hidden;
  //     transition: opacity 0.35s, visibility 0.35s, height 0.45s;
  //     overflow: hidden;
  //   }

  //   .overlay-open .overlay {
  //     opacity: 1;
  //     visibility: visible;
  //     height: 100%;
  //     z-index: 900;
  //   }

  //   .overlay-open .overlay li {
  //     animation: fadeInTop 0.5s ease forwards;
  //     animation-delay: 0.35s;
  //   }

  //   .overlay-open .overlay li:nth-of-type(2) {
  //     animation-delay: 0.4s;
  //   }

  //   .overlay-open .overlay li:nth-of-type(3) {
  //     animation-delay: 0.45s;
  //   }

  //   .overlay-open .overlay li:nth-of-type(4) {
  //     animation-delay: 0.5s;
  //   }

  //   .overlay-open .overlay li:nth-of-type(5) {
  //     animation-delay: 0.55s;
  //   }

  //   .overlay-open .overlay li:nth-of-type(6) {
  //     animation-delay: 0.6s;
  //   }

  //   .overlay-open .overlay li:nth-of-type(7) {
  //     animation-delay: 0.65s;
  //   }

  //   .overlay nav {
  //     position: relative;
  //     height: 70%;
  //     top: 50%;
  //     transform: translateY(-50%);
  //     font-size: 1.5em;
  //     font-weight: 600;
  //     text-align: center;
  //     font-family: "Gilroy", sans-serif;
  //   }

  //   .overlay ul {
  //     list-style: none;
  //     padding: 0;
  //     margin: 0 auto;
  //     display: inline-block;
  //     position: relative;
  //     height: 100%;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     justify-content: center;
  //   }

  //   .overlay ul li {
  //     display: block;
  //     /* height: 25%; */
  //     /* height: calc(100% / 4); */
  //     /* min-height: 50px; */
  //     position: relative;
  //     opacity: 0;
  //     padding: 14px 0;
  //   }

  //   .overlay ul li a {
  //     display: block;
  //     position: relative;
  //     color: #000000;
  //     text-decoration: none;
  //     overflow: hidden;
  //   }

  //   @keyframes fadeInTop {
  //     0% {
  //         opacity: 0;
  //         top: 20%;
  //     }

  //     100% {
  //         opacity: 1;
  //         top: 0;
  //     }
  // }
}
</style>
