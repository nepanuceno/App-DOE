import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetDiarios = () => {
    const [dados, newDados] = useState();
    
    const baseUrl = 'https://diariooficial.to.gov.br/api.json';
    useEffect(() => {
        console.log("Testes DOE");
        // Passing configuration object to axios
        axios({
          method: 'get',
          url: `${baseUrl}`,
        }).then((response) => {
            if(response.status === 200){
                newDados(response.data)
                console.log("#######################")
              }else{
                console.log(response)
              }
        });
    }, []);

    return {
        dados,
    }
}