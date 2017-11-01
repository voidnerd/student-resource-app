<template>
   <div class="container-fluid">
     <div class="row float-right">
         <router-link to="/create" class="btn btn-outline-dark cus-mar ">Add Student Resource </router-link>
     </div>
     <div class="clearfix"></div>

      <div class="row justify-content-start">
        <div class="col-md-3" v-for="(user, index) in users" :key="user.id">
          
        <div class="card">

          <img v-if="user.gender == 'female'" src="../assets/img_avatar2.png" alt="male-avatar" style="width:100%; max-height: 250px">
          <img v-else src="../assets/img_avatar.png" alt="male-avatar" style="width:100%; max-height: 250px">
          <div class="container text-center">
            <h6><b>{{user.first_name}}  {{user.last_name}}</b></h6> 
            <p><em>{{user.faculty}}</em></p>
            <router-link :to="{name: 'Profile', params: { id: user._id}}" class="btn btn-outline-info btn-block"> view profile</router-link>
          </div>
        </div>

      </div>
    </div>
     
   </div>


  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      users: []
    }
  },
  created: function () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      this.axios.get('/api/v1').then((response) => {
        this.users = response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s ease-in-out;
    max-height: 400px;
    margin-top: 15px;

}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
    padding: 2px 16px;
}
footer {
  height: 100px;
  margin-top: 90px;
  background-color: blue;
}

.fixed-bottom {
  align-content: center;
}
.cus-mar {
  margin: 10px 30px 10px 0;
}

</style>
