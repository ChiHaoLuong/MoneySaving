import {images} from '@assets';
import {ImageSourcePropType} from 'react-native';

export interface ISliderLoginData {
  id: number;
  img: ImageSourcePropType;
  title: string;
}

export const SLIDER_LOGIN_DATA: ISliderLoginData[] = [
  {
    id: 1,
    title: 'Quản lý tài chính hiệu quả',
    img: images.moneyManagement,
  },
  {
    id: 2,
    title: 'Cắt giảm chi phí không cần thiết',
    img: images.cutMoney,
  },
  {
    id: 3,
    title: 'Quản lý tất cả ở 1 nơi',
    img: images.world,
  },
];
