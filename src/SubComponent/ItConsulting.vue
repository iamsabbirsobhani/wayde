<template>
  <div :style="isDarkBg" class="software-dev">
    <div class="title">
      <h1>IT Consulting</h1>
      <div class="dash"></div>
      <div class="details">
        <p :style="isDarkText">
          Our experts can help to develop and implement an effective IT
          strategy, assist in smooth digital transformation and system
          integration as well as advise on improvements to your digital customer
          experience.
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li :style="isDarkText">Digital transformation Consulting</li>
        <li :style="isDarkText">Digital Crisis Management Consulting</li>
        <li :style="isDarkText">Solution consulting</li>
        <li :style="isDarkText">Enterprise IT consulting</li>
      </ul>
      <ul>
        <li :style="isDarkText">Project Management Consulting</li>
        <li :style="isDarkText">IT Service Management Consulting</li>
        <li :style="isDarkText">Platform consulting</li>
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
  width: 400px;
  margin-left: 50%;
}
.title {
  h1 {
    font-size: 40px;
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
