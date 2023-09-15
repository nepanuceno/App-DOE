import axios from 'axios';

export const useGetDiariosPorConsulta = (parametrosDaConsulta:object, baseUrl:string) => {    
    console.log("Buscando Diários por Consulta");
    const promise = axios({
      headers: { 'Content-Type': 'multipart/form-data' },
      method: 'post',
      url: `${baseUrl}`,
      data: parametrosDaConsulta,
    });
    
    const resp =  promise.then((response) => response.data );
    
    return resp;
}