// flesch91 method below https://github.com/kenwheeler/slick/issues/369#issuecomment-57332974

var $carousel_fashion = $(".fashion__wrapper");
var $media_fashion = 600;
var $carousel_featured = $(".products");
var $media_featured = 600;
function showSliderScreen($widthScreen, $block_id, $media_query) {
  console.log($widthScreen);

  if ($widthScreen <= $media_query) {
    if (!$block_id.hasClass("slick-initialized")) {
      console.log("here");
      $block_id.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 200,
        dots: true,
        arrows: false,
        focusOnSelect: true,
      });
    }
  } else {
    if ($block_id.hasClass("slick-initialized")) {
      $block_id.slick("unslick");
    }
  }
}

var widthScreen = $(window).width();
$(window).on("ready load resize", function () {
  widthScreen = $(window).width();
  showSliderScreen(widthScreen, $carousel_fashion, $media_fashion);
  showSliderScreen(widthScreen, $carousel_featured, $media_featured);
});
