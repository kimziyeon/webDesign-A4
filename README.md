## 웹디자인기능사 실기문제 A-4

$(function () {

$('.sub').mouseleave(function () {
  $(this).parents('li').children('a').removeClass('on')
})

<p>
  * closest 시작한요소로부터 가장 가까운 부모
  * parents 선택자(this)의 부모
  * children 그 선택자 부모의 자식
</p>




.gall ul li a img:hover {
    opacity: 0.5;
}


$('.gall ul li>a>img').mouseenter(function () {
        $(this).css('opacity', '0.5');
    })

  
})
