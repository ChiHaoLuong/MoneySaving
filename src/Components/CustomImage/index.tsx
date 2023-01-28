import {
  StyleSheet,
  View,
  Image as IMG,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  ActivityIndicator,
  ImageResizeMode,
} from 'react-native';
import React, {useState} from 'react';
import {isEmpty} from 'lodash';
import FastImage, {ResizeMode} from 'react-native-fast-image';
import {images} from '../../assets';

interface ImageComponentProps {
  imgUri?: string;
  imgPath?: ImageSourcePropType;
  width?: number | string;
  height?: number | string;
  style?: StyleProp<ImageStyle>;
  resizeModePath?: ImageResizeMode;
  resizeModeUri?: ResizeMode;
}

export const CustomImage = (props: ImageComponentProps) => {
  const {imgPath, imgUri, style, height, width, ...imgProps} = props;

  const [urlError, setUrlError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadingOn = () => setIsLoading(true);

  const loadingOff = () => setIsLoading(false);

  const loadingErr = () => setUrlError(true);

  const loadingImg = (): JSX.Element => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator />
    </View>
  );

  const imgDefaultStyles: StyleProp<ImageStyle>[] = [
    width ? {width: width} : {},
    height ? {height: height} : {},
  ];

  if (!isEmpty(imgUri) && !urlError) {
    return (
      <>
        {!urlError && isLoading && loadingImg()}
        <FastImage
          source={{
            uri: imgUri,
          }}
          {...imgProps}
          style={[styles.container, imgDefaultStyles, style]}
          onLoadStart={loadingOn}
          onLoadEnd={loadingOff}
          onError={loadingErr}
        />
      </>
    );
  }

  return (
    <IMG
      style={[styles.container, imgDefaultStyles, style]}
      source={urlError ? images.errorImg : imgPath}
      {...imgProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
