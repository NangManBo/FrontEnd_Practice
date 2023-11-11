import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.mainPage}>
    <Text style={styles.main_title}>공유우산 서비스</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('UserView')}
    >
      <Image
        source={require('./assets/UserView.png')}
        style={styles.main_user}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('MapView')}
    >
      <Image
        source={require('./assets/MapView.png')}
        style={styles.main_map}
      />
    </TouchableOpacity>

    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ReturnView')}
      >
        <Image
          source={require('./assets/ReturnView.png')}
          style={styles.main_return}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('RentView')}
      >
        <Image
          source={require('./assets/RentView.png')}
          style={styles.main_rent}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExtendUsageView')
        }
      >
        <View style={styles.main_row_box}>
          <Text style={styles.main_row_text}>
            사용 연장
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RemainingQuantityView')
        }
      >
        <View style={styles.main_row_box}>
          <Text style={styles.main_row_text}>
            잔여 수량
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ReserveView')}
      >
        <View style={styles.main_row_box}>
          <Text style={styles.main_row_text}>
            예약 하기
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

// 유저 정보
const UserView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text}>유저 정보</Text>
    </View>
  </View>
);

// 우산위치 확인
const MapView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text}>우산 위치 찾기</Text>
    </View>
  </View>
);

//반납하기
const ReturnView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text1}>반납하기</Text>
    </View>
    <View style={styles.QR_info_box}>
      <Text style={styles.QR_info_text}>사용시간 ~~ </Text>
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate('ReturnMapView')}
    >
      <Image
        source={require('./assets/ReturnView2.png')}
        style={styles.Rent_Return_View}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('ReturnQRView')}
    >
      <Image
        source={require('./assets/QR.png')}
        style={styles.Rent_Return_View}
      />
    </TouchableOpacity>
  </View>
);

// 반납위치 확인
const ReturnMapView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ReturnView')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text}>반납위치 확인</Text>
    </View>
  </View>
);

// 반납 QR 스캔
const ReturnQRView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ReturnView')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text1}>QR</Text>
    </View>
  </View>
);

// 대여하기
const RentView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text1}>대여하기</Text>
    </View>
    <View style={styles.QR_info_box}>
      <Text style={styles.QR_info_text}>사용시간 ~~ </Text>
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate('RentMapView')}
    >
      <Image
        source={require('./assets/RentView2.png')}
        style={styles.Rent_Return_View}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('RentQRView')}
    >
      <Image
        source={require('./assets/QR.png')}
        style={styles.Rent_Return_View}
      />
    </TouchableOpacity>
  </View>
);
// 대여위치 확인
const RentMapView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('RentView')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text}>대여위치 찾기</Text>
    </View>
  </View>
);

// 대여 QR 스캔
const RentQRView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('RentView')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text1}>QR</Text>
    </View>
  </View>
);
// 사용시간 연장
const ExtendUsageView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text1}>사용시간 연장</Text>
    </View>
    <View style={styles.QR_info_box}>
      <Text style={styles.QR_info_text}>사용시간 ~~ </Text>
    </View>
    <View style={styles.Extend_Usage_View}>
      <Text style={styles.Extend_Usage_text}>
        추가할 시간{' '}
      </Text>
    </View>
    <View style={styles.Extend_Usage_View}>
      <Text style={styles.Extend_Usage_text}>
        기존 시간 대비{' '}
      </Text>
    </View>

    <TouchableOpacity>
      <Image
        source={require('./assets/ExtendUsageView2.png')}
        style={styles.main_map}
      />
    </TouchableOpacity>
  </View>
);
// 잔여수량 확인
const RemainingQuantityView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text1}>잔여수량 확인</Text>
    </View>
    <View style={styles.Remain_box}>
      <Text style={styles.Remain_text1}>장소명 </Text>
      <Text style={styles.Remain_text2}>
        남은 수량 n개{' '}
      </Text>
    </View>
    <View style={styles.Remain_box}>
      <Text style={styles.Remain_text1}>장소명 </Text>
      <Text style={styles.Remain_text2}>
        남은 수량 n개{' '}
      </Text>
    </View>
    <View style={styles.Remain_box}>
      <Text style={styles.Remain_text1}>장소명 </Text>
      <Text style={styles.Remain_text2}>
        남은 수량 n개{' '}
      </Text>
    </View>
    <View style={styles.Remain_box}>
      <Text style={styles.Remain_text1}>장소명 </Text>
      <Text style={styles.Remain_text2}>
        남은 수량 n개{' '}
      </Text>
    </View>
  </View>
);
//예약
const ReserveView = ({ navigation }) => (
  <View style={styles.mainPage}>
    <View style={styles.main_Row}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Image
          source={require('./assets/Back_Button.png')}
        />
      </TouchableOpacity>
      <Text style={styles.back_text1}>예약</Text>
    </View>
    <View style={styles.Extend_Usage_View}>
      <Text style={styles.Extend_Usage_text}>
        예약날짜{' '}
      </Text>
    </View>
    <View style={styles.Extend_Usage_View}>
      <Text style={styles.Extend_Usage_text}>
        예약기간{' '}
      </Text>
    </View>
    <View style={styles.QR_info_box}>
      <Text style={styles.QR_info_text}>사용시간 ~~ </Text>
    </View>
    <TouchableOpacity>
      <Image
        source={require('./assets/ReserveView2.png')}
        style={styles.main_map}
      />
    </TouchableOpacity>
  </View>
);

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="UserView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={UserView}
        />
        <Stack.Screen
          name="MapView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={MapView}
        />
        <Stack.Screen
          name="RentView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={RentView}
        />
        <Stack.Screen
          name="RentMapView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={RentMapView}
        />
        <Stack.Screen
          name="ReturnView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={ReturnView}
        />
        <Stack.Screen
          name="ReturnMapView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={ReturnMapView}
        />
        <Stack.Screen
          name="RentQRView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={RentQRView}
        />
        <Stack.Screen
          name="ReturnQRView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={ReturnQRView}
        />
        <Stack.Screen
          name="ExtendUsageView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={ExtendUsageView}
        />
        <Stack.Screen
          name="RemainingQuantityView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={RemainingQuantityView}
        />
        <Stack.Screen
          name="ReserveView"
          options={{
            headerShown: false, // 화면 상단에 헤더를 숨김
          }}
          component={ReserveView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
