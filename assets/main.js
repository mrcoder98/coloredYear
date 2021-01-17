var width = window.innerWidth;
var height = window.innerHeight;
var divNum = Math.round(height/40)-3;
for(var b =0;b < divNum; b++){
    $('section.bg').append('<div></div>');
}
var spanNumbers = Math.round((width/40)-4);
for(var i =0;i < spanNumbers; i++){
    $('section.bg > div').append('<span></span>');
}
$(window).resize(function(){
$('section.bg > div').html('');
var width = window.innerWidth;
var spanNumbers = Math.round((width/40)-5);
for(var i =0;i < spanNumbers; i++){
    $('section.bg > div').append('<span></span>');
}
})