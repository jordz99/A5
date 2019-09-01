$(".menu").click(function() {
  $(".menu").toggleClass("active");
  $(".navbar-menu").toggleClass("active");
});

$(document).ready(function() {

    // gallery data potentially arriving from an AJAX call...
    var imageLibraryData = [
        "gallery/one.jpg",
        "gallery/two.jpg",
        "gallery/three.jpg",
        "gallery/four.jpg",
        "gallery/five.jpg",
        "gallery/six.jpg",
        "gallery/seven.jpg",
        "gallery/eight.jpg",
        "gallery/nine.jpg",
        "gallery/ten.jpg",
        "gallery/eleven.jpg",
        "gallery/twelve.jpg"
        ];

    var currentImageIndex = 0;
    var imageWidth = 306;
    var imageLibraryCount = imageLibraryData.length;
    var imageStripWidth = imageWidth * imageLibraryCount;

    // setup width of gallery image strip
    //
    $('#gallery_image')
        .css('width', imageStripWidth)
        .css('min-width', imageStripWidth);

    // load images and tile them.
    //
    for (var i = 0; i < imageLibraryCount; i++) {
        $('#gallery_image').append('<img class="tiled_image" src="' + imageLibraryData[i] + '" />');
    }

    // setup jQuery events for button clicks
    //
    $('#next').click(function() {
        currentImageIndex++;
        if (currentImageIndex > imageLibraryCount - 1) {
            currentImageIndex = imageLibraryCount - 1;
        } else {
            $("#gallery_image").animate({"left": "-=" + imageWidth}, "slow");
        }
    });
    $('#previous').click(function() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = 0;
        } else {
            $("#gallery_image").animate({"left": "+=" + imageWidth}, "slow");
        }
    });

});


$("#previous").on("mouseenter", function(){
  $(this).css({
  "background-color": "#ff6600",
  "transition": "0.5s"});
});

$("#previous").on("mouseenter", function(){
  $("#next").css({
  "border": "solid 1px rgba(255, 102, 0, 0)"});
});

$("#previous").on("mouseleave", function(){
  $(this).css({
  "background-color": "black",
  "border": "solid 1px #ff6600"});
});

$("#previous").on("mouseleave", function(){
  $("#next").css({
  "background-color": "black",
  "border": "solid 1px #ff6600"});
});





$("#next").on("mouseenter", function(){
  $(this).css({
  "background-color": "#ff6600",
  "transition": "0.5s"});
});

$("#next").on("mouseenter", function(){
  $("#previous").css({
  "border": "solid 1px rgba(255, 102, 0, 0)"});
});

$("#next").on("mouseleave", function(){
  $(this).css({
  "background-color": "black",
  "border": "solid 1px #ff6600"});
});

$("#next").on("mouseleave", function(){
  $("#previous").css({
  "background-color": "black",
  "border": "solid 1px #ff6600"});
});
