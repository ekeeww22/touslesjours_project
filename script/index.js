/* 추천제품 */
const recommendProduct = new Swiper('#recommend_product',{
    autoplay:{delay:3000},
    speed:800,
    loop:true, 
    slidesPerView:5,
    direction:'horizontal',
})
/* 이벤트 배너 */
const eventSlide = new Swiper('#event_slide',{
    autoplay:{delay:3000},
    speed:800,
    loop:true, 
    spaceBetween:20,
    slidesPerView:3,
    direction:'horizontal',
})