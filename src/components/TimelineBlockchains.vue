<template>
  <div id="bcc" class="timeline">
    <div class="q-px-lg q-pb-md">
      <q-timeline color="secondary">
        <q-timeline-entry heading><h4>Blockchain cycle</h4></q-timeline-entry>

        <q-timeline-entry
          @click="scroll(`bswd`)"
          title="Solutions We Develop"
          subtitle="Wayde"
          icon="lab la-servicestack"
          style="cursor: pointer;"
          color="lime-4"
        >
          <ul>
            <li>Smart contracts</li>
            <li>Blockchain wallets</li>
            <li>Decentralized apps (dApps)</li>
            <li>Decentralized Organizations (DOs and DAOs)</li>
            <li>Private blockchains</li>
          </ul>
        </q-timeline-entry>

        <q-timeline-entry
          title="Use Cases We Support"
          subtitle="Wayde"
          icon="las la-american-sign-language-interpreting"
          @click="scroll(`bucws`)"
          style="cursor: pointer"
          color="lime-5"
        >
          <div>
            <ul>
              <li>Supply chain management</li>
              <li>Asset management</li>
              <li>Cross-border payments and settlements</li>
              <li>Document management</li>
              <li>Claims management</li>
              <li>Trade</li>
              <li>Identity management</li>
              <li>Customer experience management</li>
            </ul>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Our Service Options"
          subtitle="Wayde"
          icon="las la-braille"
          @click="scroll(`cyso`)"
          style="cursor: pointer"
          color="lime-6"
        >
          <div>
            <ul>
              <li>Blockchain consulting</li>
              <li>Full-cycle blockchain development</li>
              <li>Blockchain application integration</li>
            </ul>
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="Blockchain Tech We Use"
          subtitle="Wayde"
          icon="las la-microchip"
          @click="scroll(`twr`)"
          style="cursor: pointer"
          color="lime-7"
        >
          <div>
            <ul>
              <li>Blockchain tools</li>
              <li>Programming languages</li>
              <li>Cloud platforms</li>
            </ul>
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="Principles We Stick To"
          subtitle="Wayde"
          icon="lab la-wolf-pack-battalion"
          @click="scroll(`bdps`)"
          style="cursor: pointer"
          color="lime-8"
        >
          <div>
            <ul>
              <li>Compliance with data privacy and security regulations</li>
              <li>Guaranteed ROI</li>
            </ul>
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const scroll = (id) => {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    };

    return { scroll };
  },
});
</script>

<style lang="scss" scoped></style>
