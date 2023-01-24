class leatlasApp {
    constructor($wrapper) {
        this.$wrapper = $wrapper;
        this.langValueArray = document.documentElement.lang.split('-');
        this.lang = this.langValueArray[0];
        this.container = document.getElementsByClassName("imp-image-backgrounds-container");
        this.images = jQuery(this.container).find('img');
        this.checkBoxes = this.$wrapper.find('input[type="checkbox"]');
        this.url = `${window.location.protocol}//${window.location.hostname}/wp-content/uploads/2022/12/`;
        this.$wrapper.on(
            'change',
            Array.from(this.container)[0],
            this.showMap.bind(this));
    }
    showMap(event) {

        let checkedArray = this._returnChecked();
        let valuesArray = checkedArray.map((checkedElement) => {
            return checkedElement.value;
        });
        valuesArray.sort();
        jQuery(".imp-main-image").hide();
        let backgroundString = `url(${this.url}mapa_base.png)`;
        let lang = "";
        backgroundString = valuesArray.reduce((backgroundString, value) => {
            lang = (value.toLowerCase() === 'fuentes') ? `_${this.lang}` : '';
            console.info(lang);
            backgroundString = backgroundString + `, url(${this.url}${value.toLowerCase()}${lang}.png)`;
            return backgroundString;
        }, backgroundString);

        Array.from(this.container)[0].style.backgroundImage = backgroundString;
        Array.from(this.container)[0].style.backgroundSize = "cover";
        Array.from(this.container)[0].style.backgroundRepeat = "no-repeat";
        Array.from(this.images).forEach((image) => {
            image.src = "";
        });
    }

    _returnChecked() {
        const checkboxArray = Array.from(this.checkBoxes);
        let checkedArray = checkboxArray.filter((checkbox) => {
            return checkbox.checked == true;
        });
        return checkedArray;
    }

};

export default leatlasApp;