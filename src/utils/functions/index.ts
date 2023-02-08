export const goBack = (navigation: any) => {
  if (navigation.canGoBack()) {
    navigation.goBack();
  }
};
