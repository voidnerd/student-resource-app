<template>
  <div id="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#/">Student Resource</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#/">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#/create">Add Student</a>
          </div>
        </div>
    </nav>
    <router-view/>
    <div class="clearfix"></div>
    <footer class="text-center">
      <p>Made with <span class="text-danger"> &hearts; </span> by Ndifreke Friday</p>
      <a href="https://github.com/NddyAndy"><i class="fa fa-github "></i></a> 
      <a href="https://twitter.com/nddyandy"><i class="fa fa-twitter"></i></a> 
      <a href="https://codepen.com/nddyandy"><i class="fa fa-codepen "></i></a> 
      <a href="https://facebook.com/nddyandy"><i class="fa fa-facebook-official"></i></a> 
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#heart {
  color: red;
}

footer {
  margin: 20px 0 0 0;

}
.fa {
  border: 1px solid #000;
  padding: 8px;
  border-radius: 50%;
}
.fa-twitter, .fa-facebook-official {
  color: royalblue;
}
a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}


</style>
