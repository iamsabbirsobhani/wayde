<template>
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
          <li :class="{ styleLight: cybersec }" @click="cyberSec">Cybersecurity Services</li>
        </ul>
      </div>
      <div class="offer-details">
        <SoftwareDevelopment v-if="softDevActive" />
        <TestingQA v-if="testingQA" />
        <UXUI v-if="uxui" />
        <ItConsulting v-if="itcon" />
        <DataAnalytics v-if="dataanal" />
        <HelpDesk v-if="helpdesk" />
        <InfrastructureServices v-if="inser"/>
        <CybersecurityServices v-if="cybersec"/>
      </div>
    </q-card-section>
  </q-card>
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
    CybersecurityServices
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
      softDevActive.value = true;
      testingQA.value = false;
      uxui.value = false;
      itcon.value = false;
      dataanal.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;
    };

    const qa = () => {
      testingQA.value = true;
      softDevActive.value = false;
      uxui.value = false;
      itcon.value = false;
      dataanal.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;

    };

    const uxUi = () => {
      uxui.value = true;
      testingQA.value = false;
      softDevActive.value = false;
      itcon.value = false;
      dataanal.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;

    };

    const itCon = () => {
      itcon.value = true;
      uxui.value = false;
      testingQA.value = false;
      softDevActive.value = false;
      dataanal.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;


    };

    const dataAnal = () => {
      dataanal.value = true;
      itcon.value = false;
      uxui.value = false;
      testingQA.value = false;
      softDevActive.value = false;
      helpdesk.value = false;
      inser.value = false;
      cybersec.value = false;


    };

    const helpDesk = () => {
      helpdesk.value = true;
      dataanal.value = false;
      itcon.value = false;
      uxui.value = false;
      testingQA.value = false;
      softDevActive.value = false;
      inser.value = false;
      cybersec.value = false;

    };

    const inSer = () => {
      inser.value = true;
      helpdesk.value = false;
      dataanal.value = false;
      itcon.value = false;
      uxui.value = false;
      testingQA.value = false;
      softDevActive.value = false;
      cybersec.value = false;
    };

    const cyberSec = () => {
      cybersec.value = true;
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
      cyberSec
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: auto;
  margin-top: 170px;
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
</style>
