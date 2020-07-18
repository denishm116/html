<template>

  <div>
    <h1>Extranet Index</h1>
    <h2>{{res}}</h2>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        res: ''
      }
    },
  methods: {
    async test() {
        let result = await this.$axios.get('https://engine.more-otdih.online/api/test')
      this.res = result.data.data
console.log(result.data.data)

    }

    },
    mounted() {
     this.test()
    }
  }
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
    font-family: 'Quicksand',
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
