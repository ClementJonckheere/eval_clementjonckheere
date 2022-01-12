$(".redsquare-app").click(function(){
    $('.redsquare-app.active').removeClass('active');
    $(this).addClass('active');
}
);
$(".redsquare-controls").attr(disabled,disabled);
$(".redsquare-controls").removeAttr(disabled);
$(".btn-light").insertAfter(".btn-primary");
$(".square").keydown(function(e){
    switch (e.which){
    case 37:    // flèche gauche
        $(".square").finish().animate({
            left: "-=10"
        });
        break;
    case 38:    // flèche haut
        $(".square").finish().animate({
            top: "-=10"
        });
        break;
    case 39:    // flèche droite
        $(".square").finish().animate({
            left: "+=10"
        });
        break;
    case 40:    // flèche du bas
        $(".square").finish().animate({
            top: "+=10"
        });
        break;
    }
});
$(".square btn").ready(function() {
    $('#scaleDown').click(function() {
        $('#scaleDown').css('width', '-=20px');
    });
    $('#scaleUp').click(function() {
        $('#scaleUp').css('width', '+=20px');
    });
});
$(".square shapeCircle").click(function(){
    
})
$(".square shapeSquare").click(function(){
    
})


function jumbotron(){
$('.jumbotron a').remove()
$('.jumbotron ul').addClass('list-group')
$('.jumbotron li').addClass('list-group-item')
$('.jumbotron').before($("li")).addClass('<i class="fa fa-plus-circle"></i>')
$(document).ready(function(){
    $(".jambotron")(function(){
        $("i").children(0).each(function() {           
            $(this).html($(this).html().replace("inconnue","connue"));
        });
    })
})
$('.team').prev(1).children(1).addClass("list-group-item-success");
}