import { PermissionsAndroid, Platform } from "react-native";

interface IGetGranted {
    ( fileUrl: string): Promise<boolean>;
}

export const checkPermission: IGetGranted = async (fileUrl:string) => {

    if (Platform.OS === 'ios') {
        return true;
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Permissão para Download',
            message: 'Application needs access to your storage to download File',
            buttonNeutral: 'Lembre-me mais tarde',
            buttonNegative: 'Cancelar',
            buttonPositive: 'Autorizar',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            console.log('Permissão para Armazenamento concedida.');
            return true;
        } else {
          return false;
        }
      } catch (err) {
        console.log("++++"+err);
        return false;
      }
    }
};