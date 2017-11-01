<template>
   <div class="container">
       <div class="row">
            <div class="col-md-6 offset-md-3">
                

       <h1 class=" text-center">Add Student's Resourse</h1>
       <form action="#" @submit.prevent="UpdateUser()">
             <div class="form-row">
                <div class="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input v-model="user.first_name" type="text" class="form-control" id="firstName" placeholder="John">
                </div>
                <div class="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input v-model="user.last_name" type="text" class="form-control" id="lastName" placeholder="Doe">
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input v-model="user.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="example@email.com">
                <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="phoneNumber">Phone Number: {{user.phone}}</label>
                <input v-model="user.phone" type="text" class="form-control" id="phoneNumber" placeholder="Phone Number">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="dob">Date of Birth</label>
                <input v-model="user.dob" type="text" class="form-control" id="dob" placeholder="01-01-1990">
                </div>
                <div class="form-group col-md-6">
                    <label for="phoneNumber">Gender: {{user.gender}}</label><br>
                    <label class="custom-control custom-radio">
                        <input v-model="user.gender" id="radio1" value="male"name="radio" type="radio" class="custom-control-input">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Male</span>
                    </label>
                    <label class="custom-control custom-radio">
                        <input v-model="user.gender" id="ffamale" value="female" name="radio" type="radio" class="custom-control-input">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">Female</span>
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label for="faculty">Faculty</label>
                <input v-model="user.faculty" type="text" class="form-control" id="faculty" placeholder="Sciences">
            </div>
             <div class="form-row">
                <div class="form-group col-md-6">
                <label for="department">Department</label>
                <input v-model="user.department" type="text" class="form-control" id="department" placeholder="Computer SCiences">
                </div>
                <div class="form-group col-md-6">
                      <label for="inputLevel">Level</label>
                        <select v-model="user.level" id="inputLevel" class="form-control">
                            <option selected value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="100">400</option>
                            <option value="100">500</option>
                        </select>
                </div>
            </div>
             <router-link to="/" class="btn btn-outline-danger"> &laquo; Back </router-link>
           <button type="submit" value="submit" class="btn btn-outline-success float-right">Submit</button>
        </form>

     </div>
  </div>
 </div>


  
</template>

<script>
export default {
  name: 'Update',
  data () {
    return {
      user: {}
    }
  },
  created: function () {
    this.getUser()
  },
  methods: {
    getUser () {
      this.axios.get('/api/v1/get/' + this.$route.params.id).then((response) => {
        this.user = response.data
      })
    },
    UpdateUser () {
      this.axios.post('/api/v1/update/' + this.$route.params.id, this.user)
        .then((res) => {
          console.log(res)
          this.$router.push({name: 'Profile', params: {id: this.user._id}})
        })
        .catch((err) => {
          throw err
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>