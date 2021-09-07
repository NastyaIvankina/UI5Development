sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("", {
        metadata : {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
               "viewName": "ui5development.App",
               "type": "XML",
               /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
               "id": "app"
            }
        },

        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
            let resourceModel = new ResourceModel({
                bundleName: "ui5development/i18n/i18n"
            });

            this.getView().setModel(resourceModel, "i18n");

            let oData = {
                receipent: {
                    name: "World"
                }
            };

            let jsonModel = new JSONModel(oData);
            this.getView().setModel(jsonModel);
        }
    })
});