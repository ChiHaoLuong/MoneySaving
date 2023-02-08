import React, {useState} from 'react';
import {AuthScreenProps, EnumScreenType} from 'Navigations/screenType';
import {CustomButton, CustomText, RootView, View} from 'Components';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {colors} from 'Theme';
import {goBack} from 'utils';
import {FormInput, Header} from './components';

const AuthScreen = (props: AuthScreenProps) => {
  const {route, navigation} = props;
  const screenType = route.params.screenType;

  const [screenTypeState, setScreenTypeState] =
    useState<EnumScreenType>(screenType);

  return (
    <RootView>
      <CustomButton
        width={48}
        height={48}
        justifyContent="center"
        alignItems="center"
        icon={
          <AntDesignIcon name="arrowleft" size={24} color={colors.black[500]} />
        }
        mh={8}
        onPress={() => goBack(navigation)}
      />
      <Header screenType={screenTypeState} />
      <View flexDirection="row" alignItems="center" mv={20}>
        <View height={1} flex={1} backgroundColor={colors.gray[600]} />
        <CustomText text="HOẶC" mh={4} color={colors.black[300]} />
        <View height={1} flex={1} backgroundColor={colors.gray[600]} />
      </View>
      <FormInput
        screenTypeState={screenTypeState}
        setScreenTypeState={setScreenTypeState}
      />
    </RootView>
  );
};

export default AuthScreen;
