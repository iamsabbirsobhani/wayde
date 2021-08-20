<template>
  <div class="topcard">
    <q-banner inline-actions rounded class="bg-amber-10 text-white">
      <!-- You have lost connection to the internet. This app is offline. -->
      <!-- <p>Contacts</p> -->
      <div class="topno">
          <!-- <p>US</p> -->
          <div  class="one">
      <!-- <p class="ijk">(USA)</p> -->
      <p href="tel:+91-0484-4148299" >
        <i class="las la-phone-volume"></i> +17867233217
      </p>
      </div>
      <!-- <p>IN</p> -->

      <div class="two">
      <!-- <p class="ijk">(INDIA)</p> -->
      <p href="tel:+91-0484-4148299">
        <i class="las la-phone-volume"></i> +91 4844148299
      </p>
      </div>
      </div>
      <!-- <template v-slot:action>
        <q-btn flat label="Turn ON Wifi" />
        <q-btn flat label="Dismiss" />
      </template> -->
    </q-banner>
  </div>
</template>


<style lang="scss" scoped>
.topno{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
p{
    margin-left: 10px;
}

.ijk{
    p{
        text-align: center;
    }
}

.topcard{
    max-width: 400px;
    padding: 0;
    transition: all 0.24s;
}

.topcard:hover{
    transform: scale(1.02);
}
</style>
