<template>
  <div class="frontPage">
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
        <q-btn class="btn" size="18px" color="black" label="Whitepaper" />
        <q-btn
          class="btn2"
          size="18px"
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
  top:0;
  z-index: 11;
  max-width: 1000px;
  margin: auto;
  h1 {
    text-align: center;
    font-size: 40px;
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
  }
  .btn2 {
    margin: auto;
    margin-left: 20px;
    width: 200px !important;
    background: white !important;
    border: 2px solid black !important;
    color: black !important;
    span {
    }
  }
}
// .bgImage {
//   position: absolute;
//   width: 100%;
//   height: inherit;
// }
.frontPage {
  /* The image used */
    background-image: url("../assets/main-deco-bg.png");

  /* Full height */
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
</style>
