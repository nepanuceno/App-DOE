import { Alert, Platform } from "react-native";
import RNFetchBlob from "rn-fetch-blob";

export const downloadFile = (fileUrl:string, edicao:string) => {
    
    let FILE_URL = fileUrl;    
    let file_ext = '.pdf';

    const { config, fs } = RNFetchBlob;
    let RootDir = Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.PictureDir;
    console.log("PATH: ",RootDir);
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path: RootDir + '/edicao-' + edicao + '-diario-oficial-tocantins' + file_ext,
        description: 'baixando Diário...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,   
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        console.log('res -> ', JSON.stringify(res));
        Alert.alert('Diário Baixando com Sucesso!');
      });
  };