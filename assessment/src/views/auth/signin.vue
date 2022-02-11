<template>
  <div class="signup">
    <notification/>
      <div class="grid lg:grid-cols-1 lg:grid-cols-2 p-1 lg:p-5 lg:pr-12">
        <div class="hero-section-left mb-5 ">
          <img src="../../assets/img/Fundall-MintGreen-Lockup.png" alt="">
          <div class="flex flex-col items-center justify-center  p-0 m-1 lg:mt-7">
            <div>
              <img src="../../assets/img/signin.png" class="mb-8" alt="">
           <p class="text-4xl font-bold mb-4"><span class="text-fundallgreen">Welcome back!</span></p>
            <p class="text-4xl font-bold mb-9">we miss you.</p>
            </div>
          </div>
        </div>
        <div class="form-section px-1  lg:px-1 mr-0 lg:mr-12">
          <form action="" class=" bg-white shadow rounded py-10 px-5 lg:px-12 " @submit.prevent="login">
              <p class="text-3xl font-bold mb-5"> Holla</p>
              <p class="text-xl font-normal mb-9"> Signin to the vibe!</p>

           
             <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-fundallgreen dark:text-gray-300">Email or username</label>
                <input v-model="user.email" type="email" id="email" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
            <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">password</label>
                <input v-model="user.password" type="password" placeholder="Enter password" id="password" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
             <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <button disabled v-if="loading" type="button" class="bg-fundallgreen border border-fundallgreen text-black text-xl rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
                  <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  
              </button>
                <input v-else type="submit" value="Login" id="" class="bg-fundallgreen border border-fundallgreen text-black text-xl rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
           
            <p class="text-center md:px-12 pt-4 text-sm"> Don't have an account? <router-link to="signup" class="text-fundallgreen font-semibold">Register Here</router-link> </p>
          <p class="text-center md:px-12 pt-3 capitalize text-sm text-gray-400"> by clicking on Login, you agree to our <span class="text-fundallgreen">Terms & conditions and privacy policy</span> </p>


          </form>
        </div>
      </div>
  </div>
</template>

<script>
import notification from "../../components/notification.vue";
export default {
components:{notification},
  data(){
    return{
    user:{
      email:'',
      password:''
    },
    loading:false

    }
  },
  methods:{
      login(){
            if(this.user.email.length == 0 || this.user.password.length == 0){
                this.$store.commit('setNotification',{type:2, message: 'Email and Password fields are required'});
                
               return false;
            }

            this.loading = true;
    
            this.$store.dispatch('post', {
                endpoint: 'login',
                details: this.user
            }).then((data) =>{
              console.log(data);
                if(data.status == 200){
              console.log(data.data.success);
              let response = data.data.success.status
                this.$store.commit('setNotification',{type:1, message:response});

                    var user_details = data.data.success.user;
                    var user_token= data.data.success.user.access_token;
                    localStorage.setItem('token', user_token);
                    this.$store.commit('setUser', user_details);
                    window.location.href = "/expenses";
                    
                }else{
                this.loading = false;

                    var e_msg = data.data.error.message;
                    console.log(e_msg);
                    this.$store.commit('setNotification',{type:2, message: e_msg})
                }
                this.loading = false;
            }).catch((error) =>{
                    var error_message = error.message;
                    if(error_message =='Request failed with status code 400') {
                      this.$store.commit('setNotification',{type:2, message:'Email or password incorrect'})
                    }
                    else{
                    this.$store.commit('setNotification',{type:2, message: error_message})

                    }
                    this.loading = false;
            });
        }
  }
}
</script>

<style>

</style>    