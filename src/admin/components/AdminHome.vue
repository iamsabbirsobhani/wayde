<template>
  <q-layout view="hHh LpR ffr">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar style="height: 70px;">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title style="display: flex; justify-content: space-between; align-items: center;">
          <q-avatar style="width: 90px; height: 50px;">
            <img src="../../assets/WayedNavIco.png">
          </q-avatar>
          Admin
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="desktop" bordered>
      <!-- drawer content -->
      <q-btn style="font-size: 18px;" class="full-width q-pa-md   q-mt-md bg-primary text-white" label="CONSULTATION" />
      <q-btn style="font-size: 18px;" class="full-width q-pa-md  q-mt-md bg-primary text-white" label="Subscribers"/>
    </q-drawer>

    <q-page-container>

      <router-view />
    </q-page-container>

    <!-- <q-footer elevated class="bg-amber-14 text-white">
      <q-toolbar class="toolbar">
        <q-toolbar-title>
          <q-avatar style="width: 70px">
            <img src="../../assets/WayedNavIco.png" />
          </q-avatar>
        </q-toolbar-title>
        <p>Copyright © 2021 Wayde</p>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    onMounted(() => {
      document.body.style.backgroundColor = "white";
    })

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>