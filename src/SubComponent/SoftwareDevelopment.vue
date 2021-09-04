<template>
  <div :style="isDarkBg" class="software-dev">
    <div class="title">
      <h1>Software Development</h1>
      <div class="dash"></div>
      <div class="details">
        <p :style="isDarkText">
          The development of reliable and scalable software solutions for any
          OS, browser and device. We bring together deep industry expertise and
          the latest IT advancements to deliver custom solutions and products
          that perfectly fit the needs and behavior of their users.
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li :style="isDarkText">Software consulting</li>
        <li :style="isDarkText">Software development</li>
        <li :style="isDarkText">Team augmentation</li>
        <li :style="isDarkText">Legacy software modernization</li>
      </ul>
      <ul>
        <li :style="isDarkText">Custom software development</li>
        <li :style="isDarkText">Software product development</li>
        <li :style="isDarkText">Cloud application development</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
export default {
  setup() {
    const $store = useStore();
    // console.log($store.state.darkText)
    const isDarkText = computed({
      get: () => $store.state.darkText,
    });
    const isDarkBg = computed({
      get: () => $store.state.darkBG,
    });

    return { isDarkBg, isDarkText}
  },
};
</script>

<style lang="scss" scoped>
.features {
  display: flex;
}
.software-dev {
  width: 350px;
  margin-left: 10%;
}
.title {
  h1 {
    font-size: 30px;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    color: #3b3c3d;
  }
}
li {
  list-style-type: none;
  margin: 15px;
  font-size: 16px;
  color: #333;
}

li {
  padding-left: 1em;
  text-indent: -0.7em;
}

li::before {
  content: "\f105";
  color: rgb(26, 255, 102); /* or whatever color you prefer */
  background: rgb(26, 255, 102);
  margin-right: 4px;
}

.dash {
  border: 3px solid orange;
  width: 100px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .software-dev {
    margin-left: 10px;
  }
}

@media (max-width: 500px) {
  .software-dev {
    margin-left: 10px;
    max-width: 250px;
  }
  .title {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
      color: #3b3c3d;
    }
    .details {
      max-width: 240px;
    }
  }
  .features {
    max-width: 250px;
    flex-direction: column;
  }
}
</style>
