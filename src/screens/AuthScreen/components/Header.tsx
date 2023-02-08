import {CustomButton, CustomImage, CustomText, View} from 'Components';
import React from 'react';
import {images} from 'assets';
import {colors} from 'Theme';
import {ColorValue, ImageSourcePropType} from 'react-native';
import {EnumScreenType} from 'Navigations/screenType';

enum EnumBtnLogin {
  FB = 'FB',
  GG = 'GG',
  APP = 'APP',
}

interface ILoginBtn {
  title: string;
  onPress?: () => void;
  color: ColorValue;
  img: ImageSourcePropType;
}

export const Header = ({screenType}: {screenType: EnumScreenType}) => {
  const renderLoginBtn = (type: EnumBtnLogin): JSX.Element => {
    const renderBtnTitle = (): ILoginBtn => {
      switch (type) {
        case EnumBtnLogin.FB:
          return {
            color: 'blue',
            title: 'KẾT NỐI VỚI FACEBOOK',
            img: images.fbLogo,
          };
        case EnumBtnLogin.GG:
          return {
            color: 'red',
            title: 'KẾT NỐI VỚI GOOGLE',
            img: images.ggLogo,
          };
        default:
          return {
            color: colors.black[500],
            title: 'ĐĂNG NHẬP VỚI APPLE',
            img: images.appLogo,
          };
      }
    };

    const renderData = renderBtnTitle();

    return (
      <CustomButton
        title={renderData.title}
        titleColor={renderData.color}
        iconLeft={
          <CustomImage imgPath={renderData.img} width={20} height={20} />
        }
        btnColor={colors.gray[300]}
        mt={12}
      />
    );
  };

  return (
    <View mh={36}>
      <CustomText
        text={screenType === EnumScreenType.LOGIN ? 'Đăng nhập' : 'Đăng ký'}
        size={22}
        textAlign="center"
        fontWeight="bold"
      />
      {renderLoginBtn(EnumBtnLogin.FB)}
      {renderLoginBtn(EnumBtnLogin.GG)}
      {renderLoginBtn(EnumBtnLogin.APP)}
      <CustomText
        text="Chúng tôi sẽ không đăng thông tin mà không có sự cho phép của bạn"
        textAlign="center"
        size={12}
        mv={8}
        color={colors.gray[800]}
      />
    </View>
  );
};
