<template>
  <div class="solution">
    <div class="bdc-subtitle">
      <h3>SOLUTIONS WE DELIVER</h3>
      <div class="dash"></div>
    </div>
    <div class="q-gutter-md">
      <div class="row justify-between">
        <q-parallax :height="500" src="../assets/solutionProvide.jpg">
          <div class="allCards">
            <q-card class="my-card-s">
              <q-card-section class="text-h6">
                Enterprise application
              </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6"> ERP </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6"> CRM </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6"> HR software </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6">
                eLearning software
              </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6"> eCommerce </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6"> Mobile Apps </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6">
                Collaboration and productivity solutions
              </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6">
                Fleet management software
              </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6"> Data Analytics </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6"> Web Portals </q-card-section>
            </q-card>
            <q-card class="my-card-s">
              <q-card-section class="text-h6"> ITSM </q-card-section>
            </q-card>
          </div>
        </q-parallax>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.allCards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1150px;
  justify-content: center;
}
.my-card-s {
  margin: 10px;
  // width: 300px;
  transition: all 0.24s;
}
.my-card-s:hover {
  transform: scale(1.0001);
  box-shadow: 0 3px 15px -2px;
}
.text-h6 {
  width: 300px;
  text-align: center;
  margin: 10px;
}
.solution {
  margin-top: 250px;
}

.dash {
  border: 3px solid orange;
  width: 100px;
  margin-bottom: 10px;
}

.bdc-subtitle {
  margin-bottom: 50px;
  h3 {
    font-size: 25px;
    text-align: center;
  }
  .dash {
    margin: auto;
  }
}
</style>
