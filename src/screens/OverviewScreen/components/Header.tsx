import {CustomText, View} from 'Components';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'Theme';

export const Header = () => {
  const [isShownMoney, setIsShowMoney] = useState<boolean>(true);

  return (
    <View
      mv={12}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <View flexDirection="row" alignItems="center">
        <CustomText
          text={isShownMoney ? '1,000,000,000' : '**********'}
          size={18}
          fontWeight="bold"
          mr={12}
        />
        <Ionicons
          name={isShownMoney ? 'eye' : 'eye-off'}
          color={colors.black[500]}
          size={24}
          onPress={() => setIsShowMoney(!isShownMoney)}
        />
      </View>
      <Ionicons name="notifications" color={colors.black[500]} size={24} />
    </View>
  );
};
