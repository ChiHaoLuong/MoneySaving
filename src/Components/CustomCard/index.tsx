import {View} from 'Components';
import React from 'react';
import {Pressable} from 'react-native';
import {colors} from 'Theme';
import {CustomText} from '../';

interface CustomCardProps {
  leftTitle?: string;
  rightTitle?: string;
  rightOnPress?: () => void;
  children: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[];
}

export const CustomCard = (props: CustomCardProps) => {
  const {children, leftTitle, rightOnPress, rightTitle} = props;
  return (
    <View mt={24}>
      {(leftTitle || rightTitle) && (
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          {leftTitle ? (
            <CustomText
              text={leftTitle}
              color={colors.gray[800]}
              fontWeight="500"
            />
          ) : null}
          {rightTitle && (
            <Pressable onPress={rightOnPress}>
              <CustomText
                text={rightTitle}
                color={colors.green}
                fontWeight="600"
              />
            </Pressable>
          )}
        </View>
      )}
      <View mt={8} p={12} borRad={12} backgroundColor={colors.white[500]}>
        {children}
      </View>
    </View>
  );
};
