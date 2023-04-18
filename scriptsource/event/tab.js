// Orange 클래스명 
// tab-버튼0 누르면 
// 모든 버튼에 붙은 orange 클래스명 제거 
// tab-버튼0 orange 클래스명 부착

// classList.add  / classList.remove 

// tab-button 찾기
const tabBtn0 = document.querySelector(".list>li:first-child");
const tabBtn1 = document.querySelector(".list>li:nth-child(2)");
const tabBtn2 = document.querySelector(".list>li:last-child");

// 버튼 클릭에 맞춰 tab-content 보여주기
const content0 = document.querySelector(".container>div:nth-child(2)");
const content1 = document.querySelector(".container>div:nth-child(3)");
const content2 = document.querySelector(".container>div:nth-child(4)");


tabBtn0.addEventListener("click", ()=>{
    tabBtn0.classList.add("orange");
    tabBtn1.classList.remove("orange");
    tabBtn2.classList.remove("orange");

    content0.classList.add("show");
    content1.classList.remove("show");
    content2.classList.remove("show");
});
tabBtn1.addEventListener("click", ()=>{
    tabBtn1.classList.add("orange");
    tabBtn0.classList.remove("orange");
    tabBtn2.classList.remove("orange");

    content1.classList.add("show");
    content0.classList.remove("show");
    content2.classList.remove("show");
});
tabBtn2.addEventListener("click", ()=>{
    tabBtn2.classList.add("orange");
    tabBtn1.classList.remove("orange");
    tabBtn0.classList.remove("orange");

    content2.classList.add("show");
    content1.classList.remove("show");
    content0.classList.remove("show");
});