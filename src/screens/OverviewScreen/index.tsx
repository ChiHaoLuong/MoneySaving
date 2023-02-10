import {CustomCard, CustomText, RootView, View} from 'Components';
import React from 'react';
import {colors} from 'Theme';
import {Header} from './components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Pressable} from 'react-native';

const OverviewScreen = () => {
  return (
    <RootView isScroll mh={12} backgroundColor={colors.backgroundGray}>
      <Header />
      <View flexDirection="row" alignItems="center">
        <CustomText text="Tổng số dư" color={colors.gray[800]} mr={4} />
        <AntDesign name="questioncircle" color={colors.gray[800]} size={16} />
      </View>
      <CustomCard>
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <CustomText text="Ví của tôi" fontWeight="bold" size={16} />
          <Pressable>
            <CustomText
              text="Xem tất cả"
              fontWeight="600"
              size={16}
              color={colors.green}
            />
          </Pressable>
        </View>
      </CustomCard>
    </RootView>
  );
};

export default OverviewScreen;
