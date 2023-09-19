import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetDiarios = () => {
    const [objDiarios, newDados] = useState();
    
    const baseUrl = 'https://diariooficial.to.gov.br/api.json';
    useEffect(() => {
        console.log("Buscando Diários recentes");
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
      objDiarios,
    }
}