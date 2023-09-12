import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetDiarios = () => {
    const [dados, newDados] = useState();
    
    const baseUrl = 'http://localhost:8080';
    useEffect(() => {
        console.log("Buscando Diários por Edição");
        axios({
          method: 'post',
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