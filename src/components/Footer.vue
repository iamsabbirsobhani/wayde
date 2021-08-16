<template>
  <div class="footer">
    <div class="left">
      <img src="../assets/WayedNavIco.png" alt="" />
      <p>
        You don’t want to miss the news on Wayde. Subscribe - we’ll only send
        updates on our launch.
      </p>
      <form @submit.prevent="">
        <q-input class="inp" outlined label="Enter your email" type="email" required />
        <q-btn class="btn" type="submit" size="16px" no-wrap color="black" label="Get updates" />
      </form>
    </div>
    <div class="right">
      <div class="social">
        <h3>Social</h3>
        <p>Twitter</p>
        <p>Medium</p>
        <p>Telegram</p>
        <p>GitHub</p>
      </div>
      <div class="lossless">
        <h3>Wayde</h3>
        <p>Technology</p>
        <p>Whitepaper</p>
      </div>
      <div class="getin">
        <h3>Get in Touch</h3>
        <p>hello@wayde.com</p>
      </div>
    </div>
  </div>
  <div class="foot-bottom">
    <!-- <div class="foot-b-left"> -->
    <p>Copyright © 2021 Wayde</p>
    <p>Terms & Conditions</p>
    <p>Privacy Policy</p>
    <!-- </div> -->
  </div>
</template>

<script>
export default {

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
  }
  .btn:hover{
      background: #399cc2 !important;
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
    color: #394047;
    margin: 5px;
  }
}
</style>
