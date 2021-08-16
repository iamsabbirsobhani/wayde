<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar/>
    <FrontPage/>
    <ExploreOffer/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from '../components/Navbar'
import FrontPage from '../components/FrontPage'
import ExploreOffer from '../components/ExploreOffer.vue'
export default {
  name: 'MainLayout',

  components: {
    Navbar,
    FrontPage,
    ExploreOffer
  },

  setup () {

    return {
    }
  }
}
</script>
