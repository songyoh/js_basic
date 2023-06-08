// fetch()를 이용해 rest서버에 요청을 넣거나 결과를 받아올 수 있다.
async function loadPersonList(){
    // fetch의 첫 번째 파라미터는 요청 주소
    // 요청을 넣은 이후 동작은 then() 안에 함수를 작성해 처리한다ㅐ
    const response = await fetch("http://localhost:8080/resttest/person-list"); // GET방식
    //  요청의 결과로 받은 response객체의 body에 담긴 json만 추출해줍니다.
    const jsonData = await response.json();
    console.log(jsonData);
}