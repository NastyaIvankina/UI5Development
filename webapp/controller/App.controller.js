sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';
    return Controller.extend("ui5development.controller.App",
        { 
            onSayHelloPress: function() {
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                let receipentName = this.getView().getModel().getProperty("/receipent/name");
                let message = oBundle.getText("helloMsg", [receipentName]);
                MessageToast.show(message);
            } 
        }
    )
});