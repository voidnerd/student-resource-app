<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="bg-light">
                    <div class="text-center round">
                        <img v-if="user.gender == 'female'" src="../assets/img_avatar2.png" alt="female-avatar">
                        <img v-else src="../assets/img_avatar.png" alt="male-avatar">
                    </div>
                    <h2 class="text-center">{{user.first_name}} {{user.last_name}} </h2>
                 </div>
            </div>
        </div>
        <div class="container">
             <div class="row">
                    <div class="col-md-6 forced-margin">
                        <h4>Personal Info</h4>
                        <hr />
                         <p> <b>Email:</b> <em>{{user.email}}</em></p>
                         <p> <b>Phone Number:</b> <em>{{user.phone}}</em></p>
                         <p> <b>Gender:</b> <em> {{user.gender}}</em></p>
                         <p> <b> Date of Birth:</b>  <em>{{user.dob}}</em></p>
                    </div>
        
                    <div class="col-md-6 forced-margin">
                        <h4>Educational Info</h4>
                        <hr/>
                        <p><b> Faculty:</b> <em>{{user.faculty}}</em></p>
                        <p> <b>Department:</b> <em>{{user.department}}</em></p>
                        <p> <b>Level:</b>  <em>{{user.level}}</em></p>
                    </div>
                 </div>
                 <hr />
                 <router-link to="/" class="btn btn-outline-warning"> &laquo; Back </router-link>
                <p class="float-right">
                <button @click="deleteUser(user._id)" type="button" class="btn btn-outline-danger">Delete</button>
                 <router-link :to="{name: 'Update', params: { id: user._id}}" class="btn btn-outline-success"> Update </router-link>
                </p>
                <hr />

        </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
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
    deleteUser (id) {
      this.axios.post('/api/v1/delete/' + id).then((res) => {
        this.$router.push({name: 'Home'})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forced-margin {
    margin: 0;
}
.forced-padding {
    padding: 0;
}
h4 {
    color: #666;
}
img {
    height: 200px;
    width: 200px;
    align: center;
    border-radius: 50%;
}
.round {
    border-radius: 50%;
    padding: 10px 0 5px 0;
}

</style>
