import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetDiarios = () => {
    const [dados, newDados] = useState();
    
    const baseUrl = 'https://diariooficial.to.gov.br/api.json';
    useEffect(() => {
        console.log("Buscando Diários recentes");
        // Passing configuration object to axios
        axios({
          method: 'get',
          url: `${baseUrl}`,
        }).then((response) => {
            if(response.status === 200){
                newDados(response.data)
                console.log("#######################DOE##################");
              }else{
                console.log(response)
              }
        });
    }, []);

    return {
        dados,
    }
}