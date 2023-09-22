import { Alert, Platform, Share } from "react-native";
import ReactNativeBlobUtil from "react-native-blob-util";

export const downloadFile = (fileUrl:string, edicao:string) => {
    
    let FILE_URL = fileUrl;    
    let file_ext = '.pdf';

    const { config, fs, ios } = ReactNativeBlobUtil;
    let RootDir = Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.PictureDir;
    console.log("PATH: ",RootDir);
    let options = {
      fileCache: true,
      appendExt: 'pdf',
      path: RootDir + '/edicao-' + edicao + '-diario-oficial-tocantins' + file_ext,
      addAndroidDownloads: {
        description: 'baixando Diário...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,
        mime: 'application/pdf'
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        if (Platform.OS === 'ios') {
          // const filePath = res.path();
          ios.previewDocument(res.path());
        }

        console.log("RES.DATA: ",res.data)

        console.log('res -> ', JSON.stringify(res));
        Alert.alert('Diário Baixando com Sucesso!');
      });
  };