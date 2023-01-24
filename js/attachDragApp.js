class AttachDragTo {
    constructor(container) {
        this.container = container;
        this.shapes = document.getElementsByClassName('imp-shape');
        this.wrap = document.getElementsByClassName('imp-wrap');
        this.translateWrap = document.getElementsByClassName('imp-translate-wrap');

        this.container[0].style.background = "none";
        this.shapesContainer = document.getElementsByClassName('imp-shape-container')[0];
        this.tooltipsContainer = document.getElementsByClassName('imp-tooltips-container')[0];
        console.info(this.tooltipsContainer);
        this.url = `${window.location.protocol}//${window.location.hostname}/wp-content/uploads/2022/12/`;

        this.container[0].style.backgroundImage = `url(${this.url}mapa_base.png)`;
        this.container[0].style.backgroundSize = "cover";
        this.container[0].style.backgroundRepeat = "no-repeat";

        document.getElementsByClassName('imp-main-image')[0].style.display = "none";
        this.mouse_is_down = false;
        var styles = window.getComputedStyle(this.container[0]);
        var shapesContainerPositionXstart = [];
        var shapesContainerPositionYstart = [];
        this.shapesContainerPositionXstart = shapesContainerPositionXstart;
        this.shapesContainerPositionYstart = shapesContainerPositionYstart;
        console.info(this.shapesContainerPositionXstart);
        let shapesContainerStyles = "";
        shapesContainerStyles = getComputedStyle(this.shapesContainer);
        console.info(shapesContainerStyles);
        this.shapesContainerPositionXstart = parseInt(shapesContainerStyles.getPropertyValue('left'), 10);
        this.shapesContainerPositionYstart = parseInt(shapesContainerStyles.getPropertyValue('top'), 10);

        this.backgroundPositionXstart = parseInt(styles.getPropertyValue('background-position-x'), 10);
        this.backgroundPositionYstart = parseInt(styles.getPropertyValue('background-position-y'), 10);

        //attach events
        this.wrap[0].addEventListener('mousedown', this.onMousedown.bind(this), false);
        this.wrap[0].addEventListener('mouseup', this.onMouseup.bind(this), false);
        this.wrap[0].addEventListener('mousemove', this.onMousemove.bind(this), false);
    };
    onMousemove(e) {

        if (!this.mouse_is_down) return;
        var target = e.target,
            mouseViewPortX = e.clientX,
            mouseViewPortY = e.clientY,
            shapesContainerWidth = document.getElementsByClassName('imp-shape-container')[0].offsetWidth,
            shapesContainerHeight = document.getElementsByClassName('imp-shape-container')[0].offsetHeight,
            displacementX = eval(mouseViewPortX - this.viewPortXOnMouseDown),
            displacementY = eval(mouseViewPortY - this.viewPortYOnMouseDown);
        console.info(mouseViewPortX, mouseViewPortY, displacementX, displacementY, shapesContainerHeight, shapesContainerWidth);
        this.container[0].style.backgroundPositionX = eval(displacementX + this.backgroundPositionXstart) + 'px';
        this.container[0].style.backgroundPositionY = eval(displacementY + this.backgroundPositionYstart) + 'px';

        this.shapesContainer.style.left = eval(((displacementX + this.shapesContainerPositionXstart) / shapesContainerWidth)).toPrecision(12) * 100 + '%';
        this.shapesContainer.style.top = eval(((displacementY + this.shapesContainerPositionYstart) / shapesContainerHeight)).toPrecision(12) * 100 + '%';

        /* this.tooltipsContainer.style.left = eval(((displacementX + this.shapesContainerPositionXstart) / window.innerWidth)).toPrecision(12) * 100 + '%';
        this.tooltipsContainer.style.top = eval(((displacementY + this.shapesContainerPositionYstart) / window.innerHeight)).toPrecision(12) * 100 + '%'; */
        /* this.tooltipsContainer.style.left = eval(((displacementX + this.shapesContainerPositionXstart))) + 'px';
        this.tooltipsContainer.style.top = eval(((displacementY + this.shapesContainerPositionYstart))) + 'px'; */
    }
    onMousedown(e) {
        this.mouse_is_down = true;
        this.viewPortXOnMouseDown = e.clientX;
        this.viewPortYOnMouseDown = e.clientY;
    }
    onMouseup(e) {
        var target = e.target,
            boxStyles = '',
            shapesContainerStyles = '',
            tooltips = document.getElementsByClassName('imp-shape'),
            styles = getComputedStyle(this.container[0]);
        boxStyles = getComputedStyle(document.getElementsByClassName('imp-shape-container')[0]);
        shapesContainerStyles = getComputedStyle(document.getElementsByClassName('imp-tooltips-container')[0]);
        this.shapesContainerPositionXstart = parseInt(boxStyles.getPropertyValue('left'), 10);
        this.shapesContainerPositionYstart = parseInt(boxStyles.getPropertyValue('top'), 10);
        this.mouse_is_down = false;

        this.backgroundPositionXstart = parseInt(styles.getPropertyValue('background-position-x'), 10);
        this.backgroundPositionYstart = parseInt(styles.getPropertyValue('background-position-y'), 10);
    }

}
export default AttachDragTo;