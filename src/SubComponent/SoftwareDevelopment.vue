<template>
  <div class="software-dev">
    <div class="title">
      <h1>Software Development</h1>
      <div class="dash"></div>
      <p>
        The development of reliable and scalable software solutions for any OS,
        browser and device. We bring together deep industry expertise and the
        latest IT advancements to deliver custom solutions and products that
        perfectly fit the needs and behavior of their users.
      </p>
    </div>
    <div class="features">
      <ul>
        <li>Software consulting</li>
        <li>Software development</li>
        <li>Team augmentation</li>
        <li>Legacy software modernization</li>
      </ul>
      <ul>
        <li>Custom software development</li>
        <li>Software product development</li>
        <li>Cloud application development</li>
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
