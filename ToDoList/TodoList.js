let inputBox = document.getElementById('input');
let addBtn = document.getElementById('add');
let PlusTodo = document.getElementById('Plus-todo');    // 추가될 ToDoList (div 형태)

addBtn.addEventListener('click',function(){

    const list = document.createElement('div');         // 영역 만들기

    const checkbox = document.createElement('input');   // 체크 박스
    checkbox.type = 'checkbox';

    const text = document.createElement('span');        // 텍스트

    const delBtn = document.createElement('button');    // 삭제 버튼
    delBtn.textContent = "X";
    
    if (!inputBox.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
        alert('내용을 입력해 주세요!');
    else
    {
        text.textContent = inputBox.value;  // 입력 값 텍스트로 받기
        
        list.appendChild(checkbox);         // 체크박스, 텍스트, 삭제버튼 자식으로 넣기 
        list.appendChild(text);      
        list.appendChild(delBtn);  

        PlusTodo.appendChild(list);         // 큰 틀에 넣어주기

        inputBox.value= "";               // 할 일 입력창 초기화
    }

    checkbox.addEventListener('change', (event) =>{  // 체크박스 change를 줘서 이벤트 발생
        if (event.currentTarget.checked)
        {
            text.style.textDecoration='line-through'
        }
        else {
            text.style.textDecoration='none'
        }
    })

    delBtn.addEventListener('click', (event) => {   // 삭제버튼 click을 줘서 이벤트 발생
        PlusTodo.removeChild(event.currentTarget.parentNode)    // 현재 부모 노드 삭제
    })
})