<template>
  <div id="Login">
    <h1>This is an Login page</h1>
    <input class="st" type="text" name="username" v-model="input.username" placeholder="Username" /><br>
    <input class="st" type="password" name="password" v-model="input.password" placeholder="Password" /><br>
    <button class="bt" type="button" v-on:click="login()">Login</button>    
  </div>
</template>

<script>
    export default {
        name: "Login",
        // computed: {
        //     mockAccount() {
        //         return this.$store.state.mockAccount;
        //     }
        // },
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "adashboard" });
                    }else {
                        alert("The username and / or password is incorrect");
                    }
                }else {
                    alert("The username and / or password is incorrect");
                }
            }
        }
    }
</script>

<style scoped>
    .st {
        padding: 30px;
        width: 300px;
        background-color: #8a7caf;
        color: rgba(0, 0, 0, 0.705);
        border: 10px solid #000000;
        border-radius: 90px;
    }
    .bt {
        padding: 30px;
        width: 150px;
        background-color: #000000;
        color: rgba(255, 255, 255, 0.705);
        border: 10px solid #000000;
        border-radius: 90px;
    }

    #login {
        width: 500px;
        background-color: #442792;
        border: 10px solid #c8e90e;
        padding: 20px;
        margin-top: 200px;
        padding: 20px;
    }
</style>