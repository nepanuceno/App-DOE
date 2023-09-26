import axios from 'axios';

export const useGetDiarios = (baseUrl:string) => {    
    const promise = axios({
      method: 'get',
      url: `${baseUrl}`,
    });
    
    const resp =  promise.then((response) => response );
    
    return resp;
}