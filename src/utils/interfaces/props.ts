import {ViewStyle, StyleProp, FlexAlignType, ColorValue} from 'react-native';
export interface CustomSpacingProps {
  mt?: number | string;
  mb?: number | string;
  mv?: number | string;
  ml?: number | string;
  mr?: number | string;
  mh?: number | string;
  pt?: number | string;
  pb?: number | string;
  ph?: number | string;
  pv?: number | string;
  pl?: number | string;
  pr?: number | string;
  m?: number | string;
  p?: number | string;
  width?: string | number;
  height?: string | number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: FlexAlignType;
  flex?: number;
  borRad?: number;
  borW?: number;
  borTW?: number;
  borBW?: number;
  borLW?: number;
  borRW?: number;
  borTColor?: ColorValue;
  borBColor?: ColorValue;
  borLColor?: ColorValue;
  borRColor?: ColorValue;
  borColor?: ColorValue;
  borTRRad?: number;
  borBRRad?: number;
  borTLRad?: number;
  borBLRad?: number;
}

export const getCustomSpacingStyles = (
  props: CustomSpacingProps,
): StyleProp<ViewStyle>[] => {
  const {
    m,
    mb,
    mh,
    mt,
    mv,
    p,
    pb,
    ph,
    pt,
    pv,
    height,
    ml,
    mr,
    pl,
    pr,
    width,
    justifyContent,
    alignItems,
    flex,
    borBColor,
    borBLRad,
    borBRRad,
    borBW,
    borColor,
    borLColor,
    borLW,
    borRColor,
    borRW,
    borRad,
    borTColor,
    borTLRad,
    borTRRad,
    borTW,
    borW,
  } = props;

  return [
    m ? {margin: m} : {},
    mt ? {marginTop: mt} : {},
    mb ? {marginBottom: mb} : {},
    mv ? {marginVertical: mv} : {},
    ml ? {marginLeft: ml} : {},
    mr ? {marginRight: mr} : {},
    mh ? {marginHorizontal: mh} : {},
    p ? {padding: p} : {},
    pt ? {paddingTop: pt} : {},
    pb ? {paddingBottom: pb} : {},
    pv ? {paddingVertical: pv} : {},
    pl ? {paddingLeft: pl} : {},
    pr ? {paddingRight: pr} : {},
    ph ? {paddingHorizontal: ph} : {},
    width ? {width} : {},
    height ? {height} : {},
    justifyContent ? {justifyContent} : {},
    alignItems ? {alignItems} : {},
    flex ? {flex} : {},
    borBColor ? {borderBottomColor: borBColor} : {},
    borTColor ? {borderTopColor: borTColor} : {},
    borLColor ? {borderLeftColor: borLColor} : {},
    borRColor ? {borderRightColor: borRColor} : {},
    borColor ? {borderColor: borColor} : {},
    borBW ? {borderBottomWidth: borBW} : {},
    borTW ? {borderTopWidth: borTW} : {},
    borLW ? {borderLeftWidth: borLW} : {},
    borRW ? {borderRightWidth: borRW} : {},
    borW ? {borderWidth: borW} : {},
    borBLRad ? {borderBottomLeftRadius: borBLRad} : {},
    borBRRad ? {borderBottomRightRadius: borBRRad} : {},
    borTLRad ? {borderTopLeftRadius: borTLRad} : {},
    borTRRad ? {borderTopRightRadius: borTRRad} : {},
    borRad ? {borderRadius: borRad} : {},
  ];
};
