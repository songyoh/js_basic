// fetch()를 이용해 rest서버에 요청을 넣거나 결과를 받아올 수 있다.
async function loadPersonList(){
    // fetch의 첫 번째 파라미터는 요청 주소
    // 요청을 넣은 이후 동작은 then() 안에 함수를 작성해 처리한다ㅐ
    const response = await fetch("http://localhost:8080/resttest/person-list"); // GET방식
    //  요청의 결과로 받은 response객체의 body에 담긴 json만 추출해줍니다.
    const jsonArray = await response.json();
    console.log(jsonArray); 
    console.log("-------------");
    for(jsonData of jsonArray){//향상된 for문 형식으로 개별 json 분리
        console.log(jsonData.id); // json 내부 자료에 대해 멤버변수처럼 호출
        console.log(jsonData.name);
        console.log(jsonData.age);
    }

    // #personInfo 태그 얻어오기
    const $personInfo = document.getElementById("personInfo");
    // 문자열 변수 생성 후, 각 정보를
    // 번호 : xxx, 이름 : xxx, 나이 : xxx 형식으로 문자로 저장
    // 반복문 활용
    let str = "";
    for(jsonData of jsonArray){//향상된 for문 형식으로 개별 json 분리
        str += `<h1>번호 : ${jsonData.id} , 이름 : ${jsonData.name}, 나이 : ${jsonData.age}</h1>`;
    }
    console.log(str);
    // #personInfo에 innerHTML을 이용해 끼워넣기
    $personInfo.innerHTML = str; 
}
// getPersonList 버튼을 얻어와서 변수에 저장
let $button = document.getElementById("getPersonList");

// 버튼에 loadPersonList를 클릭시 
                    // loadPersonList()로 대입시, 실행 '결과자료'를 해당 위치에 대입
$button.addEventListener("click", loadPersonList);