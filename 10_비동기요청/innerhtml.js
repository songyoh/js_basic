//태그의 innerHTMl은 문자를 대입받으면 전부 태그로 바꿔서 적용한다는 특징을 갖는다
//특정 태그 내부 요소를 추가하거나 교체하는 방법은
//태그변수.innerHTML = "추가할 내용" 을 수행하면 된다.
let str = ""; // 전역변수로 빈 문자 선언

const addTag = () => {
    str += "<h1>새로운 내용</h1>"; // h1태그 관련 텍스트 생성
    const $container = document.getElementById("container");
    //console.log($container.innerHTML);
    $container.innerHTML = str; // div#container 사이에 끼워넣기
}

const $oneTimeBtn = document.getElementById("oneTimeBtn");
$oneTimeBtn.addEventListener("click", addTag);