<template>
  <div class="signup">
      <div class="grid lg:grid-cols-1 lg:grid-cols-2 p-1 lg:p-5 lg:pr-12">
        <div class="hero-section-left mb-5 " >
          <img src="../assets/img/Fundall-MintGreen-Lockup.png" alt="">
          <div class="flex flex-col  justify-center  p-0 m-1 mt-10 lg:mt-7">
            <div class="profile-section w-50">
                <div class="hidden md:flex md:flex-nowrap flex-wrap items-center" >
                    <div class="profile-avater rounded-[18px] bg-gray-300 col w-20 mr-5 h-20 flex items-center justify-center">
                        <img src="../assets/img/Vector.png" alt="" class="m-0">
                    </div>
                    <div class="col-span-2">
                        <p class="capitalize text-2xl font-bold text-fundallblack">Babatunde Fashola</p>
                        <p class="text-fundallblack mt-1 text-lg font-semibold">baba2@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="target mt-8 mb-5">
                <p class="capitalize text-fundallblack font-semibold text-lg">target monthly Expenses</p>
                <p class="price text-fundallblack text-3xl font-bold ">
                    #596,000
                </p>
                <div class="range bg-gray-100 w-80 mt-3 rounded-lg ">
                    <div class="range-loader bg-fundallgreen h-full ro w-20 p-1 "></div>
                </div>
            </div>
            <div class="flex flex-col w-50" >
    <div class="overflow-x-scroll shadow-md sm:rounded-lg ">
        <div class="inline-block min-w-full align-middle">
            <div class="overflow-scroll bg-white">
                <p class="capitalize text-xs text-fundallblack m-2 font-bold">daily expenses summary</p>
                <table class="min-w-full divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead class="bg-white dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Date
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Amount
                            </th>
                           
                           
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y px-2 divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 scroll">
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Imac 27"</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Desktop PC</td>
                        </tr>
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple MacBook Pro 17"</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Laptop</td>
                        </tr>
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">iPhone 13 Pro</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Phone</td>
                        </tr>
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Magic Mouse 2</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Accessories</td>
                        </tr>
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch Series 7</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Accessories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

          </div>
        </div>
        <div class="form-section px-1  lg:px-1 mr-0  bg-fundallgray rounded-lg shadow lg:px-10 py-5 px-3">
        <div class="top-header bg-white shadow p-5 rounded-lg flex relative ">
            <div>
                <p class="text-fundallgreen text-xl font-bold">Welcome back, <span class="text-fundallblack">Babatunde</span> </p>
            <p class="text-xs text-fundallblack">Now, let’s get your expenses for this month</p>
            </div>
            <img src="../assets/img/jump.png" alt="" class="absolute -top-7 right-2 md:block hidden">
        </div>
        <form action="" class="p-5">
            <p class="capitalize text-sm font-semibold text-fundallblack">Target monthly expenses</p>
             <div class="grid grid-cols-3 gap-8">
             <div class="mb-6 col-span-2">
                <label for="base-input" class="block mb-2 text-sm font-medium text-fundallgreen dark:text-gray-300">Email or username</label>
                <input type="text" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
             <div class="grid grid-cols-4 gap-8">
             <div class="mb-6 col-span-3">
                <label for="base-input" class="block mb-2 text-sm font-medium text-fundallgreen dark:text-gray-300">Date</label>
                <input type="date" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
              <div class="grid grid-cols-4 gap-2">
             <div class="mb-6 col-span-3">
                <label for="base-input" class="block mb-2 text-sm font-medium text-fundallgreen dark:text-gray-300">Date</label>
                <input type="date" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            <div class="mb-6">
                <label for="base-input" class="block mb-2 text-sm font-medium text-fundallgreen dark:text-gray-300">Date</label>
                <input type="date" id="base-input" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen">
            </div>
            </div>
            
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