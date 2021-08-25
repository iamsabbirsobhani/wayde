<template>
  <div class="consultation-card">
    <div class="bdc-subtitle">
      <h3>NEED A CONSULTATION?</h3>
      <div class="dash"></div>
    </div>
    <q-card class="consultation-my-card">
      <img src="../assets/main-deco-bg.png" alt="" />
      <q-card-section>
        <p class="drop-title">
          Drop us a line! We are here to answer your questions 24/7.
        </p>
        <div class="form-wrapper">
          <form>
            <div>
              <input type="text" placeholder="Full Name" name="name" required />
              <input
                type="text"
                placeholder="Company"
                name="company"
                required
              />
              <input
                type="email"
                placeholder="Work Email"
                name="workemail"
                required
              />
              <input
                type="number"
                placeholder="Work Phone"
                name="workphone"
                required
              />
            </div>
            <div class="quill-editor">
              <QuillEditor theme="snow" />
              <button>DISCUSS MY NEEDS</button>
            </div>
          </form>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  components: {
    QuillEditor,
  },
  setup() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      console.log("dark mode");
    } else {
      console.log("light mode");
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap");

.consultation-card {
  max-width: 900px;
  margin: auto;
  margin-top: 150px;
}
.consultation-my-card {
  position: relative;
  height: 550px !important;
  background: black;
  // background: white;
  img {
    position: absolute;
    max-width: 350px;
    bottom: 0;
    right: 0;
  }
  transition: all 0.24s;
}
.consultation-my-card:hover {
  transform: scale(1.001);
  box-shadow: 0 3px 15px -2px;
  background: rgb(5, 5, 5);
  // background: rgb(255, 255, 255);
}

form {
  width: 650px;
  margin-top: 50px;
  margin-left: 50px;
  margin: 50px auto;
  display: flex;
}

//form to center
// form {text-align = center; }, input { display: inline-block;}

input {
  // display: flex;
  // flex-direction: column;
  height: 50px;
  width: 300px;
  padding-left: 10px;
  border-radius: 3px;
  background-color: white;
  border: 1px solid rgb(255, 255, 255);
  outline: none;
  margin-top: 20px;
  transition: all 0.3s;
  font-family: "Poppins";
}

input:hover {
  box-shadow: 1px 1px 10px 0.5px white;
}

button {
  border-radius: 3px;
  width: 300px;
  height: 50px;
  outline: none;
  color: white;
  border: none;
  cursor: pointer;
  background-color: #5720f2;
  transition: all cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.3s;
  margin-top: 20px;
}

button:hover {
  background-color: #6d3bf8;
  color: white;
  box-shadow: 0.1px 0px 20px 0.01px #6d3bf8;
  transform: scale(1.02);
}

button:focus {
  background-color: #936dfc;
}

.dash {
  border: 3px solid orange;
  width: 100px;
  margin-bottom: 10px;
}

.bdc-subtitle {
  margin-bottom: 50px;
  h3 {
    font-size: 20px;
  }
}

.drop-title {
  margin-top: 20px;
  margin-left: 50px;
}

// .form-wrapper{
//   display: flex;
//   // flex-direction: column;
//   justify-content: space-around;
// }

.quill-editor {
  max-width: 400px;
  max-height: 200px;
  margin-left: 20px;
  margin-top: 20px;
}

.contact {
  margin-left: 50px;
  width: 400px;
}

@media (max-width: 500px) {
  .consultation-my-card {
    height: 800px !important;
  }
  .consultation-card {
    width: 320px;
  }
  .consultation-my-card {
    img {
      position: absolute;
      max-width: 280px;
      bottom: 0;
      right: 0;
    }
  }
  input {
    display: inline-block;
    height: 50px;
    width: 260px;
    margin-left: unset;
  }
  button {
    height: 50px;
    width: 260px;
  }
  form {
    max-width: 280px;
    margin-left: unset;
    margin-top: 20px;
    text-align: center;
    flex-direction: column;
  }
  .drop-title {
    margin-top: 20px;
    margin-left: unset;
  }
}
</style>
