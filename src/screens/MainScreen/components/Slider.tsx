import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewStyle,
} from 'react-native';
import React, {useRef} from 'react';
import {StyleProp} from 'react-native';
import {View, CustomText, CustomImage} from '@components';
import {ISliderLoginData, SLIDER_LOGIN_DATA} from 'utils/data';
import {SCREEN_WIDTH} from 'utils';
import {colors} from 'Theme';

interface SliderProps {
  containerStyle?: StyleProp<ViewStyle>;
  sliderIndex: number;
  setSliderIndex: (number: number) => void;
}

export const Slider = (props: SliderProps) => {
  const {containerStyle, setSliderIndex, sliderIndex} = props;

  const listRef = useRef<FlatList>(null);

  const onScrollHandle = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slider = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    if (slider !== sliderIndex) {
      setSliderIndex(slider);
    }
  };

  const renderItemSlider = ({item}: {item: ISliderLoginData}) => {
    return (
      <View width={SCREEN_WIDTH} alignItems="center">
        <View
          p={36}
          borRad={SCREEN_WIDTH / 3}
          backgroundColor={colors.green}
          mv={120}>
          <CustomImage
            width={SCREEN_WIDTH / 3}
            height={SCREEN_WIDTH / 3}
            resizeModePath="contain"
            imgPath={item.img}
          />
        </View>
        <CustomText
          mt={'auto'}
          size={24}
          textAlign="center"
          fontWeight="bold"
          text={item.title}
          ph={36}
        />
      </View>
    );
  };

  return (
    <View alignItems="center" justifyContent="center" style={containerStyle}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        data={SLIDER_LOGIN_DATA}
        keyExtractor={i => i.id + ''}
        renderItem={renderItemSlider}
        onScroll={onScrollHandle}
        ref={listRef}
      />
    </View>
  );
};
