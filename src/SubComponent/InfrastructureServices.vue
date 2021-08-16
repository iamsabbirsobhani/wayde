<template>
  <div class="software-dev">
    <div class="title">
      <h1>Infrastructure Services</h1>
      <div class="dash"></div>
      <p>
        We apply our 10-year experience to offer a full set of infrastructure services. Being ISO 2700 certified allows us to guarantee that we access our customers' without creating any security risks or vulnerabilities.
      </p>
    </div>
    <div class="features">
      <ul>
        <li>Managed IT support</li>
        <li>Cloud consulting and management</li>
        <li>Virtual desktop consulting, implementation and support</li>
      </ul>
      <ul>
        <li>Data center support and management</li>
        <li>DevOps consulting and implementation</li>
        <li>Networking management services</li>
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
