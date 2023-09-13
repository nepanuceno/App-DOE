import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetDiariosPorEdicao = (parametrosDaConsulta:object) => {
    const [dados, newDados] = useState();
    
    const baseUrl = 'http://localhost:8080';
    useEffect(() => {
        console.log("Buscando Diários por Edição");
        axios({
          headers: { 'Content-Type': 'multipart/form-data' },
          method: 'post',
          url: `${baseUrl}`,
          data: parametrosDaConsulta,
        }).then((response) => {
            if(response.status === 200 && response.data.status == true){
              newDados(response.data.diarios);
            }else{
              console.log(response)
            }
        });
    }, []);

    return {
        dados,
    }
}