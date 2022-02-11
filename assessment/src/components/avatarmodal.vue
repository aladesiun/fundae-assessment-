<template>
<div>
  <button
    class="block text-white bg-blue-700 hover:bg-blue-800 opacity-0 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
    data-modal-toggle="popup-modal"
>
    Toggle modal
</button>

<div class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full" id="popup-modal" aria-hidden="true">
    <div class="relative px-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-end p-2">
                <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal"
                >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
            <div class="p-6 pt-0 text-center">
                <form action="" @submit.prevent="uploadavatar">
                    <p class="text-lg">%100</p>
                    <input type="file" @change="avatarFile" accept="avatar/*" class="border my-2 rounded" >
                    <input type="submit" multiple value="upload" class="bg-fundallgreen border border-fundallgreen text-white py-1 px-4 rounded cursor-pointer hover:bg-white hover:text-fundallgreen hover:border">
                </form>
            </div>
        </div>
    </div>
</div>
</div>

</template>

<script>
export default {
    data() {
        return {
            selectedavatar:null,
            selectedavatar_name:null

       }
    },
    methods: {
        avatarFile(e){
            this.selectedavatar=e.target.files[0];
            this.selectedavatar_name=e.target.files[0].name;
            console.log(this.selectedavatar=e.target.files[0]);
        },
        uploadavatar(){

            const avatar =  new FormData();
            avatar.append('avatar', this.selectedavatar)
            this.$store.dispatch('post', {
                endpoint:'base/avatar',
                details:avatar
            })
            .then(res =>{
                const newavatar=res.data.success.url;
                localStorage.setItem('newavatar', newavatar)
                console.log(res);
                console.log(res.data.success.url);
            })
        }
    },
}
</script>

<style>

</style>