// 오늘 날짜 확인 -1 : 어제 날짜를 화면에 보여주기

// 년,월,일 요소 찾아오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");


function init() {
    // 오늘 날짜
    const today = new Date();
    // 년
    let year = today.getFullYear();
    // 월 (0부터)
    let month = today.getMonth() + 1;
    // 일-1
    let day = today.getDate() -1;
    // 보여주는것
    txtYear.value = year;

    if(month<10){
        month="0"+month;
    }

    if(day<10){
        day ="0"+day;
    }

    selMon.value = month; // 4 ==>04
    selDay.value = day;
};

init();