<template>
  <div class="signup">
      <div class="grid lg:grid-cols-1 lg:grid-cols-2 p-1 lg:p-5 lg:pr-12">
        <div class="hero-section-left mb-5 ">
          <img src="../../assets/img/Fundall-MintGreen-Lockup.png" alt="">
          <div class="flex flex-col items-center justify-center  p-0 m-1 lg:pl-10 lg:ml-10 lg:mt-7">
            <div>
              <img src="../../assets/img/img1.png" class="mb-8" alt="">
            <p class="text-4xl font-bold mb-9"><span class="text-fundallgreen">Welcome!</span> Let’s get to know you.</p>
            <p class="font-semibold text-lg">Your first step toward a better financial lifestyle starts here.</p>
            </div>
          </div>
        </div>
        <div class="form-section px-1  lg:px-10">
          <form action="" class=" bg-white shadow rounded py-10 px-2 lg:px-12 ">
            <div class="grid md:grid-cols-2 md:gap-8">
              <div class="mb-6">
                <label for="base-input" class="block mb-2 text-sm font-medium text-fundallgreen dark:text-gray-300">First Name</label>
                <input type="text" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
             <div class="mb-6">
                <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Last Name</label>
                <input type="text" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
         
            </div>
             <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Email address</label>
                <input type="email" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
             <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">password</label>
                <input type="password" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
            <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">confirm password</label>
                <input type="password" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
            <div class="grid grid-cols-1 gap-8">
             <div class="mb-6">
                <input type="submit" id="base-input" class="bg-fundallgreen border border-fundallgreen text-black text-xl rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
            <p class="text-center lg:px-12 pt-4"> Already have an account? <router-link to="/signin" class="text-fundallgreen">Login Here</router-link> </p>


          </form>
          <p class="text-center lg:px-12 pt-7 text-gray-400"> by clicking on Login, you agree to our <span class="text-fundallgreen">Terms & conditions and privacy policy</span> </p>
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