import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum EnumScreenType {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

export type UnAuthParamList = {
  Main: undefined;
  Auth: {
    screenType: EnumScreenType;
  };
};

export type MainScreenProps = NativeStackScreenProps<UnAuthParamList, 'Main'>;
export type AuthScreenProps = NativeStackScreenProps<UnAuthParamList, 'Auth'>;
