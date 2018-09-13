$(".z4").hover(
    function () {
        $(this).css({
            "background": "url('img/auto3.png') center no-repeat",
            "background-size": "contain"
        });
    }, function () {
        $(this).css({
            "background": "url('img/auto1.png') center no-repeat",
            "background-size": "contain"
        });
    }
);