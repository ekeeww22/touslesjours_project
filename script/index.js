/* 공지사항 */
const notice = new Swiper('#notice',{
    autoplay:{delay:3000},
    speed:800,
    loop:true, 
    direction:'vertical',
    navigation: {
    // 슬라이드 버튼 작동하게 하는 속성:값
    // ( 개별인식가능한 부모명 꼭 작성하기! ) ★★
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',} 
})
/* 추천제품 */
const recommendProduct = new Swiper('#recommend_product',{
    autoplay:{delay:3000},
    speed:800,
    loop:true, 
    direction:'horizontal',
    slidesPerView:'auto',
    breakpoints:{
        620:{slidesPerView:2},
        800:{slidesPerView:3},
        1000:{slidesPerView:4},
        1330:{slidesPerView:5},
    }
})
/* 이벤트 배너 */
const eventSlide = new Swiper('#event_slide',{
    autoplay:{delay:3000},
    speed:800,
    loop:true, 
    spaceBetween:20,
    direction:'horizontal',
    slidesPerView:'auto',
    breakpoints:{
        620:{slidesPerView:1},
        900:{slidesPerView:2},
        1330:{slidesPerView:3},}
})