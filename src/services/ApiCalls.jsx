import Axios from 'axios';

export const ApiCall =(data, url, method)=>{
    return new Promise((resolve, reject)=>{
        Axios({method, url, data}
        ).then((response)=>{
            resolve(response);
            console.log(response);
        })
        .catch((err)=>{
            reject(err);
        });
    });
}