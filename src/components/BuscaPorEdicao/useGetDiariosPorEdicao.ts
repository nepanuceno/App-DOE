import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetDiariosPorEdicao = () => {
    const [dados, newDados] = useState();
    
    const baseUrl = 'http://localhost:8080';
    useEffect(() => {
        console.log("Buscando Diários por Edição");
        axios({
          headers: { 'Content-Type': 'multipart/form-data' },
          method: 'post',
          url: `${baseUrl}`,
          data: {
            por:'edicao',
            edicao: 6390,
          }
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