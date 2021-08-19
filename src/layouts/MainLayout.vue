<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar />
    <FrontPage />
    <Clients/>
    <Blockchain />
    <ExploreOffer />
    <ItEco />
    <SolutionsDeliver/>
    <ContactUs/>
    <Footer />
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
import ItEco from "src/components/ItEco.vue";
import ContactUs from 'src/components/ContactUs.vue';
import Blockchain from 'src/components/Blockchain.vue';
import Clients from 'src/components/Clients.vue';
import SolutionsDeliver from 'src/components/SolutionsDeliver.vue';
export default {
  name: "MainLayout",

  components: {
    Navbar,
    FrontPage,
    ExploreOffer,
    Footer,
    ItEco,
    ContactUs,
    Blockchain,
    Clients,
    SolutionsDeliver,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
