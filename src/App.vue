<template>
  <div id="app" class="container-fluid">
    <base-navbar />
    
    <router-view></router-view>
  </div>
</template>
<script>
import BaseNavbar from "@/components/BaseNavbar.vue"
export default {
  components:{
    BaseNavbar
  }

}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: #fffeff;
  min-height: 100vh;
}
</style>
