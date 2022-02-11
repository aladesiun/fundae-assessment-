<template>
  <div class="rounded-[40px] md:m-5 m-2 md:mx-12 mx-2 p-3 bg-white ">
    <div class="home bg-homebg rounded-[30px] pt-5 p-2">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  created(){

    var token = localStorage.getItem('token');
    var userr=localStorage.getItem('user');

    if(token && userr){
        this.$store.state.token = token;
        var user = decodeURIComponent(userr);
        this.$store.state.user = JSON.parse(user);
    }else{
      this.$router.push('/signin');
    }

    if(this.$route.meta.AuthRequired || this.$route.matched.find((d)=>d.meta.AuthRequired)){
        if(!userr){ this.$router.push('/signin'); return false; }     
    }
  }, 
}
</script>
<style>

</style>
