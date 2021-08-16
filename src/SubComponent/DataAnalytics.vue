<template>
  <div class="software-dev">
    <div class="title">
      <h1>Data Analytics</h1>
      <div class="dash"></div>
      <p>
        We support businesses in achieving fact-based decision-making by converting their historical and real-time, traditional and big data into actionable insights. Our services are tailored to make the raw data and the environment ready, as well as strengthen the business with advanced analytics capabilities.
      </p>
    </div>
    <div class="features">
      <ul>
        <li>Business Intelligence</li>
        <li>Data Warehousing</li>
        <li>Data Management</li>
        <li>Data Analytics as a Service</li>
      </ul>
      <ul>
        <li>Big Data</li>
        <li>Data Science</li>
        <li>Machine and Deep Learning</li>
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
