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
/* header */
const hTop = document.querySelector('.h_top')
const nav = document.querySelector('nav > ul')
const gnb = document.querySelectorAll('.gnb > li')
const gnbA = document.querySelectorAll('.gnb > li > a')
const sub = document.querySelectorAll('nav > ul > li > .sub')
const subA = document.querySelectorAll('nav > ul > li > .sub > li > a')
const navBg = document.querySelector('nav .nav_bg')
console.log(hTop, nav, gnb, sub, subA, navBg)

/* 스크롤 시 header 변경 */
nav.style.display = 'none'
window.addEventListener('scroll',function(){
    if(window.scrollY > 100){
        hTop.style.background = '#0D4633'
        nav.style.display = 'flex'
    }else{
        hTop.style.background = 'none'
        nav.style.display = 'none'
    }
})
/* nav 마우스 올리면 sub 보이기 */
sub_func('none')
function sub_func(status){
    navBg.style.display = status
    for(let i of sub){i.style.display = status}
}
for(let i of gnb){
    i.addEventListener('mouseover',function(){
        sub_func('block')
    })
    i.addEventListener('mouseout',function(){
        sub_func('none')
    })
}
for(let i of subA){
    i.addEventListener('mouseover',function(){
        i.style.color = '#9f653b'
        i.style.fontWeight = '700'
    })
    i.addEventListener('mouseout',function(){
        i.style.color = '#fff'
        i.style.fontWeight = '400'
    })
}
/* 검색 버튼 클릭 시 input 보이기 */
/* const searchTxt = document.querySelector('#searchTxt')
const searchBtn = document.querySelector('#searchBtn')
console.log(searchTxt, searchBtn)
searchTxt.classList.toggle('showHide')
searchBtn.addEventListener('click',function(){
    searchTxt.classList.toggle('showHide')
}) */

/* open menu */
const openNavBtn = document.querySelector('.right > .m_nav')
const openMenu = document.querySelector('.m_open_menu')
const openMenuGnb = document.querySelectorAll('.m_open_menu > .gnb > li')
const openMenuSub = document.querySelectorAll('.m_open_menu > .gnb > li > .sub ')
const closeBtn = document.querySelector('.close_btn')
console.log(openNavBtn, openMenu, openMenuGnb, openMenuSub)

openMenu.classList.toggle('showHide')
openNavBtn.addEventListener('click',function(e){
    e.preventDefault()
    openMenu.classList.toggle('showHide')
})
closeBtn.addEventListener('click',function(e){
    openMenu.classList.toggle('showHide')
    e.preventDefault()
})
/* quick menu - top btn */
const topBtn = document.querySelector('.quick_menu .top_btn')
console.log(topBtn)
topBtn.addEventListener('click',function(){
    window.scrollTo({left:0, top:0})
})

/* open menu에서 메인메뉴 클릭 시 서브메뉴가 나온다 */


for(let i of openMenuSub){
            i.style.display = 'none'
        }
openMenuGnb.forEach(function(t, i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of openMenuSub){
            i.style.display = 'none'
        }
        openMenuSub[i].style.display = 'block'
    })
})
