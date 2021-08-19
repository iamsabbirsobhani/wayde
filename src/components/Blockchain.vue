<template>
  <div id="bcd" class="blockchain">
    <div class="blockchain-dev-ser">
      <div class="bdc-title">
        <h3>Blockchain Development Services</h3>
        <div class="dash"></div>
      </div>
      <img src="../assets/blockchain-software-development-cover.svg" alt="" />
      <div class="bdc-intro">
        <p>
          Blockchain development services aim at creating decentralized
          blockchain networks that allow for establishing new business models
          and provide businesses with increased traceability of data and
          transactions.
        </p>
        <p>
          Having <strong> 32 years of experience </strong> in software
          development and constantly growing its competencies in innovative
          domains, ScienceSoft offers end-to-end blockchain software and
          application development,<strong>
            from smart contracts to dApps and DAOs.
          </strong>
        </p>
      </div>
    </div>

    <div class="timeline">
      <TimelineBlockchains />
    </div>

    <!-- BLOCKCHAIN SOLUTIONS WE DELIVER -->
    <div id="bswd" class="bswd">
      <div class="bdc-subtitle">
        <h3>BLOCKCHAIN SOLUTIONS WE DELIVER</h3>
        <div class="dash"></div>
      </div>
      <div class="bswd-card">
        <q-card
          class="my-card-bswd"
          style="overflow: auto"
          v-for="item in bswd"
          :key="item"
        >
          <q-card-section>
            <div class="text-h6">{{ item.title }}</div>
          </q-card-section>
          <q-card-section v-if="verticalPanel">
              <div v-html="item.lottie"></div>
          </q-card-section>
          <q-card-section>
            <p>{{ item.details }}</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- BLOCKCHAIN SOLUTIONS WE DELIVER -->

    <!-- BLOCKCHAIN USE CASES WE SUPPORT -->
    <div class="bucws" id="bucws">
      <div class="bdc-subtitle">
        <h3>BLOCKCHAIN USE CASES WE SUPPORT</h3>
        <div class="dash"></div>
      </div>
      <div class="bucws-card">
        <q-card
          class="my-card-bucws"
          style="overflow: auto"
          v-for="it in bucwss"
          :key="it"
        >
          <q-card-section>
            <div class="text-h6">{{ it.title }}</div>
          </q-card-section>
          <q-card-section>
            <img :src="require(`assets/bucws/${it.src}.svg`)" alt="" />
          </q-card-section>
          <q-card-section>
            <p>{{ it.details }}</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- BLOCKCHAIN USE CASES WE SUPPORT -->

    <!-- CHOOSE YOUR SERVICE OPTION -->
    <div class="cyso">
      <div class="bdc-subtitle">
        <h3>CHOOSE YOUR SERVICE OPTION</h3>
        <div class="dash"></div>
      </div>

      <div class="cyso-card">
        <q-card
          class="my-card-cyso"
          style="overflow: auto"
          v-for="item in cyso"
          :key="item"
        >
          <q-card-section>
            <div class="text-h6">{{ item.title }}</div>
          </q-card-section>
          <q-card-section>
            <ul v-for="list in item.lists" :key="list">
              <li>{{ list }}</li>
            </ul>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- CHOOSE YOUR SERVICE OPTION -->

    <!-- CHOOSE YOUR SERVICE OPTION -->
    <div id="twr" class="twr">
      <div class="bdc-subtitle">
        <h3>TECHNOLOGIES WE RELY ON IN BLOCKCHAIN SOFTWARE DEVELOPMENT</h3>
        <div class="dash"></div>
      </div>

      <div class="twr-card">
        <q-card v-if="verticalPanel" class="my-card-twr" style="overflow: auto">
          <q-card-section>
            <!-- <div class="text-h6">{{ item.title }}</div> -->
          </q-card-section>
          <q-card-section>
            <TabPanelBlockchain />
          </q-card-section>
        </q-card>
        <TabPanel v-else />
      </div>
    </div>
    <!-- CHOOSE YOUR SERVICE OPTION -->

    <!-- BLOCKCHAIN DEVELOPMENT PRINCIPLES WE STICK TO -->
    <div id="bdps" class="bdp-card">
      <div class="bdc-subtitle">
        <h3>BLOCKCHAIN DEVELOPMENT PRINCIPLES WE STICK TO</h3>
        <div class="dash"></div>
      </div>
      <q-card class="my-card-bdp">
        <q-card-section class="bdp-card-flex">
          <div>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_m9zragkd.json"
              background="transparent"
              speed="1"
              style="width: 300px; height: 300px"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div class="bdc-subtitle">
            <h3>TECHNOLOGIES WE RELY ON IN BLOCKCHAIN SOFTWARE DEVELOPMENT</h3>
            <div class="dash"></div>
            <div>
              <p>
                We devise a strategy to prevent governance, process, and
                technology risks in compliance with
                <strong>GDPR, HIPAA, PSI/DSS, AML, ISO 27001/27002,</strong>
                and other security standards. We also enforce policies to
                confirm transaction validity, implement authorization controls
                for APIs, set up privileged access management, and implement
                other security-boosting strategies.
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card-bdp" style="margin-top: 100px">
        <q-card-section class="bdp-card-flex">
          <img src="../assets/our-principles_guaranteed-roi.svg" alt="" />
          <div class="bdc-subtitle">
            <h3>Guaranteed ROI</h3>
            <div class="dash"></div>
            <div>
              <p>
                We help you achieve <strong> ROI </strong>for blockchain-based software in <strong> 12-18
                months.</strong> Despite the technology being capital-intensive, it
                allows non-IT enterprises to create more profitable business
                models and lower the costs of transactions, business operations,
                and compliance. And SaaS companies can benefit by attracting new
                customers with highly secure products that guarantee transaction
                transparency.
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <!-- BLOCKCHAIN DEVELOPMENT PRINCIPLES WE STICK TO -->

    <!-- last blockchains -->
    <div class="footer-block">
      <div class="bdc-subtitle">
        <h3>WHY YOU SHOULD START YOUR BLOCKCHAIN INITIATIVE</h3>
        <div class="dash"></div>
      </div>
      <div>
        <p>
          <strong> 60%</strong> of CIOs across sectors expect to adopt
          blockchain <strong>in the next three years.</strong> Start your
          blockchain development project now to stay ahead of the competition!
          Source: Gartner
        </p>
      </div>
    </div>
    <!-- last blockchains -->
    <!-- Tab panels -->
    <!-- Tab panels -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import TabPanelBlockchain from "../SubComponent/TabPanelBlockchain.vue";
import TabPanel from "src/SubComponent/TabPanel.vue";
import TimelineBlockchains from "./TimelineBlockchains.vue";
export default {
  components: { TabPanelBlockchain, TabPanel, TimelineBlockchains },
  setup() {
    const bswd = ref({
      a: {
        title: `Smart contracts`,
        details: `Protocols that guarantee the integrity of multi-party agreements and automatically enforce fixed obligations.`,
        lottie: `<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_n35norgx.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop  autoplay></lottie-player>`
      },
      b: {
        title: `Blockchain wallets`,
        details: `Digital wallets for storing and manipulating cryptocurrencies (Bitcoin, Litecoin, etc.)`,
        lottie: `<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_yZpLO2.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop  autoplay></lottie-player>`
      },
      c: {
        title: `Decentralized apps (dApps)`,
        details: `Encrypted peer-to-peer apps with no single point of failure and zero downtime.`,
        lottie: `<lottie-player src="https://assets4.lottiefiles.com/packages/lf20_lln7m43m.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop  autoplay></lottie-player>`
      },
      d: {
        title: `Decentralized Organizations (DOs and DAOs)`,
        details: `Decision-making platforms that power highly productive and low-stress communities with no central authority.`,
        lottie: `<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_eijHZ0.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop  autoplay></lottie-player>`
      },
      e: {
        title: `Private blockchains`,
        details: `Secure and scalable permission-based ecosystems with minimized downtime.`,
        lottie: `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_knixvxzq.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop  autoplay></lottie-player>`
      },
    });

    const bucwss = ref({
      a: {
        title: `Supply chain management`,
        details: `Facilitated supply chain cycle with faster supplier contract management, transparent provenance tracking and asset condition monitoring, asset protection, and more.`,
        src: `supply_chain_management`,
      },
      b: {
        title: `Asset management`,
        details: `Unchangeable asset records and asset tokenization, helping to provide secure warranties and prevent counterfeiting.`,
        src: `asset-management`,
      },
      c: {
        title: `Cross-border payments and settlements`,
        details: `Secure and fast energy settlements and cross-carrier payments with no middleman-services like PayPal or Stripe.`,
        src: `payment`,
      },
      d: {
        title: `Document management`,
        details: `Guaranteed accuracy, regulatory compliance, automated time stamping and easy records reconciliation in records management.`,
        src: `development-documentation`,
      },
      e: {
        title: `Claims management`,
        details: `More secure and faster insurance claims processing and filing with reduced manual work, allowing to cut process costs.`,
        src: `insurance_claim`,
      },
      f: {
        title: `Trade`,
        details: `Reduced fraud, minimized delays, and zero lost agreement opportunities in trade finance and commodity trading due to the use of smart contracts.`,
        src: `partners`,
      },
      g: {
        title: `Identity management`,
        details: `Irrevocable credential data and zero-knowledge proof encryption scheme to prevent unauthorized access.`,
        src: `identification`,
      },
      h: {
        title: `Customer experience management`,
        details: `Automated loyalty program and reward points management, streamlined and facilitated customer onboarding.`,
        src: `social-media`,
      },
    });

    const cyso = ref({
      a: {
        title: `Blockchain consulting`,
        lists: {
          0: `Business case development, TCO calculation.`,
          1: `Blockchain implementation strategy design and technical product management (idea productization, architecture design).`,
          2: `Blockchain security consulting.`,
        },
      },
      b: {
        title: `Full-cycle blockchain development`,
        lists: {
          0: `Blockchain technology consulting.`,
          1: `Blockchain architecture design.`,
          2: `Smart contract and client application development.`,
          3: `Testing and quality assurance.`,
          4: `Blockchain software management.`,
        },
      },
      c: {
        title: `Blockchain application integration`,
        lists: {
          0: `Integrating a newly built decentralized application (smart contract and client app) into an enterprise ecosystem.`,
          1: `Integrating components of a blockchain-based ecosystem built on different distributed ledger platforms into a coherent ecosystem.`,
        },
      },
    });

    // variable
    const windWidth = ref(null);
    const verticalPanel = ref(null);

    onMounted(() => {
      windWidth.value = window.innerWidth;
      if (windWidth.value > 600) {
        verticalPanel.value = true;
      } else if (600 > windWidth.value) {
        verticalPanel.value = false;
      }
    });


    return {
      tab: ref("mails"),
      innerTab: ref("innerMails"),
      splitterModel: ref(20),
      bswd,
      bucwss,
      cyso,
      verticalPanel,
    };
  },
};
</script>

<style lang="scss" scoped>
.blockchain {
  margin: auto;
  margin-top: 150px;
  max-width: 1150px;
}
.blockchain-dev-ser {
  img {
    max-width: 700px;
    text-align: center;
  }
}
.bdc-title {
  margin-bottom: 50px;
}
.bdc-subtitle {
  margin-bottom: 50px;
  h3 {
    font-size: 20px;
  }
}
.dash {
  border: 3px solid orange;
  width: 100px;
  margin-bottom: 10px;
}

.bswd {
  margin-top: 150px;
}

.my-card-bswd {
  width: 250px;
//   height: 300px;
  margin: 10px;
  transition: all 0.24s;
  p {
    margin-left: 10px;
    color: #3b3c3d;
    line-height: 1.78;
    letter-spacing: normal;
    widows: 2;
    word-spacing: 0px;
    orphans: 2;
    -webkit-text-stroke-width: 0px;
    font-size: 17px;
  }
}

.my-card-bswd:hover {
  transform: scale(1.0001);
  box-shadow: 0 3px 15px -2px;
}

.bswd-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1100px;
}

.bucws {
  margin-top: 150px;
}

.bucws-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1100px;
  p {
    margin-left: 10px;
    color: #3b3c3d;
    line-height: 1.78;
    letter-spacing: normal;
    widows: 2;
    word-spacing: 0px;
    orphans: 2;
    -webkit-text-stroke-width: 0px;
    font-size: 17px;
  }
}

.my-card-bucws {
  width: 300px;
  margin: 10px;
  border-top: 10px solid #005eb8;
  transition: all 0.24s;
}

.my-card-bucws:hover {
  transform: scale(1.0001);
  box-shadow: 0 3px 15px -2px;
}

.cyso {
  margin-top: 150px;
}

.cyso-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1100px;
}

.my-card-cyso {
  width: 300px;
  margin: 10px;
  border-top: 10px solid #005eb8;
  ul {
    list-style: none;
  }
  ul li::before {
    content: "\2022";
    color: red;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: 1em;
  }
  li {
    margin-left: 10px;
    color: #3b3c3d;
    line-height: 1.78;
    letter-spacing: normal;
    widows: 2;
    word-spacing: 0px;
    orphans: 2;
    -webkit-text-stroke-width: 0px;
    font-size: 17px;
  }
  transition: all 0.24s;
}

.my-card-cyso:hover {
  transform: scale(1.0001);
  box-shadow: 0 3px 15px -2px;
}

.twr {
  margin-top: 150px;
}

.cyso-twr {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1100px;
}

.my-card-twr {
  //   width: 300px;
  margin: 10px;
  border-top: 10px solid #005eb8;
}

.bdp-card {
  margin-top: 150px;
}

.bdp-card-flex {
  display: flex;
  img {
    max-width: 200px;
  }
  p {
    margin-left: 10px;
    color: #3b3c3d;
    line-height: 1.78;
    letter-spacing: normal;
    widows: 2;
    word-spacing: 0px;
    orphans: 2;
    -webkit-text-stroke-width: 0px;
    font-size: 17px;
  }
}

.bdc-intro {
  margin-top: 50px;
  margin-bottom: 50px;
  p {
    margin-left: 10px;
    color: #3b3c3d;
    line-height: 1.78;
    letter-spacing: normal;
    widows: 2;
    word-spacing: 0px;
    orphans: 2;
    -webkit-text-stroke-width: 0px;
    font-size: 17px;
  }
}

.footer-block {
  margin-top: 150px;
  h3 {
    text-align: center;
    font-size: 30px;
  }
  .dash {
    margin: auto;
  }
  p {
    margin-left: 10px;
    color: #3b3c3d;
    line-height: 1.78;
    letter-spacing: normal;
    widows: 2;
    word-spacing: 0px;
    orphans: 2;
    -webkit-text-stroke-width: 0px;
    font-size: 20px;
  }
  strong {
    font-size: 20px;
    color: #005eb8;
  }
}
@media (max-width: 500px) {
  .bdc-title {
    h3 {
      font-size: 22px;
      font-weight: 700px;
    }
  }
  .bswd-card {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
  }
  .bucws-card {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
  }
  .my-card-bswd {
    width: 300px;
  }
  .blockchain {
    max-width: 350px;
  }
  .bdp-card-flex {
    flex-direction: column;
    img {
      max-width: unset;
    }
  }
}
</style>
