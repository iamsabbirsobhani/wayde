<template>
  <q-layout view="hHh LpR ffr">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar style="height: 70px">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <q-avatar style="width: 90px; height: 50px">
            <img src="../../assets/WayedNavIco.png" />
          </q-avatar>
          <div>
            Admin
            <q-btn
              color="white"
              text-color="black"
              label="Log Out"
              @click="signOut"
            />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="desktop"
      bordered
    >
      <!-- drawer content -->
      <q-btn
        style="font-size: 18px"
        class="full-width q-pa-md q-mt-md bg-primary text-white"
        label="CONSULTATION"
        @click="btnConsult"
      />
      <q-btn
        style="font-size: 18px"
        class="full-width q-pa-md q-mt-md bg-primary text-white"
        label="Subscribers"
        @click="btnSubs"
      />
      <q-btn
        style="font-size: 18px"
        class="full-width q-pa-md q-mt-md bg-primary text-white"
        label="Visitors"
        @click="btnVisitors"
      />
    </q-drawer>

    <q-page-container>
      <Consultation v-if="consult" />
      <Subscriber v-if="subscriber" />
      <Visitors v-if="visitors" />
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
import { ref, onMounted } from "vue";
import { projectAuth } from "../../firebase/config";

import Consultation from "../SubComponents/Consultation";
import Subscriber from "../SubComponents/Subscriber";
import Visitors from "../SubComponents/Visitors";
import { useRouter } from "vue-router";

export default {
  components: { Consultation, Subscriber, Visitors },
  setup() {
    const leftDrawerOpen = ref(false);
    const consult = ref(false);
    const subscriber = ref(false);
    const visitors = ref(false);
    const router = useRouter();

    onMounted(() => {
      document.body.style.backgroundColor = "white";
    });

    const btnConsult = () => {
      consult.value = !consult.value;
      subscriber.value = false;
      visitors.value = false;
      leftDrawerOpen.value = false;
    };
    const btnSubs = () => {
      subscriber.value = !subscriber.value;
      visitors.value = false;
      consult.value = false;
      leftDrawerOpen.value = false;
    };
    const btnVisitors = () => {
      visitors.value = !visitors.value;
      subscriber.value = false;
      consult.value = false;
      leftDrawerOpen.value = false;
    };

    const signOut = () => {
      projectAuth
        .signOut()
        .then(() => {
          console.log('sdf')
          router.push({ name: "AdminLogin" });
        })
        .catch((error) => {
          // An error happened.
        });
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      consult,
      subscriber,
      btnConsult,
      btnSubs,
      btnVisitors,
      visitors,
      signOut,
    };
  },
};
</script>
