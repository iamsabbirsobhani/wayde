<template>
  <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="consultation-card">
    <div class="bdc-subtitle">
      <h3>NEED A CONSULTATION?</h3>
      <div class="dash"></div>
    </div>
    <q-card :class="{'consultation-my-card': isDark, 'consultation-my-card2': !isDark}">
      <img src="../assets/main-deco-bg.png" alt="" />
      <q-card-section>
        <p class="drop-title">
          Drop us a line! We are here to answer your questions 24/7.
        </p>
        <div class="form-wrapper">
          <form @submit.prevent="formSubmit">
            <div class="input-wrapper">
              <input
                v-model="fullName"
                type="text"
                placeholder="Full Name"
                name="name"
                required
               :class="{inp: !isDark}"
              />
              <input
              :class="{inp: !isDark}"
                v-model="company"
                type="text"
                placeholder="Company"
                name="company"
                required
              />
              <input
              :class="{inp: !isDark}"
                v-model="workEmail"
                type="email"
                placeholder="Work Email"
                name="workemail"
                required
              />
              <input
              :class="{inp: !isDark}"
                v-model="workPhone"
                type="number"
                placeholder="Work Phone"
                name="workphone"
                required
              />
            </div>
            <div class="quill-editor">
              <!-- <QuillEditor
                placeholder="How can we help you?"
                contentType="html"
                v-model:content="qEditor"
                theme="snow"
              /> -->
              <q-editor
                style="text-align: start"
                :dark="isDark"
                v-model="qEditor"
                placeholder="How can we help you?"
                min-height="10rem"
              />
              <button>DISCUSS MY NEEDS</button>
            </div>
          </form>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
// import { QuillEditor } from "@vueup/vue-quill";
import { useQuasar } from "quasar";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import AOS from "aos";

export default {
  components: {},
  setup() {
    const $store = useStore();
      // console.log($store.state.darkText)
    const isDarkText = computed({
      get: () => $store.state.darkText,
    });
    const isDarkBg = computed({
      get: () => $store.state.darkBG,
    });
    const isDark = computed({
      get: () => $store.state.dark,
    });



    const $q = useQuasar();
    function customBtn(value) {
      $q.dialog({
        dark: $store.state.dark,
        title: "Confirm",
        message: `${value.fullName}, Your response have been submitted. Thank you.`,
        ok: {
          push: true,
        },
        // cancel: {
        //   push: true,
        //   color: "negative",
        // },
        persistent: true,
      })
        .onOk(() => {
          // console.log('>>>> OK')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    function alert(value) {
      $q.dialog({
        dark: $store.state.dark,
        title: "Alert",
        message: `${value}`,
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }


    // if (
    //   window.matchMedia &&
    //   window.matchMedia("(prefers-color-scheme: dark)").matches
    // ) {
    //   console.log("dark mode");
    // } else {
    //   console.log("light mode");
    // }

    // variable
    const fullName = ref(null);
    const company = ref(null);
    const workEmail = ref(null);
    const workPhone = ref(null);
    const qEditor = ref(null);
    // variable

    const formSubmit = async () => {
      let data = {
        fullName: fullName.value,
        company: company.value,
        workEmail: workEmail.value,
        workPhone: workPhone.value,
        quillEditor: qEditor.value,
      };

      try {
        const res = await fetch("http://127.0.0.1:8000/api/waydes/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const resMsg = await res.json();

        if (res.status == 201) {
          customBtn(resMsg);
        }
        console.log("Request succeeded with JSON response", resMsg.fullName);
        console.log("Request succeeded with JSON response", res.status);
        if (resMsg) {
          fullName.value = null;
          company.value = null;
          workEmail.value = null;
          workPhone.value = null;
          qEditor.value = ``;
        }
      } catch (error) {
        console.log("Request failed", error);
        fullName.value = null;
        company.value = null;
        workEmail.value = null;
        workPhone.value = null;
        qEditor.value = ``;
        alert(`${error}`);
      }
    };
    onMounted(() => {
      // AOS.init();
    })

    return {
      formSubmit,
      fullName,
      company,
      workEmail,
      workPhone,
      qEditor,
      customBtn,
      isDark
    };
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

.consultation-my-card2 {
  position: relative;
  height: 550px !important;
  // background: black;
  background: white;
  img {
    position: absolute;
    max-width: 350px;
    bottom: 0;
    right: 0;
  }
  transition: all 0.24s;
}

.consultation-my-card2:hover {
  transform: scale(1.001);
  box-shadow: 0 3px 15px -2px;
  background: rgb(255, 255, 255);
  // background: rgb(255, 255, 255);
}

form {
  width: 750px;
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

.inp{
  border: 1px solid #5720f2;
  transition: all 0.1s ease;
}

.inp:hover{
  border: 2px solid #5720f2;
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
  max-width: 500px;
  // max-height: 200px;
  // margin-left: 20px;
  margin-top: 20px;
  text-align: center;
}

.contact {
  margin-left: 50px;
  width: 400px;
}

.input-wrapper {
  width: 350px;
}

@media (max-width: 500px) {
  .input-wrapper {
    width: 285px;
  }
  .consultation-my-card {
    height: 800px !important;
  }
  .consultation-my-card2 {
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
  .consultation-my-card2 {
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
  .quill-editor {
    max-width: 290px;
  }
}
</style>
