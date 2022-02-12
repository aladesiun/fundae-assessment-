<template>
   <div class="overflow-x-scroll">
            <div class="flex flex-col w-full xs:max-w-40 xl:w-50 lg:w-[90%] min-h-10">
            <div class="overflow-x-scroll shadow-md sm:rounded-lg">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-scroll bg-white min-h-[500px] relative">
                        <p class="capitalize text-xs text-fundallblack m-2  font-bold">daily expenses summary</p>
                         
                        <table class="min-w-full divide-gray-200 table-fixed dark:divide-gray-700" v-if="expensess_history">
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
                           
                            <tbody class="bg-white divide-y px-2 divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 scroll" :key="idx" v-for="(expense, idx) in expensess_history">
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white">{{expense}}</td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-500  dark:text-white">{{expense.price}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="epmty-img flex justify-center w-[100%] absolute top-[50%] translate-y-[-50%]" v-else>
                                <img src="../assets/img/Artwork.png" alt="">
                            </div>
                        <div class="pagination absolute bottom-10 right-[50%] translate-x-[50%]">
                            <p class="flex items-center justify-center"><span class="text-lg font-bold border  m-1 rounded px-[10px] text-fundallblack">1</span> of <span class="text-lg font-bold m-1 mr-2 text-fundallblack" id="total">5</span>
                            <span class="s"> <img src="../assets/img/prev1.png" alt="" class="p-1"> </span>
                            <span> <img src="../assets/img/next1.png" alt="" class="p-1"> </span>


                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup() {
        const expensess_history=ref()
        return{
            expensess_history
        }
    },
    created() {
        var data= localStorage.getItem('today_expensess');
        data = decodeURIComponent(data);
        data = JSON.parse(data);
        this.expensess_history =data
        console.log(this.expensess_history);

    }
}
</script>

<style>

</style>