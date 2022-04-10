const newmixin={
    data() {
        return {
            selectedavatar:null,
            selectedavatar_name:null,
            loading:false

       }
    },
    methods: {
        avatarFile(e){
            this.selectedavatar=e.target.files[0];
            this.selectedavatar_name=e.target.files[0].name;
            console.log(this.selectedavatar=e.target.files[0]);
        },
        uploadavatar(){
            this.loading = true
            const avatar =  new FormData();
            avatar.append('avatar', this.selectedavatar)
            this.$store.dispatch('post', {
                endpoint:'base/avatar',
                details:avatar
            })
            .then(res =>{
                const newavatar=res.data.success.url;
                localStorage.setItem('newavatar', newavatar)
                this.loading = false
                this.$store.commit('setNotification',{type:1, message: 'success'})
                window.location.href='/expenses';
            }).catch((error)=>{
                this.loading = false
                this.$store.commit('setNotification',{type:2, message: error})

            })
        }
    },
    created(){
        console.log("hello from mixin");
    }
}
export default newmixin;