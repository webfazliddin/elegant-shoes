<template>
  <div id="app" class="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      isAppLoading: true
    }
  },
}
</script>

<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;1,400&display=swap');


.container {
  width: 100%;
  margin: 0 auto;
  max-width: $breakpoint-lg;
  padding: 0 15px;
}

* {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  text-decoration: none;
}
</style>
