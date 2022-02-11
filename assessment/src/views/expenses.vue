<template>
    <div class="signup">
        <div class="grid gap-3  xl:grid-cols-3 md:px-5 lg:p-5 lg:px-12">
            <div class="hero-section-left mb-5"> 
                <img src="../assets/img/Fundall-MintGreen-Lockup.png" alt="" />
                <div class="flex flex-col justify-center p-0 m-1 mt-10 lg:mt-7">
                    <div class="profile-section w-50">
                        <div class="flex md:flex-nowrap flex-wrap items-center">
                            <div class="profile-avater rounded-[18px] bg-gray-300 col w-20 mr-5 h-20 flex items-center justify-center">
                               <form action="" class="relative">
                                   <img :src="user.avatar" alt="" class="m-0" />
                                    <input type="file" @change="uploadavatar" class="absolute" >
                               </form>
                            </div>
                            <div class="col-span-2">
                                <p class="capitalize text-2xl font-bold text-fundallblack">{{user.firstname}} {{user.lastname}}</p>
                                <p class="text-fundallblack mt-1 text-lg font-normal">{{user.email}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="target mt-8 mb-5">
                        <p class="capitalize text-fundallblack font-normal text-lg">target monthly Expenses</p>
                        <p class="price text-fundallblack text-3xl font-bold">
                            #{{user.monthly_target}}
                        </p>
                        <div class="range bg-gray-100 md:w-80 xs:w-full mt-3 rounded-lg">
                            <div class="range-loader bg-fundallgreen h-full ro w-20 p-1"></div>
                        </div>
                    </div>
                   <summarytable/>
                </div>
            </div>
            <div class="lg:col-span-2 w-full xl:w-[90%] ml-auto form-section px-1 lg:px-1 mr-0 bg-fundallgray rounded-lg shadow lg:px-10 py-5 px-3">
                <div class="top-header bg-white shadow p-5 rounded-lg flex relative">
                    <div>
                        <p class="text-fundallgreen text-xl font-bold">Welcome back, <span class="text-fundallblack">Babatunde</span></p>
                        <p class="text-xs text-fundallblack">Now, let’s get your expenses for this month</p>
                    </div>
                    <img src="../assets/img/jump.png" alt="" class="absolute -top-7 right-2 md:block hidden" />
                </div>
                <form action="" class="px-1 md:p-5">
                    <div class="grid grid-cols-4 gap-8">
                        <div class="mb-6 col-span-3">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Target monthly expenses</label>
                            <input
                                type="text"
                                id="base-input"
                                class="border border-gray-300 text-gray-900 font-normal text-lg rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-8">
                        <div class="mb-6 col-span-3">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Date</label>
                            <input
                                type="date"
                                id="base-input"
                                class="border border-gray-300 text-gray-900 font-normal text-lg rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <p class="capitalize font-normal text-fundallblack text-sm mb-5">today's expenses</p>
                    <div class="grid grid-cols-5 gap-2">
                        <div class="mb-6 col-span-3">
                            <input
                                type="text"
                                placeholder="Expenses"
                                id="base-input"
                                class="border  font-light border-gray-300 text-gray-400   text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                        <div class="mb-6 col-span-2">
                            <input
                                type="number"
                                placeholder="price"
                                v-model="price"
                                id="base-input"
                                class="border border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-5 gap-2">
                        <div class="mb-6 col-span-3">
                            <input
                                type="text"
                                placeholder="Expenses"
                                id="base-input"
                                class="border  font-light border-gray-300 text-gray-400 text-sm  rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                        <div class="mb-6 col-span-2">
                            <input
                                type="number"
                                placeholder="price"
                                v-model="price"
                                id="base-input"
                                class="border border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-5 gap-2">
                        <div class="mb-6 col-span-3">
                            <input
                                type="text"
                                placeholder="Expenses"
                                id="base-input"
                                class="border  font-light border-gray-300 text-gray-700 text-sm  rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                        <div class="mb-6 col-span-2">
                            <input
                                type="number"
                                placeholder="price"
                                v-model="price"
                                id="base-input"
                                class="border border-gray-300 text-gray-400 text-sm rounded focus:ring-fundallgreen focus:border-fundallgreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <div class="total flex md:justify-end items-center">
                        <div class="tot-inp flex w-50 items-center">
                            <p class="capitalize font-light text-black text-sm">total actual expenses: <span class="font-bold text-xl">#</span></p>
                            <input
                                type="text"
                                placeholder="Total"
                                id="price3"
                                class="w-20 bo font-normal  border-gray-300 text-gray-400  rounded focus:ring-fundallgreen focus:border-fundallgreen block p-2.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="block mx-auto font-bold bg-fundallgreen border-2 mt-7 border-white text-black text-sm rounded-[15px] focus:ring-fundallgreen focus:border-fundallgreen block w-90 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ringfundallgreen dark:focus:borderfundallgreen"
                    >
                        SAVE TODAY'S EXPENSESE
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import summarytable from '../components/summarytable.vue';

    export default {
  components: { summarytable },
        computed:{
        ...mapState({
            user: (state)=> state.user
        })
    },
        Data(){
            return{
                avatar:this.user.avatar,
                user_avatar:''
            }
        },
        methods:{
            uploadavatar(e){
                console.log(e);
            // this.$store.dispatch('post', {
            //     endpoint: 'base/avatar',
            //     details: avatar
            // })
            // .then(function (result) {
            // console.log(result);
            // }, function (error) {
            // console.log(error);
            // })
            // this.$store.dispatch('post', {
            //     endpoint: 'base/avatar',
            //     details: files
            // }).then((data) =>{
            //   console.log(data);
            //     this.loading = false;
            // }).catch((error) =>{
            //         var error_message = error.message;
            //         this.$store.commit('setNotification',{type:2, message: error_message})

            // });
            // },
    
            }
        },
        mounted(){
                this.getprofile();
            }

    }
</script>

<style></style>
