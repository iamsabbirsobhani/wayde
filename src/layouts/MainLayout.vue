<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar />
    <FrontPage />
    <ExploreOffer />
    <ItEco/>
    <Footer/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from "../components/Navbar";
import FrontPage from "../components/FrontPage";
import ExploreOffer from "../components/ExploreOffer.vue";
import Footer from "../components/Footer.vue";
import ItEco from 'src/components/ItEco.vue';
export default {
  name: "MainLayout",

  components: {
    Navbar,
    FrontPage,
    ExploreOffer,
    Footer,
    ItEco
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
