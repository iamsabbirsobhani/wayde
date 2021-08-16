<template>
  <div class="frontPage">
    <div id="radial"></div>
    <div id="radial2"></div>
    <div class="front-template">
      <div class="front-typo">
        <h1>
          SOFTWARE CONSULTING AND DEVELOPMENT <br />
          FOR YOUR DIGITAL SUCCESS
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  p {
    text-align: center;
    color: gray;
    max-width: 600px;
    margin: auto;
    font-size: 18px;
  }
  .front-btn {
    display: flex;
    justify-content: space-evenly;
    width: 10px;
    margin: auto;
    margin-top: 20px;
  }
  .btn {
    margin: auto;
    margin-left: 20px;
    transition: all 0.2s;
  }
  .btn:hover {
    background-color: #399cc2 !important;
  }
  .btn2 {
    margin: auto;
    margin-left: 20px;
    width: 200px !important;
    background: white !important;
    border: 2px solid black !important;
    color: black !important;
  }
}
.frontPage {
  background-image: url("../assets/main-deco-bg.png");
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f9;
  background-size: cover;
  position: relative;
  overflow: hidden;
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
</style>
