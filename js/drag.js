import AttachDragTo from './attachDragApp.js';
jQuery(document).ready(function($) {

    /*** IMPLEMENTATION ***/
    //1. Get your element.
    //var map = document.getElementsByClassName('imp-image-backgrounds-container');

    //2. Attach the drag.
    console.info(jQuery('.wp-block-image-map-pro-image-map-pro'));
    let leatlasDragApp = new AttachDragTo(jQuery('.wp-block-image-map-pro-image-map-pro'));



});