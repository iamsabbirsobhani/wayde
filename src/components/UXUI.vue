<template>
  <div class="software-dev">
    <div class="title">
      <h1>UX/UI Design</h1>
      <div class="dash"></div>
      <p>
        User experience and user interface design for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.
      </p>
    </div>
    <div class="features">
      <ul>
        <li>User Interface(UI) Design</li>
        <li>Software-as-as-Service(Saas) UI Design</li>
        <li>User Experience(UX) Design</li>
        <li>Responsive Web Design</li>
      </ul>
      <ul>
        <li>Responsive Web App Design</li>
        <li>Ecommerce Website Design</li>
        <li>Website Redesign</li>
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
