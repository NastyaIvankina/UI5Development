sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) {
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
            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        exit: function() { 
            if (this._helloDialog) {
                this._helloDialog.destroy();
                delete this._helloDialog;
            }
        },

        openHelloDialog: function() {
            this._helloDialog.open()
        }
    })
});