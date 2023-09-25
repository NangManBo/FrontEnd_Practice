# Expo

## 초기 빌드
- 주의할 점! 뭔가 경로에 빈칸 있으면 안되는거 같음!

1. Expo 명령어 도구 설치 
    - cmd 창에서 아래 " " 사이 명령어 입력
        - "npm install -g expo-cli"
        - "npx expo install react-dom react-native-web @expo/webpack-config"
            -> 웹에서 프로젝트를 실행하려면 웹에서 프로젝트를 실행하는 데 도움이 되는 다음 종속성을 설치해야 한다고 하네요

2. Expo 계정 세팅
    - expo 사이트에서 먼저 회원가입
    - cmd 창에서 아래 " " 사이 명령어 입력
        - "expo login --username"(사이트 가입당시 입력한 이름)
    - 그러면 순서대로 패스워드 입력하라는 문구가 나옴

3. Expo 파일 생성
    - vscode 터미널을 연다
    - 안에 빈 폴더(앞으로 Expo관련 파일을 넣어 줄 폴더) 생성
        - 처음부터 경로에 맞는 파일을 넣어줄 것
    - cmd 창에서 아래 " " 사이 명령어 입력
         - "expo init 앱 이름(ex_practice)"
         - [!IMAGE](./Picture/expo%20init.png)

    - 폴더 경로 이동(해도 되고 안해도 됨)
        - cd 앱이름

4. Expo 시작 전 Expo 앱 설치
    - 앱스토어나 플레이스토어에서 설치
    - cmd 창에서 아래 " " 사이 명령어 입력
        - "npx expo start"
    - 이렇게 하면 폰으로 연결 성공

