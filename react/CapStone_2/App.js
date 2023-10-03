import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function Main_LayoutiPhone14 () {
  return (
    <View style={Main_LayoutiPhone14Styles.Main_LayoutiPhone14}>
      <View style={Main_LayoutiPhone14Styles.Frame3}>
        <View style={Main_LayoutiPhone14Styles.Group3}>
          <View style={Main_LayoutiPhone14Styles.RightSide}>
            <View style={Main_LayoutiPhone14Styles.Battery}>
              <Svg id='Rectangle' />
              <Svg id='CombinedShape' />
              <Svg id='Rectangle' />
            </View>
            <Svg id='Wifi' />
            <Svg id='MobileSignal' />
          </View>
          <Text style={Main_LayoutiPhone14Styles.941}>
            9:41
          </Text>
        </View>
      </View>
      <View style={Main_LayoutiPhone14Styles.Category}>
        <Text style={Main_LayoutiPhone14Styles.}>
          카테고리별 투표
        </Text>
        <View style={Main_LayoutiPhone14Styles.Group5}>
          <Text style={Main_LayoutiPhone14Styles.}>
            더보기
          </Text>
          <View style={Main_LayoutiPhone14Styles.Frame6}>
            <Svg id='Vector1' />
          </View>
        </View>
      </View>
      <Text style={Main_LayoutiPhone14Styles.}>
        투표는 투기장
      </Text>
      <Image /* source={require('./Rectangle3.png')} */ />
      <Svg id='Rectangle5' />
      <View style={Main_LayoutiPhone14Styles.ThumbLayout}>
        <View style={Main_LayoutiPhone14Styles.Rectangle4} />
        <View style={Main_LayoutiPhone14Styles.thumb_icon}>
          <View style={Main_LayoutiPhone14Styles.Group15}>
            <View style={Main_LayoutiPhone14Styles.Group13}>
              <View style={Main_LayoutiPhone14Styles.Group11}>
                <View style={Main_LayoutiPhone14Styles.Frame4}>

                </View>
              </View>
            </View>
          </View>
          <Svg id='shape' />
        </View>
        <Text style={Main_LayoutiPhone14Styles.1234}>
          1,234
        </Text>
      </View>
      <Text style={Main_LayoutiPhone14Styles.}>
        테스트사이즈
      </Text>
      <Text style={Main_LayoutiPhone14Styles.}>
        투표는 투기장
      </Text>
      <View style={Main_LayoutiPhone14Styles.Indicator}>
        <View style={Main_LayoutiPhone14Styles.Ellipse1} />
        <View style={Main_LayoutiPhone14Styles.Ellipse3} />
        <View style={Main_LayoutiPhone14Styles.Ellipse5} />
        <View style={Main_LayoutiPhone14Styles.Ellipse2} />
        <View style={Main_LayoutiPhone14Styles.Ellipse4} />
        <View style={Main_LayoutiPhone14Styles.Ellipse6} />
      </View>
      <View style={Main_LayoutiPhone14Styles.Category}>
        <Text style={Main_LayoutiPhone14Styles.}>
          카테고리별 투표
        </Text>
        <View style={Main_LayoutiPhone14Styles.Group5}>
          <Text style={Main_LayoutiPhone14Styles.}>
            더보기
          </Text>
          <View style={Main_LayoutiPhone14Styles.Frame6}>
            <Svg id='Vector1' />
          </View>
        </View>
      </View>
      <View style={Main_LayoutiPhone14Styles.Frame6}>
        <View style={Main_LayoutiPhone14Styles.HomeIndicator} />
      </View>
    </View>
  )
}

const Main_LayoutiPhone14Styles = StyleSheet.create({
  Main_LayoutiPhone14: {
    width: 24.38,
    height: 52.75,
    backgroundColor: '#f5f5f5',
  },
  Frame3: {
    width: 24.38,
    height: 2.75,
  },
  Group3: {
    margin: '1.13 0.75',
    width: 22.15,
    height: 1.25,
  },
  RightSide: {
    margin: '17.98 0.27',
    width: 4.17,
    height: 0.71,
  },
  Battery: {
    margin: '2.65 0',
    width: '36.5%',
    height: '99.97%',
  },
  941: {
    width: 3.38,
    height: 1.25,
    color: '#111111',
    fontFamily: 'SF Pro Text, sans-serif',
    fontSize: 0.94,
    fontWeight: '600',
    lineHeight: 1.25,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  Category: {
    margin: '1.5 6.69',
    width: 21.38,
    height: 1.38,
  },
  a: {
    width: 6.94,
    height: 1.38,
    color: '#383838',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: 1.13,
    fontWeight: '600',
    lineHeight: 1.38,
    letterSpacing: -0.45,
  },
  Group5: {
    margin: '18.81 0.38',
    width: 2.56,
    height: 1,
  },
  b: {
    width: 1.94,
    height: 1,
    color: '#767676',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: 0.75,
    fontWeight: '600',
    lineHeight: 1,
    letterSpacing: -0.30000000000000004,
  },
  Frame6: {
    margin: '1.94 0.19',
    width: 0.63,
    height: 0.63,
  },
  c: {
    margin: '1.5 3.75',
    width: 7.94,
    height: 2.13,
    color: '#000000',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: 1.5,
    fontWeight: '600',
    lineHeight: 2.13,
    letterSpacing: -0.6000000000000001,
  },
  ThumbLayout: {
    margin: '15.81 23.94',
    width: 5.19,
    height: 2,
  },
  Rectangle4: {
    width: 5.19,
    height: 2,
    backgroundColor: '#ffffff',
    borderRadius: 62.5,
    boxShadow: 0 0.5 0.5 'rgba(0, 0, 0, 0.05)',
  },
  thumb_icon: {
    margin: '0.63 0.25',
    width: 1.5,
    height: 1.5,
  },
  Group15: {
    width: 1.5,
    height: 1.5,
  },
  Group13: {
    width: 1.5,
    height: 1.5,
  },
  Group11: {
    width: 1.5,
    height: 1.5,
  },
  Frame4: {
    width: 1.5,
    height: 1.5,
  },
  1234: {
    margin: '2.38 0.31',
    width: 2.19,
    height: 1.38,
    color: '#383838',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: 0.88,
    fontWeight: '600',
    lineHeight: 1.38,
    letterSpacing: -0.35000000000000003,
  },
  : {
    margin: '4 23.38',
    width: 5.06,
    height: 1.5,
    color: '#000000',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: 1,
    fontWeight: '600',
    lineHeight: 1.5,
    letterSpacing: -0.4,
  },
  : {
    margin: '4 25.13',
    width: 4.69,
    height: 1.38,
    color: '#000000',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: 0.88,
    lineHeight: 1.38,
    letterSpacing: -0.35000000000000003,
  },
  Indicator: {
    margin: '10.13 30.25',
    width: 4.13,
    height: 0.38,
  },
  Ellipse1: {
    width: 0.38,
    height: 0.38,
    backgroundColor: '#000000',
    borderRadius: '50%',
  },
  Ellipse3: {
    margin: '1.5 0',
    width: 0.38,
    height: 0.38,
    backgroundColor: '#dbdbdb',
    borderRadius: '50%',
  },
  Ellipse5: {
    margin: '3 0',
    width: 0.38,
    height: 0.38,
    backgroundColor: '#dbdbdb',
    borderRadius: '50%',
  },
  Ellipse2: {
    margin: '0.75 0',
    width: 0.38,
    height: 0.38,
    backgroundColor: '#dbdbdb',
    borderRadius: '50%',
  },
  Ellipse4: {
    margin: '2.25 0',
    width: 0.38,
    height: 0.38,
    backgroundColor: '#dbdbdb',
    borderRadius: '50%',
  },
  Ellipse6: {
    margin: '3.75 0',
    width: 0.38,
    height: 0.38,
    backgroundColor: '#dbdbdb',
    borderRadius: '50%',
  },
  Category: {
    margin: '1.5 32.94',
    width: 21.38,
    height: 1.38,
  },
  : {
    width: 6.94,
    height: 1.38,
    color: '#383838',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: 1.13,
    fontWeight: '600',
    lineHeight: 1.38,
    letterSpacing: -0.45,
  },
  Group5: {
    margin: '18.81 0.38',
    width: 2.56,
    height: 1,
  },
  : {
    width: 1.94,
    height: 1,
    color: '#767676',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: 0.75,
    fontWeight: '600',
    lineHeight: 1,
    letterSpacing: -0.30000000000000004,
  },
  Frame6: {
    margin: '1.94 0.19',
    width: 0.63,
    height: 0.63,
  },
  Frame6: {
    width: 24.38,
    height: 2.13,
  },
  HomeIndicator: {
    margin: '8 1.31',
    width: 8.38,
    height: 0.31,
    backgroundColor: '#626877',
    borderRadius: 6.25,
  },

})
