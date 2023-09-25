// HTML 요소를 추가
//document.write('<p>반가웠어요!</p>');

// 변수 선언 + 초기화
//var num =10;

// 자바스크립트에서 변수(num)의 값을 콘솔(console)에 출력하는 함수
//console.log(num);

// 문서 내에 특정 아이디 또는 클래스 이름을 가진 요소를 찾아서 해당 요소의 정보를 반환
// ID를 통해서 값을 가져오겠다 By 뒤에 ID
// Class ~~
// ClassName

var el = document.getElementById("logo");

var myfunc = function(){
    alert('addEventListener');
};

//('이벤트 타입', 이 함수를 실행);
el.addEventListener('click', myfunc);

console.log(el);