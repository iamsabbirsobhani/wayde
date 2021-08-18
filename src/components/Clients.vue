<template>
  <div class="crl">
    <Carousel  :autoplay="1500" :itemsToShow="3.95" :wrapAround="true" :settings='settings' :breakpoints='breakpoints'>
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <div>
            <img
              style="width: 150px"
              :src="require(`../assets/clients/${slide}.svg`)"
              alt=""
            />
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },

    slides: {
      a: `anydesk-logo`,
      b: `aramco`,
      c: `deloitte`,
      d: `ebay`,
      e: `ford`,
      f: `ibm`,
      g: `leo-burnett`,
      h: `nasa_1`,
      i: `nestle`,
      j: `tietoevry-logo`,
      k: `viber`,
    },
  }),
});
</script>

<style lang="scss" scoped>
.crl {
  margin: auto;
  margin-top: 200px;
  max-width: 90%;
}


@media (max-width: 500px) {
  .crl {
    margin: auto;
    margin-top: 100px;
    max-width: 300px;
  }
}
</style>
