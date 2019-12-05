
$('#burger').click(function () {
    $('.menu-modal').addClass('active');
    $('#app').addClass('active');
    $('body').addClass('active');
});

$('#main-menu-close').click(function () {
    $('.menu-modal').removeClass('active');
    $('#app').removeClass('active');
    $('body').removeClass('active');
});



var controller = new ScrollMagic.Controller();

var tween3;
tween3 = TweenMax.to(".img-setting-wineship", 0.5, {top: '-300px'});
var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "100%", offset: 320})
    .setTween(tween3)
    //.addIndicators()
    .addTo(controller);

var tween1;
tween1 = TweenMax.to(".laptop-section-fourth", 0.5, {top: '-100px', transform: 'rotate(5deg)'});
var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "100%", offset: 0})
    .setTween(tween1)
    //.addIndicators()
    .addTo(controller);


var tween2;
tween2 = TweenMax.to(".tablet-section-fourth", 0.5, {top: '-100px', transform: 'rotate(-5deg)'});
var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "100%", offset: 0})
    .setTween(tween2)
    //.addIndicators()
    .addTo(controller);


$(function() {
    $(".write-ToUs__form-control-comment").mousemove(function(e) {
        var myPos = $(this).offset();
        myPos.bottom = $(this).offset().top + $(this).outerHeight();
        myPos.right = $(this).offset().left + $(this).outerWidth();

        if (myPos.bottom > e.pageY && e.pageY > myPos.bottom - 16 && myPos.right > e.pageX && e.pageX > myPos.right - 16) {
            $(this).css({ cursor: "nw-resize" });
        }
        else {
            $(this).css({ cursor: "" });
        }
    })
        .keyup(function(e) {
            if (e.which === 8 || e.which === 46) {
                $(this).height(parseFloat($(this).css("min-height")) !== 0 ? parseFloat($(this).css("min-height")) : parseFloat($(this).css("font-size")));
            }
            while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
                $(this).height($(this).height()+1);
            }
        });
});

$('.section-third').on(event, 'class', function () {
    if ($(this).hasClass('animated')) {
    }
} );


