<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
  margin: 0px;
  padding: 0px;
  outline: 0px;
  box-sizing: border-box;
}
html, body, #app {
  min-height: 100%;
}

body {
  background: #000 url('./assets/background.jpg') no-repeat;
  background-size: cover;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  font-family: 'Roboto', Arial, Helvetica,  sans-serif;
  font-size: 14px;
}

</style>
