<template>
  <div class="admin">
    <div class="admin-left">
      <q-form
        @submit.prevent="onSubmit"
        @reset="onReset"
        class="my-form q-gutter-md q-"
      >
        <q-card class="my-card q-pa-md">
          <q-item class="qitem">
            <q-item-section avatar>
              <!-- <q-btn
                :to="{ path: '/' }"
                size="20px"
                round
                color="primary"
                icon="fab fa-twitter"
              /> -->
              <img
                style="width: 200px"
                src="../../assets/WayedNavIco.png"
                alt=""
              />
            </q-item-section>

            <q-item-section> </q-item-section>
          </q-item>

          <q-card-section>
            <div class="text-h6">Admin Log in</div>
          </q-card-section>

          <q-card-section>
            <q-input
              outlined
              v-model="email"
              type="email"
              label="Email"
              hint="Enter your email"
              required
            />
            <q-input
              outlined
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              label="Password"
              hint="Enter your password"
              required
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>

          <q-card-section v-if="error">
            <q-banner dense inline-actions class="text-white bg-red">
              {{ error }}
              <template v-slot:action>
                <q-btn
                  @click="closeBanner"
                  round
                  icon="fas fa-times"
                  flat
                  color="white"
                />
              </template>
            </q-banner>
          </q-card-section>

          <q-card-section>
            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div class="q-py-md">
              <q-btn
                :loading="loading"
                label="Log in"
                type="submit"
                color="primary"
              />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-form>
    </div>
    <div class="admin-right">
      <img src="../../assets/adminLogin.svg" alt="" />
    </div>
  </div>
</template>

<script>


export default {
};
</script>

<style lang="scss" scoped>
.admin {
  //   margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.admin-right {
}
img {
  width: 450px;
}

// admin-left
.my-card {
  margin: 10px auto;
  max-width: 600px;
  border-radius: 12px;
}
.text-h6 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 23px;
  font-weight: 700;
}
.my-form {
  margin-top: 50px;
}
.qitem {
  flex-direction: column;
  align-items: center;
}
.links a {
  color: rgba(29, 161, 242, 1);
  text-decoration-line: underline;
  cursor: pointer;
}
@media (max-width: 400px) {
  .admin {
      margin-top: 50px;
    justify-content: center;
  }
  .my-card {
    width: 290px;
    padding: 4px 4px;
  }
  .my-form {
    margin: 0;
  }
  .admin-right {
    img {
      display: none;
    }
  }
}
</style>
