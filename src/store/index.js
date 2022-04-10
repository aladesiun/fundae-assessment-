import axios from 'axios'

export default {
    state: {
        endpoint: "https://campaign.fundall.io/api/v1/",
        user: null,
        token: null, 
        notification: {
            type: 0,
            message: ''
        } 
    },
    post(data){
        return  new Promise((resolve, reject) => {
            axios.post(this.state.endpoint + data.endpoint, data.details, {
                headers: { Authorization: 'Bearer ' + this.state.token,
                }
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                console.log(error);
                // context.dispatch('handleError', error);
                reject(error);
            })
        });
    },
}