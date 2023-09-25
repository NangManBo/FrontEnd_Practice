import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import {ActivityIndicator, View,StyleSheet,Text, ScrollView, Dimensions } from 'react-native';
import {Fontisto} from '@expo/vector-icons'

const SCREEN_WIDTH = Dimensions.get("window").width;

const API_KEY = "8e9cac23dd13165757565eca2f5678c9";//무료 API, openweather

const icons ={
  Clouds:"cloudy",
  Clear:"day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow:"snow",
  Rain:"rains",
  Dirzzle:"rain",
  Thunderstorm:"lightning"
}
export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const getWeather = async()=>{
    // 권한 체크
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!'granted') {
        setOk(false);
    }
    // 현재 내 위치(좌표)
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    //위에 위치(좌표)로 주소 알아내기
    const location = await Location.reverseGeocodeAsync(
      {latitude,longitude},
      {useGoogleMaps : false}
    );

    setCity(location[0].city);
    //current weather-> 무료
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    const  json = await response.json();
    
    //console.log(json);

    setDays(
      json.list.filter((weather) => {
        if (weather.dt_txt.includes("00:00:00")) {
           return weather;
       }
     })
    );
  }

  useEffect(()=>{
    getWeather();
  },[])

  return (
    <View style={styles.container}>
        <View style={styles.city}>
            <Text style = {styles.cityName}>{city}</Text>
        </View>
        <ScrollView
          pagingEnabled
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weather}
        >
          {days.length === 0 ?(
            <View style={styles.day}>
              <ActivityIndicator 
                color="white" 
                style ={{marginTop : 10}}
                size="large"/>
            </View>
          ):(
            days.map((day,index)=>
              <View style={styles.day}>
                <View style={{
                  flexDirection: "row", 
                  alignItems:"center", 
                  width:"100%",
                  justifyContent:"space-between",
                }}>
                  <Text style={styles.temp}>{parseFloat(day.main.temp).toFixed(1)}</Text>
                  <Fontisto name={icons[day.weather[0].main]} size={68} color="white"></Fontisto>                
                </View>
                <Text style={styles.description}>{day.weather[0].main}</Text>
                <Text style={styles.tinyText}>{day.weather[0].description}</Text>
              </View>
            )
          )}
        </ScrollView>
    </View>
  );
} 

const styles = StyleSheet.create({
  container :{
    flex: 1, 
    backgroundColor:"skyblue"
  },
  city: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  cityName:{
    color:"white",
    fontSize:60,
  },
  weather: {
    
  },
  day:{
    width:SCREEN_WIDTH,
    alignItems: "left"
  },
  temp :{
    color:"white",
    marginLeft:10,
    marginTop:50,
    fontSize: 150,
  },
  description : { 
    color:"white",
    marginLeft:10,
    marginTop: 0,
    fontSize : 30,
  },
  tinyText:{
    color:"white",
    marginLeft:10,
    fontSize: 20,
  },
})
