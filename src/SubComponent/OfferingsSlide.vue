<template>
  <div class="container">
  <div class="row">
    <div class="card">
      <SoftwareDevelopment/>
    </div>
    <div class="card">
      <TestingQA/>
    </div>
    <div class="card">
      <UXUI/>
    </div>
    <div class="card">
      <ItConsulting/>
    </div>
    <div class="card">
      <DataAnalytics/>
    </div>
    <div class="card">
      <HelpDesk/>
    </div>
    <div class="card">
      <InfrastructureServices/>
    </div>
    <div class="card">
      <CybersecurityServices/>
    </div>

  </div>
</div>
</template>

<script>
import SoftwareDevelopment from "../SubComponent/SoftwareDevelopment.vue";
import ItConsulting from "../SubComponent/ItConsulting.vue";
import { ref, computed } from "vue";
import TestingQA from "src/SubComponent/TestingQA.vue";
import UXUI from "../components/UXUI.vue";
import DataAnalytics from "src/SubComponent/DataAnalytics.vue";
import InfrastructureServices from "src/SubComponent/InfrastructureServices.vue";
import CybersecurityServices from "src/SubComponent/CybersecurityServices.vue";
import HelpDesk from "../components/HelpDesk.vue";
import { useStore } from "vuex"
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
}
</script>

<style lang="scss" scoped>
.container {
    // margin-top: 150px;
}
.row{
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.card {
  /*float: left;*/
//   max-width: 33.333%;
  padding: .75rem;
  margin-bottom: 0.5rem;
  border: 0;
  flex-basis: 33.333%;
  flex-grow: 0;
  flex-shrink: 0;
}

.card > img {
  margin-bottom: .75rem;
}

.card-text {
  font-size: 85%;
}
</style>