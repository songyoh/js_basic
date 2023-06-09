/*
async function loadMovieList(){
    const response = await fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230123"); //GET방식

    const jsonData = await response.json();
    console.log(jsonData);
}
*/
function loadMovieList(){
    fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230123")
    .then((response) => response.json()) // (response)는 이전 fetch(주소)의 리턴자료
    .then((result) => console.log(result)); // (result)는 response.json()으로 얻어진 json자료
}