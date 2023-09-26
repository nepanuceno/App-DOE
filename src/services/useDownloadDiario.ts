import { downloadFile } from "./DownloadFile";
import { checkPermission } from "../utils/checkPermission";

export const useDownloadDiario = (url:string, edicao:string) => {

  checkPermission(url).then( data => {
    console.log("CHECK: ", data);
    if (data == true) {
      downloadFile(url, edicao);
    }
  });


  return true;
};
