/**
 * Created by zoodoo92 on 18/06/16.
 */
// alert('hi');

//loading map using mapstraction..
// var map = new mxn.Mapstraction('#map', 'openlayers');
// var latlon = new mxn.LatLonPoint(51.50733, -0.12769);
//
// map.setCenterAndZoom(latlon, 10);

$(document).ready(function () {
    $('.header .left-menu-handle').click(function () {
        $('.body').toggleClass('toggle');
    });

    $('.header .right-menu-handle').click(function () {
        // $('.toggle-left').toggleClass('r-toggle');
        $('.toggle-left').toggleClass('r-toggle');
    });
});