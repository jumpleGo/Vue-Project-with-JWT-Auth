<template>
    <div class="row">
        <nav id="navbar-example2" class="navbar navbar-light bg-light col-12">
            <a class="navbar-brand">ADMIN TEMPLATE</a>
            <ul class="nav nav-pills">
                <li v-if="loggingIn" class="nav-item">
                    <router-link to="/" class="link" >Главная</router-link>
                </li>
                <li v-if="loggingIn" class="nav-item">
                    <router-link to="/login" class="link" >Выйти</router-link>
                </li>

                <li v-if="isAdmin"  class="nav-item">
                    <router-link  to="/users"  class="link" >Список пользователей</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
    .link{
        padding: 0 10px;
    }
</style>

<script>
export default {
    
    computed:{
        loggingIn () {
            return this.$store.state.authentication.status.loggedIn;
        },
        isAdmin(){
            return this.$store.state.authentication.userWithPremissions;
        }
    },
   
  
   
}
</script>