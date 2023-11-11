import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
  Border,
} from './GlobalStyles';

const MainLayoutIPhone14 = () => {
  return (
    <View style={styles.mainLayoutIphone14}>
      <View
        style={[
          styles.mainLayoutIphone14Inner,
          styles.thumblayoutChildPosition,
        ]}
      ></View>
      <View
        style={[styles.category, styles.categoryLayout]}
      >
        <Text style={[styles.text1, styles.textTypo1]}>
          카테고리별 투표
        </Text>
        <View style={styles.parent}>
          <Text style={styles.text2}>더보기</Text>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            //source={require('../assets/frame-6.png')}
          />
        </View>
      </View>
      <Text style={styles.text3}>투표는 투기장</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() =>
          navigation.navigate('VoteMainLayoutBeforeIPhone')
        }
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          //source={require('./assets/favicon.png')}
        />
      </Pressable>
      <Image
        style={styles.mainLayoutIphone14Child}
        contentFit="cover"
        //source={require('../assets/rectangle-5.png')}
      />
      <View
        style={[
          styles.thumblayout,
          styles.thumblayoutLayout,
        ]}
      >
        <View
          style={[
            styles.thumblayoutChild,
            styles.thumblayoutLayout,
          ]}
        />
        <Image
          style={[styles.thumbIcon, styles.iconPosition]}
          contentFit="cover"
          //source={require('../assets/thumb-icon.png')}
        />
        <Text style={[styles.text4, styles.textTypo]}>
          1,234
        </Text>
      </View>
      <Text style={[styles.text5, styles.textPosition]}>
        테스트사이즈
      </Text>
      <Text style={[styles.text6, styles.textPosition]}>
        투표는 투기장
      </Text>
      <Image
        style={styles.indicatorIcon}
        contentFit="cover"
        //source={require('../assets/indicator.png')}
      />
      <View
        style={[styles.category1, styles.categoryLayout]}
      >
        <Text style={[styles.text1, styles.textTypo1]}>
          카테고리별 투표
        </Text>
        <View style={styles.parent}>
          <Text style={styles.text2}>더보기</Text>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            // source={require('../assets/frame-6.png')}
          />
        </View>
      </View>
      <View style={styles.homeIndicatorWrapper}>
        <View
          style={[
            styles.homeIndicator,
            styles.wrapperPosition,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thumblayoutChildPosition: {
    top: 0,
    left: 0,
  },
  iconPosition: {
    top: 4,
    position: 'absolute',
  },
  categoryLayout: {
    height: 22,
    width: 342,
    left: 24,
    position: 'absolute',
  },
  textTypo1: {
    textAlign: 'left',
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.pretendard,
    fontWeight: '600',
    position: 'absolute',
  },
  wrapperPosition: {
    left: '50%',
    position: 'absolute',
  },
  thumblayoutLayout: {
    height: 32,
    width: 83,
    position: 'absolute',
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    letterSpacing: -0.3,
    lineHeight: 22,
  },
  textPosition: {
    left: 64,
    color: Color.colorBlack,
    textAlign: 'left',
    fontFamily: FontFamily.pretendard,
    position: 'absolute',
  },
  rightSideIcon: {
    right: 0,
    width: 67,
    height: 11,
  },
  text: {
    fontSize: FontSize.defaultBoldSubheadline_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldSubheadline,
    color: Color.colorGray_200,
    textAlign: 'center',
    width: 54,
    fontWeight: '600',
    height: 20,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  rightSideParent: {
    top: 12,
    right: 18,
    width: 354,
    height: 20,
    position: 'absolute',
  },
  mainLayoutIphone14Inner: {
    height: 44,
    width: 390,
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  text1: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    textAlign: 'left',
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.4,
    left: 0,
    top: 0,
  },
  text2: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.colorGray_100,
    letterSpacing: -0.3,
    textAlign: 'left',
    fontFamily: FontFamily.pretendard,
    fontWeight: '600',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  groupChild: {
    top: 3,
    left: 31,
    width: 10,
    height: 10,
    position: 'absolute',
    overflow: 'hidden',
  },
  parent: {
    top: 6,
    left: 301,
    width: 41,
    height: 16,
    position: 'absolute',
  },
  category: {
    top: 107,
  },
  text3: {
    top: 60,
    fontSize: 24,
    letterSpacing: -0.6,
    lineHeight: 34,
    color: Color.colorBlack,
    textAlign: 'left',
    fontFamily: FontFamily.pretendard,
    left: 24,
    fontWeight: '600',
    position: 'absolute',
  },
  icon: {
    marginTop: -278,
    marginLeft: -195,
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  wrapper: {
    top: '50%',
    height: 360,
    width: 390,
  },
  mainLayoutIphone14Child: {
    top: 354,
    left: 44,
    borderRadius: 16,
    width: 302,
    height: 90,
    position: 'absolute',
  },
  thumblayoutChild: {
    borderRadius: 1000,
    backgroundColor: Color.colorWhite,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  thumbIcon: {
    left: 10,
    width: 24,
    height: 24,
  },
  text4: {
    top: 5,
    left: 38,
    textAlign: 'left',
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.pretendard,
    fontWeight: '600',
    position: 'absolute',
  },
  thumblayout: {
    top: 383,
    left: 253,
  },
  text5: {
    top: 374,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    letterSpacing: -0.4,
    left: 64,
    fontWeight: '600',
  },
  text6: {
    top: 402,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.3,
    lineHeight: 22,
  },
  indicatorIcon: {
    top: 484,
    left: 162,
    width: 66,
    height: 6,
    position: 'absolute',
  },
  category1: {
    top: 527,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDimgray,
    width: 134,
    height: 5,
  },
  homeIndicatorWrapper: {
    top: 810,
    height: 34,
    width: 390,
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  mainLayoutIphone14: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: 'hidden',
    width: '100%',
  },
});

export default MainLayoutIPhone14;
