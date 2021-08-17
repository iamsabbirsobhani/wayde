<template>
  <div class="parent-card">
    <q-card class="card">
      <q-card-section class="my-card">
        <div class="left-it">
          <h2>EVERY ASPECT OF YOUR IT ECOSYSTEM. TAKEN CARE OF.</h2>
          <div class="dash"></div>
          <p>
            Comprehensive care of your cloud or on-premises infrastructure and
            applications with:
          </p>
          <ul>
            <li>Consulting</li>
            <li>Implementation</li>
            <li>Management and support</li>
            <li>Security</li>
            <li>Help desk services</li>
            <li>Migration</li>
          </ul>
        </div>
        <div class="right-it">
          <img src="../assets/iteco.webp" alt="" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dash {
  border: 3px solid orange;
  width: 100px;
  margin-bottom: 10px;
}

.parent-card {
  margin-top: 250px;
}

.card {
  max-width: 1150px;
  margin: auto;
}

.my-card {
  display: flex;
  justify-content: space-between;
  padding: 50px;
}

.left-it {
  max-width: 400px;
  h2 {
    font-size: 28px;
    font-weight: 700;
  }
  p {
    color: #222;
  }
}

.right-it {
  img {
    position: relative;
    top: -100px;
    right: -100px;
    background: white;
    width: 500px;
    box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
  }
}

li {
  list-style-type: none;
  margin: 15px;
  font-size: 16px;
  color: #333;
}

li {
  padding-left: 1em;
  text-indent: -0.7em;
}

li::before {
  content: "\f105";
  color: rgb(26, 255, 102); /* or whatever color you prefer */
  background: rgb(26, 255, 102);
  margin-right: 4px;
}

@media (max-width: 768px) {
  .card {
    max-width: 600px;
  }
  .my-card {
    flex-direction: column;
    justify-content: space-between;
  }
  .right-it {
    margin-top: 50px;
    img {
      width: 500px;
      display: block;
      position: unset;
      top: unset;
      right: unset;
      background: white;
      box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
    }
  }
  .left-it {
    h2 {
      font-size: 25px;
      font-weight: 700;
    }
    p {
      color: #222;
    }
  }
}
@media (max-width: 500px) {
  .card {
    max-width: 350px;
  }
  .my-card {
    flex-direction: column;
    justify-content: space-between;
  }
  .right-it {
    margin-top: 50px;
    img {
      width: 250px;
      display: block;
      position: unset;
      top: unset;
      right: unset;
      background: white;
      box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
    }
  }
  .left-it {
    max-width: 350px;
    h2 {
      font-size: 25px;
      font-weight: 700;
    }
    p {
      color: #222;
    }
  }
}
</style>
