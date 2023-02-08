import React, {useState} from 'react';
import {CustomButton, RootView, View} from '@components';
import {Header, Slider} from './components';
import styles from './styles';
import {ISliderLoginData, SLIDER_LOGIN_DATA} from 'utils';
import {colors} from 'Theme';
import {EnumScreenType, MainScreenProps} from 'Navigations/screenType';

const MainScreen = ({navigation}: MainScreenProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const onAuthScreenNavigating = (screenType: EnumScreenType) =>
    navigation.navigate('Auth', {
      screenType,
    });

  const _renderSliderIndex = (e: ISliderLoginData, i: number): JSX.Element => {
    const isCurrent = i === sliderIndex ? true : false;
    return (
      <View
        key={i}
        backgroundColor={!isCurrent ? colors.gray[500] : colors.green}
        width={8}
        height={8}
        mh={8}
        borRad={4}
      />
    );
  };

  return (
    <RootView>
      <Header style={styles.header} />
      <Slider
        setSliderIndex={setSliderIndex}
        sliderIndex={sliderIndex}
        containerStyle={styles.slider}
      />
      <View justifyContent="center" mt={16} mb={64} flexDirection="row">
        {SLIDER_LOGIN_DATA.map((e, i) => _renderSliderIndex(e, i))}
      </View>
      <CustomButton
        title="ĐĂNG KÝ MIỄN PHÍ"
        btnColor={colors.green}
        mh={36}
        borRad={24}
        titleColor={colors.white[500]}
        pv={16}
        onPress={() => onAuthScreenNavigating(EnumScreenType.REGISTER)}
      />
      <CustomButton
        title="ĐĂNG NHẬP"
        btnColor={colors.gray[300]}
        mh={36}
        borRad={24}
        titleColor={colors.green}
        pv={16}
        mt={12}
        onPress={() => onAuthScreenNavigating(EnumScreenType.LOGIN)}
      />
    </RootView>
  );
};

export default MainScreen;
