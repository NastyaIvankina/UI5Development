sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
    'use strict';
    return UIComponent.extend("ui5development.Component", {
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
      },

        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            let oData = {
                receipent: {
                    name: "World"
                }
            };

            let jsonModel = new JSONModel(oData);
            this.setModel(jsonModel);
        }
    })
});