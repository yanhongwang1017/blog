$(document).ready(function () {
    $(".asides>li").eq(0).click(function () {
        $(document.documentElement).animate({scrollTop:0});
    })
})