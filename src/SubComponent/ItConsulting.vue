<template>
  <div class="software-dev">
    <div class="title">
      <h1>IT Consulting</h1>
      <div class="dash"></div>
      <p>
        Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.
      </p>
    </div>
    <div class="features">
      <ul>
        <li>Digital transformation Consulting</li>
        <li>Digital Crisis Management Consulting</li>
        <li>Solution consulting</li>
        <li>Enterprise IT consulting</li>
      </ul>
      <ul>
        <li>Project Management Consulting</li>
        <li>IT Service Management Consulting</li>
        <li>Platform consulting</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.features{
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
  text-indent: -.7em;
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
</style>
