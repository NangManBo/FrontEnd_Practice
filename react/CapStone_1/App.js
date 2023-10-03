import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const SCREEN_WIDTH = Dimensions.get('window').width;

function PageIndicator({ currentPage, totalPages }) {
  const indicators = [];

  for (let i = 1; i <= totalPages; i++) {
    indicators.push(
      <View
        key={i}
        style={[
          styles.indicator,
          i === currentPage ? styles.activeIndicator : null,
        ]}
      >
        <Text
          style={[
            styles.indicatorText,
            i === currentPage
              ? styles.activeIndicatorText
              : styles.activeIndicatorText, //null,
          ]}
        ></Text>
      </View>
    );
  }

  return (
    <View style={styles.pageIndicatorContainer}>
      {indicators}
    </View>
  );
}

const HomeScreen = ({ navigation }) => {
  const handleBoxPress = () => {
    navigation.navigate('Other'); // 다른 화면으로 이동
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const totalPages = 5; // 총 페이지 수

  const handleScroll = (event) => {
    const contentOffsetX =
      event.nativeEvent.contentOffset.x;
    const page = Math.ceil(
      contentOffsetX / SCREEN_WIDTH + 1
    ); // 스크롤 위치에 따라 페이지 계산
    setCurrentPage(page);
  };

  const handleScroll1 = (event) => {
    const contentOffsetX =
      event.nativeEvent.contentOffset.x;
    const page = Math.ceil(
      contentOffsetX / SCREEN_WIDTH + 1
    ); // 스크롤 위치에 따라 페이지 계산
    setCurrentPage1(page);
  };

  const handleScroll2 = (event) => {
    const contentOffsetX =
      event.nativeEvent.contentOffset.x;
    const page = Math.ceil(
      contentOffsetX / SCREEN_WIDTH + 1
    ); // 스크롤 위치에 따라 페이지 계산
    setCurrentPage2(page);
  };

  return (
    <ScrollView vertical={true}>
      <View style={styles.first_title}>
        <Text style={styles.first_text}>투표는 투기장</Text>
      </View>
      <View style={styles.second_title}>
        <Text style={styles.second_text}>
          카테고리별 투표
        </Text>
        <TouchableOpacity onPress={handleBoxPress}>
          <Text style={styles.second_text}>더보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true} // 수평 스크롤 가능하도록 설정
        pagingEnabled // 페이지 단위로 스크롤
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={handleScroll}
      >
        {/* 여러 개의 작은 박스 생성 */}
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Hello</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Hello</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <PageIndicator
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <View style={styles.second_title_2}>
        <Text style={styles.second_text}>
          카테고리별 투표
        </Text>
        <TouchableOpacity onPress={handleBoxPress}>
          <Text style={styles.second_text}>더보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true} // 수평 스크롤 가능하도록 설정
        pagingEnabled // 페이지 단위로 스크롤
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={handleScroll1}
      >
        {/* 여러 개의 작은 박스 생성 */}
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Bye</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Bye</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Bye</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Bye</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>Bye</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <PageIndicator
        currentPage={currentPage1}
        totalPages={totalPages}
      />

      <View style={styles.second_title_2}>
        <Text style={styles.second_text}>
          카테고리별 투표
        </Text>
        <TouchableOpacity onPress={handleBoxPress}>
          <Text style={styles.second_text}>더보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true} // 수평 스크롤 가능하도록 설정
        pagingEnabled // 페이지 단위로 스크롤
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={handleScroll2}
      >
        {/* 여러 개의 작은 박스 생성 */}
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>!!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>!!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>!!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>!!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBoxPress}>
          <View style={styles.box}>
            <Text style={styles.text}>!!</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <PageIndicator
        currentPage={currentPage2}
        totalPages={totalPages}
      />
    </ScrollView>
  );
};

const OtherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>다른 화면입니다.</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Do표" component={HomeScreen} />
        <Stack.Screen
          name="Other"
          component={OtherScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //기본
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollViewContent: {
    flexDirection: 'row', // 수평으로 정렬
  },

  box: {
    width: SCREEN_WIDTH - 40,
    height: 300, // 박스 높이 조절
    backgroundColor: 'black', // 박스 배경색 흰색으로 설정
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },

  first_title: {
    marginTop: 50,
    marginLeft: 20,
  },
  first_text: {
    fontSize: 30,
    color: 'black',
  },
  second_text: {
    fontSize: 15,
    color: 'black',
  },

  second_title: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 20,
    marginTop: 10,
    marginLeft: 20,
  },

  second_title_2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 20,
    marginTop: 100,
    marginLeft: 20,
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  indicator: {
    marginTop: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'black', // 활성 페이지의 배경색
  },
  indicatorText: {
    fontSize: 10,
    color: 'black',
  },
  activeIndicatorText: {
    color: 'black', // 활성 페이지의 텍스트 색상
  },
});
