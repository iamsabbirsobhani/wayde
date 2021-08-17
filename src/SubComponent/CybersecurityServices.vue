<template>
  <div class="software-dev">
    <div class="title">
      <h1>Cybersecurity Services</h1>
      <div class="dash"></div>
      <div class="details">
        <p>
          Equipped with 16-year experience in information security and employing
          ISO 27001 certified information security management practices, we help
          to achieve the robust protection of the companies’ applications and
          networks.
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>Managed security services</li>
        <li>Information security consulting</li>
        <li>Application security implementation</li>
      </ul>
      <ul>
        <li>Compliance testing</li>
        <li>Security code review</li>
        <li>Vulnerability assessment and penetration testing</li>
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
