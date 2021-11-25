<template>
  <div id="adashboard">
    <h1>Welcome Admin</h1>
    <input class="st" type="text" v-model="form.username" placeholder="Username" /><br>
    
    <input class="st" type="text" v-model="form.fullname" placeholder="Full Name" /><br>
    
    <input class="st" type="email" v-model="form.email" placeholder="Email" /><br>
    
    <input class="st" type="tel" v-model="form.pnumber" placeholder="Phone Number" /><br>
    
    <span>Designation: {{designation}}</span>
    <select class="st" v-model="form.designation">
      <option>User</option>
      <option>Admin</option>
    </select><br>
    
    <!-- <template v-if="User" v-model="this.form.designation.user">
      <option>UserID</option>
    </template> -->
    
    <button class="bt" type="button" v-on:click="create()">Create User</button>
  </div>
</template>

<script>
export default {
  name: "adashboard",
  data() {
    return {
      form: {
        username: "",
        fullname: "",
        email: "",
        pnumber: "",
        designation: ""
      }
    }
  },
  methods:{
    create(){
      if(this.form.username != "" && this.form.fullname != "" && this.form.email != "" && this.form.pnumber != "" && this.form.designation != "" ) {
        alert("Form is validated Successfully");
      }else {
        alert("Invalid Details");
      }
    }
  }
}
</script>

<style scoped>
    .st {
        padding: 20px;
        width: 200px;
        background-color: #8a7caf;
        color: rgba(0, 0, 0, 0.705);
        border: 10px solid #000000;
        border-radius: 90px;
    }
    .bt {
        padding: 20px;
        width: 150px;
        background-color: #000000;
        color: rgba(255, 255, 255, 0.705);
        border: 10px solid #000000;
        border-radius: 90px;
    }
</style>