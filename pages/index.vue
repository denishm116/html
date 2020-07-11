<template>
  <div class="container">
    <div>
      <v-app>
      <Logo />
      <h1 class="title">
        more-otdih
      </h1>
      <v-row align="center">
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn small>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn small color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn small color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn small disabled>Disabled</v-btn>
          </div>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn disabled>Disabled</v-btn>
          </div>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn large>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn large color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn large color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn large disabled>Disabled</v-btn>
          </div>
        </v-col>
      </v-row>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      </v-app>

      <v-row align="center">
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn small>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn small color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn small color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn small disabled>Disabled</v-btn>
          </div>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn disabled>Disabled</v-btn>
          </div>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn large>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn large color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn large color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn large disabled>Disabled</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
