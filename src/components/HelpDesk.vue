<template>
  <div class="software-dev">
    <div class="title">
      <h1>Help Desk Services</h1>
      <div class="dash"></div>
      <p>
        Help desk services for your IT environment or software products. We take on solving diverse issues from answering application functionality questions to performing fixes and enhancements on the code level for improved adoption of software, its smooth functioning and increased end user satisfaction.
      </p>
    </div>
    <div class="features">
      <ul>
        <li>Help desk outsourcing</li>
        <li>Outsourced help desk for MSP</li>
      </ul>
      <ul>
        <li>IT help desk services</li>
        <li>NOC outsourcing</li>
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
