<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar/>
    <FrontPage/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from '../components/Navbar'
import FrontPage from '../components/FrontPage'
export default {
  name: 'MainLayout',

  components: {
    Navbar,
    FrontPage
  },

  setup () {

    return {
    }
  }
}
</script>
