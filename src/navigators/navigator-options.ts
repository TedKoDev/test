import {Platform} from 'react-native';
// import { Colors } from "~/styles"

export const stackScreenOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: 'transparent'},
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({current: {progress}}: any) => {
    return {
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 0.5, 0.9, 1],
          outputRange: [0, 0.25, 0.7, 1],
        }),
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    };
  },
};

export const tabBarStyle = {
  backgroundColor: 'white', // 배경색을 흰색으로 설정
  borderTopLeftRadius: 12, // 왼쪽 상단 모서리 둥글게
  borderTopRightRadius: 12, // 오른쪽 상단 모서리 둥글게
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  paddingVertical: 8,
  height: Platform.OS === 'ios' ? 90 : 69,
  shadowColor: '#000', // 그림자 색상
  shadowOffset: {
    width: 0, // 그림자의 너비 방향으로의 거리
    height: 2, // 그림자의 높이 방향으로의 거리
  },
  shadowOpacity: 0.16, // 그림자의 투명도
  shadowRadius: 16, // 그림자의 반경
  elevation: 5, // 안드로이드에서 그림자를 표시하는 elevation
};

//old
// export const tabBarStyle = {
//   backgroundColor: Colors.app.blackHeavy, //'transparent', //APP_COLORS.dark,
//   position: "absolute",
//   justifyContent: "center",
//   alignItems: "center",
//   display: "flex",

//   // paddingTop: 8,
//   // paddingBottom: 8,
//   paddingVertical: 8,
//   height: Platform.OS === "ios" ? 90 : 69,
// }

export const tabScreenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  unmountOnBlur: true,
  tabBarStyle: tabBarStyle as any,
};

export const bottomTabScreenOptions = (route: any) => {
  return {
    headerShown: false,
  };
};
