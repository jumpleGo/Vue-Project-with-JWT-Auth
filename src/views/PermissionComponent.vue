<template>
    <div>
        <table class="table col-12 col-md-4 offset-md-4">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in getAllUsers" :key="index">
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        computed: {
            getAllUsers() {
                return this.$store.state.users.all.users;
            },
        },

        created() {
            this.$store.dispatch('users/getAll');
        }
    }
</script>

<style lang="scss" scoped>
    .table{
        margin-top: 80px;
    }
</style>