// 기회 5번

let randomNumber = 0;
let inputNum = document.getElementById("input");
let startBtn = document.getElementById("startBtn");
let checkBtn = document.getElementById("checkBtn");

let result = document.getElementById("result");
let chanceArea = document.getElementById("chance");
let chance = 5;
let gameEnd = false;
let inputNumList = [];

// 랜덤 번호 지정.
function computerNum(){
    randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
}

// 버튼
startBtn.addEventListener("click", start);
checkBtn.addEventListener("click", check);
// 마우스로 입력창을 클릭할때 입력되어 있는 값을 리셋
inputNum.addEventListener("focus", function(){
    inputNum.value="";
})

// startbutton을 눌렀을 때 반응
function start(){
    inputNum.value="";
    reset();
    computerNum();
    result.textContent = "어서 맞춰봐!"
    checkBtn.disabled= false;
    checkBtn.style.backgroundColor="rgba(75, 87, 255, 0.4)";
};

function check(){
    let inputNumValue = inputNum.value;

    if(inputNumValue > 100 || inputNumValue < 1){
        result.textContent = "1부터 100사이의 숫자만 입력해주세요."
        return;
    }

    if(inputNumList.includes(inputNumValue)){
        result.textContent = "이미 입력한 숫자입니다."
        return;
    }

    chance--;

    chanceArea.textContent =`남은 기회 : ${chance}`;

    if(inputNumValue < randomNumber){
        result.textContent = "UP!!";
        
    } else if(inputNumValue > randomNumber){
        result.textContent = "DOWN!!";
    } else {
        result.textContent = "정답입니다!!!";  
        gameEnd=true;
    }

    inputNumList.push(inputNumValue);
    
    if(chance==0){
        gameEnd = true;
    }

    if(gameEnd==true){
        checkBtn.disabled= true;
        checkBtn.style.backgroundColor="rgba(75, 87, 255, 0.4)";
        checkBtn.style.cursor = "default";
    }
}
// 리셋버튼 함수
function reset(){
    gameEnd = false;
    chance = 5;
    startBtn.disabled =false;
    chanceArea.textContent =`남은 기회 : ${chance}`;
    inputNumList = [];
};