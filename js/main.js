"use strict";

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40, lng: 73 },
    zoom: 8,
  });
}

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    speed: 4000,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
  });
});
