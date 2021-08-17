<template>
  <h1 style="text-align: center; font-size: 24px; margin-top: 200px">
    EXPLORE OUR OFFERING
  </h1>
  <div style="margin: auto" class="dash"></div>

  <q-card class="card">
    <q-card-section class="exploare-offer">
      <div class="offer-menu">
        <ul class="list">
          <li :class="{ styleLight: softDevActive }" @click="softDev">
            Software Development
          </li>
          <li :class="{ styleLight: testingQA }" @click="qa">Testing & QA</li>
          <li :class="{ styleLight: uxui }" @click="uxUi">UX/UI Design</li>
          <li :class="{ styleLight: itcon }" @click="itCon">IT Consulting</li>
          <li :class="{ styleLight: dataanal }" @click="dataAnal">
            Data Analytics
          </li>
          <li :class="{ styleLight: helpdesk }" @click="helpDesk">
            Help Desk Services
          </li>
          <li :class="{ styleLight: inser }" @click="inSer">
            Infrastructure Services
          </li>
          <li :class="{ styleLight: cybersec }" @click="cyberSec">
            Cybersecurity Services
          </li>
        </ul>
      </div>
      <div class="offer-details">
        <transition name="fade">
          <SoftwareDevelopment v-if="softDevActive" />
        </transition>
        <transition name="fade">
          <TestingQA v-if="testingQA" />
        </transition>
        <transition name="fade">
          <UXUI v-if="uxui" />
        </transition>
        <transition name="fade">
          <ItConsulting v-if="itcon" />
        </transition>
        <transition name="fade">
          <DataAnalytics v-if="dataanal" />
        </transition>
        <transition name="fade">
          <HelpDesk v-if="helpdesk" />
        </transition>
        <transition name="fade">
          <InfrastructureServices v-if="inser" />
        </transition>
        <transition name="fade">
          <CybersecurityServices v-if="cybersec" />
        </transition>
      </div>
    </q-card-section>
  </q-card>

  <!-- Accordion -->
  <div class="q-pa-md accordion">
    <q-list bordered class="bg-white">
      <q-expansion-item
        icon="las la-code"
        label="Software Development"
        default-opened
        expand-separator
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <transition name="fade">
              <SoftwareDevelopment v-if="softDevActive" />
            </transition>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        icon="las la-question-circle"
        label="Testing & QA"
        header-class="text-teal"
      >
        <q-card>
          <q-card-section>
            <transition name="fade">
              <TestingQA />
            </transition>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        icon="lab la-figma"
        label="UX/UI Design"
        header-class="text-purple"
      >
        <q-card>
          <q-card-section>
            <transition name="fade">
              <UXUI />
            </transition>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        icon="las la-microchip"
        label="IT Consulting"
        header-class="text-teal"
        expand-icon-class="text-teal"
      >
        <q-card class="bg-white">
          <q-card-section>
            <transition name="fade">
              <ItConsulting />
            </transition>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        icon="las la-digital-tachograph"
        label="Data Analytics"
        header-class="text-orange"
        expand-icon-class="text-orange"
      >
        <q-card class="bg-white">
          <q-card-section>
            <transition name="fade">
              <DataAnalytics />
            </transition>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        icon="las la-hands-helping"
        label="Help Desk Services"
        expand-separator
        header-class="text-primary"
      >
        <q-card class="bg-white">
          <q-card-section>
            <transition name="fade">
              <HelpDesk />
            </transition>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        icon="lab la-servicestack"
        label="Infrastructure Services"
        expand-separator
        header-class="text-red"
      >
        <q-card class="bg-white">
          <q-card-section>
            <transition name="fade">
              <InfrastructureServices />
            </transition>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        icon="las la-shield-alt"
        label="Cybersecurity Services"
        expand-separator
        header-class="text-primary"
      >
        <q-card class="bg-white">
          <q-card-section>
            <transition name="fade">
              <CybersecurityServices />
            </transition>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
  <!-- Accordion -->
</template>

<script>
import SoftwareDevelopment from "../SubComponent/SoftwareDevelopment.vue";
import ItConsulting from "../SubComponent/ItConsulting.vue";
import { ref } from "vue";
import TestingQA from "src/SubComponent/TestingQA.vue";
import UXUI from "./UXUI.vue";
import DataAnalytics from "src/SubComponent/DataAnalytics.vue";
import InfrastructureServices from "src/SubComponent/InfrastructureServices.vue";
import CybersecurityServices from "src/SubComponent/CybersecurityServices.vue";
import HelpDesk from "./HelpDesk.vue";
export default {
  components: {
    SoftwareDevelopment,
    TestingQA,
    UXUI,
    ItConsulting,
    DataAnalytics,
    HelpDesk,
    InfrastructureServices,
    CybersecurityServices,
  },
  setup() {
    const softDevActive = ref(true);
    const testingQA = ref(false);
    const uxui = ref(false);
    const itcon = ref(false);
    const dataanal = ref(false);
    const helpdesk = ref(false);
    const inser = ref(false);
    const cybersec = ref(false);

    const softDev = () => {
      setTimeout(() => {
        softDevActive.value = true;
      }, 600);
      testingQA.value = false;
      uxui.value = false;
      itcon.value = false;
      dataanal.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;
    };

    const qa = () => {
      setTimeout(() => {
        testingQA.value = true;
      }, 600);
      softDevActive.value = false;
      uxui.value = false;
      itcon.value = false;
      dataanal.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;
    };

    const uxUi = () => {
      setTimeout(() => {
        uxui.value = true;
      }, 600);
      testingQA.value = false;
      softDevActive.value = false;
      itcon.value = false;
      dataanal.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;
    };

    const itCon = () => {
      setTimeout(() => {
        itcon.value = true;
      }, 600);
      uxui.value = false;
      testingQA.value = false;
      softDevActive.value = false;
      dataanal.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;
    };

    const dataAnal = () => {
      setTimeout(() => {
        dataanal.value = true;
      }, 600);
      itcon.value = false;
      uxui.value = false;
      testingQA.value = false;
      softDevActive.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;
    };

    const helpDesk = () => {
      setTimeout(() => {
        helpdesk.value = true;
      }, 600);
      dataanal.value = false;
      itcon.value = false;
      uxui.value = false;
      testingQA.value = false;
      softDevActive.value = false;
      inser.value = false;
      cybersec.value = false;
    };

    const inSer = () => {
      setTimeout(() => {
        inser.value = true;
      }, 600);

      helpdesk.value = false;
      dataanal.value = false;
      itcon.value = false;
      uxui.value = false;
      testingQA.value = false;
      softDevActive.value = false;
      cybersec.value = false;
    };

    const cyberSec = () => {
      setTimeout(() => {
        cybersec.value = true;
      }, 600);
      inser.value = false;
      helpdesk.value = false;
      dataanal.value = false;
      itcon.value = false;
      uxui.value = false;
      testingQA.value = false;
      softDevActive.value = false;
    };

    return {
      softDev,
      softDevActive,
      testingQA,
      qa,
      uxui,
      uxUi,
      itcon,
      itCon,
      dataanal,
      dataAnal,
      helpdesk,
      helpDesk,
      inser,
      inSer,
      cybersec,
      cyberSec,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: auto;
  margin-top: 100px;
  max-width: 1150px;
}
.exploare-offer {
  display: flex;
  background: white;
  box-shadow: 0px 2px 10px rgb(12 39 34 / 5%);
}
.offer-menu {
  min-height: 300px !important;
  position: relative;
  top: -60px;
  right: 40px;
  max-width: 400px;
  min-height: 400px;
  margin-bottom: 100px;
  background: linear-gradient(
    90deg,
    rgba(19, 25, 23, 1) 0%,
    rgba(16, 15, 25, 1) 35%,
    rgba(8, 19, 16, 1) 100%
  );
  color: white;
  font-size: 25px;
  box-shadow: 2px 2px 50px 0.2px gray;
  ul {
    margin-top: 60px;
    margin: auto;
    padding: 20px;
  }
  li {
    cursor: pointer;
    margin: 25px;
    width: 100%;
    height: 100%;
    transition: all 0.2s;
  }
  li:hover {
    background: rgb(26, 255, 102);
    transform: scale(1);
    color: black;
  }
  .list {
    list-style-type: none;
  }
}
.offer-details {
  max-width: 400px;
}
.styleLight {
  background: rgba(26, 255, 102, 0.678);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.dash {
  border: 3px solid orange;
  width: 100px;
  margin-bottom: 10px;
}
.accordion {
  display: none;
}

@media (max-width: 768px) {
  .card {
    display: none;
  }
  .accordion {
    margin: auto;
    margin-top: 100px;
    display: block;
    max-width: 600px;
  }
}

@media (max-width: 500px) {
  .card {
    display: none;
  }
  .accordion {
    margin: auto;
    margin-top: 50px;
    display: block;
    max-width: 350px;
  }
}
</style>
