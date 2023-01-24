import leatlasApp from './leatlasApp.js';
import AttachDragTo from './attachDragApp.js';


window.addEventListener("load", (event) => {
    const myTimeOut = setTimeout(showElement, 1000);

    function showElement() {
        let backgroundContainer = document.getElementsByClassName('imp-image-backgrounds-container');
        let leatlasDragApp = new AttachDragTo(backgroundContainer);
    }

    let LeatlasApp = new leatlasApp(jQuery('[data-container="map-controls"]'));

});


/* })(jQuery, window, document); */