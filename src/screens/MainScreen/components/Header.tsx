import React from 'react';
import {CustomImage, CustomText, View} from '@components';
import {images} from '@assets';
import {colors} from '../../../Theme';
import {StyleProp, ViewStyle} from 'react-native';

export const Header = ({style}: {style?: StyleProp<ViewStyle>}) => {
  return (
    <View style={style} alignItems="center" flexDirection="row">
      <CustomImage
        imgPath={images.walletLogo}
        width={20}
        height={20}
        resizeModePath="contain"
      />
      <CustomText
        ml={4}
        color={colors.green}
        text="Money Saving"
        size={18}
        lineHeight={20}
        fontWeight="bold"
      />
    </View>
  );
};
