<template>
  <div class="software-dev">
    <div class="title">
      <h1>Testing & QA</h1>
      <div class="dash"></div>
      <div class="details">
        <p>
          We offer full-range QA and testing outsourcing services, can help to
          develop your QA or enhance the existing one, assist you in TCoE setup
          and evolution. We perform end-to-end testing of mobile, web and
          desktop application at each stage of the development lifecycle.
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>QA outsourcing</li>
        <li>Security testing</li>
        <li>Usability testing</li>
        <li>Test automation</li>
      </ul>
      <ul>
        <li>QA consulting</li>
        <li>Functional testing</li>
        <li>Performance testing</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.features {
  display: flex;
}
.software-dev {
  margin-top: 20px;
  width: 500px;
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
