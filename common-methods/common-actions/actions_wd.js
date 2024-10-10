'use strict';

class Actions {
    async click_element(element){
        await element.click();
    }

    async type_value(element, data){
        await element.setValue(data);
    }
}

module.exports = new Actions();