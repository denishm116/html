<template>

  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <div v-if="registerButton" key="register">
        <v-card
          class="mx-auto pa-3"
          outlined
          :elevation="12"
        >
          <v-system-bar

            light

            height="50"
          >
            <v-list-item-title class="headline">Регистрация</v-list-item-title>
            <v-spacer></v-spacer>


            <v-icon>mdi-close</v-icon>


          </v-system-bar>
          <v-flex class="d-flex justify-center flex-column mx-15">

          <v-form>



              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field v-model="form.name"
                                :error-messages="nameErrors"
                                label="Имя"
                                required

                  ></v-text-field>
                </v-col>
              </v-row>


              <v-row>
                <v-col
                  cols="12"

                >
                  <v-text-field v-model="form.email"
                                :error-messages="emailErrors"

                                label="E-mail"
                                required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"

                >
                  <v-text-field v-model="form.password"
                                :error-messages="passwordErrors"
                                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"

                                :type="passwordShow ? 'text' : 'password'"
                                name="input-10-1"
                                label="Пароль"
                                hint="Не менее 8 символов"
                                counter
                                @click:append="passwordShow = !passwordShow"
                  ></v-text-field>

                  <v-text-field v-model="form.password_confirmation"
                                :error-messages="passwordConfirmationErrors"
                                :append-icon="confirmPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"

                                :type="confirmPasswordShow ? 'text' : 'password'"
                                name="input-10-1"
                                label="Подтвердите пароль"

                                counter
                                @click:append="confirmPasswordShow = !confirmPasswordShow"
                  ></v-text-field>


                </v-col>
              </v-row>

          </v-form>
          </v-flex>
          <v-flex class="d-flex justify-center flex-column mx-15">

            <v-btn @click="register" color="success">
              Зарегистрироваться
            </v-btn>

          </v-flex>
          <v-flex class="d-flex justify-center flex-column  mx-15 mt-5">

            <v-btn @click="changeForm">
              войти
            </v-btn>
            <p class="subtitle-2 text-center pb-0">уже зарегистрированы?</p>
          </v-flex>
        </v-card>
      </div>

      <div v-else key="login">
        <v-card
          class="mx-auto pa-3"
          outlined
          :elevation="12"
        >
          <v-form>

              <v-list-item-title class="headline">Вход</v-list-item-title>

              <v-row>
                <v-col
                  cols="12"

                >
                  <v-text-field
                    :error-messages="emailErrors"
v-model="loginForm.email"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"

                >
                  <v-text-field
                    v-model="loginForm.password"
                    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                    :error-messages="passwordErrors"
                    :type="passwordShow ? 'text' : 'password'"
                    name="input-10-1"
                    label="Пароль"
                    hint="Не менее 8 символов"
                    counter
                    @click:append="passwordShow = !passwordShow"
                  ></v-text-field>
                </v-col>
              </v-row>

          </v-form>
          <v-flex class="d-flex justify-center flex-column mx-15">

            <v-btn @click="login" color="success">
              Войти
            </v-btn>

          </v-flex>
          <v-flex class="d-flex justify-center flex-column  mx-15 mt-5">

            <v-btn @click="changeForm">
              зарегистрироваться
            </v-btn>
            <p class="subtitle-2 text-center pb-0">Еще не зарегистрированы?</p>
          </v-flex>
        </v-card>

      </div>


    </transition>


  </div>

</template>

<script>

  export default {
    data() {
      return {
        passwordShow: false,
        confirmPasswordShow: false,

        registerButton: true,
        overlay: false,
        loginForm: {
          email: '',
          password: '',
        },
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },

      }
    },
    computed: {
      nameErrors() {
        if (this.errors) return this.errors.name
      },
      emailErrors() {
        if (this.errors) return this.errors.email
      },
      passwordErrors() {

        if (this.errors) return this.errors.password
      },
      passwordConfirmationErrors() {
        if (this.errors) return this.errors.password_confirmation
      },


    },
    methods: {

      async login() {

        try {
          await this.$axios.post('/auth/login', this.loginForm)
          this.$auth.login({data: this.loginForm})
          this.$store.dispatch('authentication/authenticationWindow')
        } catch (e) {
          return e
        }
      },

      async register() {
        try {
          await this.$axios.post('/auth/register', this.form)
          this.$auth.login({data: this.form})

          this.$store.dispatch('authentication/authenticationWindow')
        } catch (e) {
        return e
        }
      },
      changeForm() {
        this.registerButton = !this.registerButton

      },

    }
  }
</script>

<style scoped>
  .wrapper {
    /*background: #47494E;*/
    width: 40vw;
    max-height: 80vh;
    padding: 30px;
    overflow: hidden;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }


  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: all .2s;
    transform: translateY(-100%);
  }

  .fade-enter-to {
    opacity: 1;
    transform: translateY(0%);
  }

  .fade-leave {
    opacity: 1;

  }

  .fade-leave-active {
    transform: translateY(-100%);
    transition: all .2s;

  }

  .fade-leave-to {
    opacity: 0;
  }


</style>
