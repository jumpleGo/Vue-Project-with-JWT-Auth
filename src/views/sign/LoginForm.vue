<template>
<div class="col-12 col-md-4 offset-md-4 form">
    <h2>Войдите в аккаунт</h2>
    <hr>
    <form @submit.prevent="handleSubmit()" class="">
  <div class="form-group">
    <label for="exampleInputEmail1">Почта</label>
    <input type="email" class="form-control"  placeholder="Ваша почта" v-model="email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Пароль</label>
    <input type="password" class="form-control" placeholder="Пароль" v-model="password">
  </div>
  <button type="submit" class="btn btn-primary">Войти</button>
</form>
</div>
</template>

<script>
export default {
    name: 'LoginForm',
     data(){
        return{
          email: '',
          password: '',
          submitted: false
        }
    },
    
    created () {
        this.$store.dispatch('authentication/logout');  
        this.$store.commit('RESET')
        
    },
    methods: {
        handleSubmit(){
            this.submitted = true;
            const { email, password } = this;
            const { dispatch } = this.$store;
            if (email && password) {
                dispatch('authentication/login', { email, password });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .form{
        margin-top: 80px;
        padding: 40px 25px;
        box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.349);
    }
</style>