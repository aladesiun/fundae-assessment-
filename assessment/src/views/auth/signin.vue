<template>
  <div class="signup">
      <div class="grid lg:grid-cols-1 lg:grid-cols-2 p-1 lg:p-5 lg:pr-12">
        <div class="hero-section-left mb-5 ">
          <img src="../../assets/img/Fundall-MintGreen-Lockup.png" alt="">
          <div class="flex flex-col items-center justify-center  p-0 m-1 lg:mt-7">
            <div>
              <img src="../../assets/img/signin.png" class="mb-8" alt="">
           <p class="text-4xl font-bold mb-4"><span class="text-mygreen">Welcome back!</span></p>
            <p class="text-4xl font-bold mb-9">we miss you.</p>
            </div>
          </div>
        </div>
        <div class="form-section px-1  lg:px-1 mr-0 lg:mr-12">
          <form action="" class=" bg-white shadow rounded py-10 px-5 lg:px-12 ">
              <p class="text-3xl font-bold mb-5"> Holla</p>
              <p class="text-xl font-normal mb-9"> Signin to the vibe!</p>

           
             <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <label for="base-input" class="block mb-2 text-sm font-medium text-mygreen dark:text-gray-300">Email or username</label>
                <input type="text" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-mygreen focus:border-mygreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringmygreen dark:focus:bordermygreen">
            </div>
            </div>
            <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">password</label>
                <input type="password" placeholder="Enter password" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-mygreen focus:border-mygreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringmygreen dark:focus:bordermygreen">
            </div>
            </div>
             <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <input type="submit" value="Login" id="base-input" class="bg-mygreen border border-mygreen text-black text-xl rounded focus:ring-mygreen focus:border-mygreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringmygreen dark:focus:bordermygreen">
            </div>
            </div>
           
            <p class="text-center px-12 pt-4 text-sm"> Don't have an account? <router-link to="signup" class="text-mygreen font-semibold">Register Here</router-link> </p>
          <p class="text-center px-12 pt-3 capitalize text-sm text-gray-400"> by clicking on Login, you agree to our <span class="text-mygreen">Terms & conditions and privacy policy</span> </p>


          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>    