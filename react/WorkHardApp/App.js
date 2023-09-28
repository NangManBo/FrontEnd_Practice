import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { theme } from './colors';
import { Fontisto } from '@expo/vector-icons';
import AsyncStorge from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';

const STORAGE_KEY = '@toDos';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');
  const [toDos, setToDos] = useState({});
  useEffect(() => {
    loadToDos();
  }, []);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);

  const saveToDos = async (toSave) => {
    await AsyncStorge.setItem(
      STORAGE_KEY,
      JSON.stringify(toSave)
    );
  };

  const loadToDos = async () => {
    const s = await AsyncStorge.getItem(STORAGE_KEY);
    setToDos(JSON.parse(s));
  };

  const addToDo = async () => {
    if (text === '') {
      return;
    }
    // 할일 저장
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working },
    };
    setToDos(newToDos);
    saveToDos(newToDos);
    setText('');
  };

  const deleteToDo = async (key) => {
    Alert.alert('Delete To Do?', 'Are you sure?', [
      { text: 'Cancel' },
      {
        text: "I'm Sure",
        style: 'destructive',
        onPress: async () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          await saveToDos(newToDos);
        },
      },
    ]);
    return;
  };

  console.log(toDos);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* 일, 여행 구분 버튼 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.btnText,
              color: working ? 'white' : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? 'white' : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>

      {/* 입력창 */}
      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        returnKeyType="done"
        value={text}
        placeholder={
          working ? 'Add a To Do' : 'Where do you want'
        }
        style={styles.input}
      ></TextInput>

      {/* 목록 저장 */}
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>
                {toDos[key].text}
              </Text>
              <TouchableOpacity
                onPress={() => deleteToDo(key)}
              >
                <Fontisto
                  name="trash"
                  size={18}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },

  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },

  btnText: {
    fontSize: 38,
    fontWeight: '600',
  },

  input: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 30,
    fontSize: 15,
  },

  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  toDoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
