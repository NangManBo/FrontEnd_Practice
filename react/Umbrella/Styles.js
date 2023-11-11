import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  //기본
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainPage: {
    marginTop: 80,
    marginLeft: 40,
    marginRight: 40,
  },

  main_title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  main_user: {
    borderRadius: 20,
    marginTop: 50,
    width: 340,
  },

  main_map: {
    borderRadius: 20,
    marginTop: 50,
    width: 340,
    height: 160,
  },

  main_Row: {
    flexDirection: 'row',
  },

  main_return: {
    borderRadius: 20,
    marginTop: 50,
    marginRight: 10,
    width: 160,
    height: 160,
  },

  main_rent: {
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 10,
    width: 160,
    height: 160,
  },

  main_row_box: {
    backgroundColor: '#9CD200',
    borderRadius: 20,
    marginTop: 50,
    marginRight: 5,
    width: 110,
    height: 70,
  },

  main_row_text: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  back_text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 3,
  },

  back_text1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5,
  },

  QR_info_box: {
    backgroundColor: 'gray',
    borderRadius: 20,
    marginTop: 50,
    width: 340,
    height: 100,
  },

  QR_info_text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 40,
  },

  // 대여하기/반납하기 안의 뷰 설정
  Rent_Return_View: {
    borderRadius: 20,
    marginTop: 50,
    width: 340,
    height: 180,
  },

  //사용시간 연장
  Extend_Usage_View: {
    backgroundColor: '#FFB546',
    borderRadius: 20,
    marginTop: 30,
    width: 340,
    height: 120,
  },

  Extend_Usage_text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 50,
  },

  Remain_box: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    borderRadius: 20,
    marginTop: 40,
    width: 340,
    height: 120,
  },
  Remain_text1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 50,
  },
  Remain_text2: {
    fontSize: 14,
    marginLeft: 15,
    marginTop: 55,
  },
});
