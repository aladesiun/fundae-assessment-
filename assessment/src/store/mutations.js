export default{
    
    setNotification(state, data){
        state.notification.type = data.type;
        state.notification.message = data.message;
        setTimeout(() => {
            state.notification.type = 0;
            state.notification.message = '';
        }, 6000);        
    },

    setUser(state, data){
        state.user = data; 

        var result =  encodeURIComponent(JSON.stringify(data));
        localStorage.setItem('user', result);
    },

    getUser(state){
        var data = localStorage.getItem('user');
        data = decodeURIComponent(data);
        data = JSON.parse(data);

        state.user = data;
        state.token  = data.token;

        var result =  encodeURIComponent(JSON.stringify(data));
        localStorage.setItem('user', result);
    },

    logout(state){
        state.authenticated = false
        this.authstatus = false
        window.localStorage.removeItem('user');
        state.user = {};
        state.token = null;
        window.location.href = '/';


    },
}