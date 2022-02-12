<template>
  <div >
   <navheader/>
   <div class="home-content flex flex-col items-center justify-center mb-10">
     <img src="../assets/img/img1.png" alt="" class="mb-10">
     <p class="font-bold text-3xl md:text-4xl cappitalize text-center mb-7">Fundall Expense Tracker</p>
     <p class="font-semibold text-2xl md:text-3xl cappitalize text-center mb-11"> Mini Project Frontend</p>
     <p class="font-bold text-xl my-5 mb-12 text-center" >by Babatunde Fashola</p>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navheader from '@/components/nav.vue'

export default {
  name: 'Home',
  components: {
    navheader
  }
}
</script>
