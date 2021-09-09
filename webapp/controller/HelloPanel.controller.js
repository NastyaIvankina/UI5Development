sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment) {
    "use strict"
    return Controller.extend("ui5development.controller.HelloPanel",
    { 
        onSayHelloPress: function() {
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let receipentName = this.getView().getModel().getProperty("/receipent/name");
            let message = oBundle.getText("helloMsg", [receipentName]);
            MessageToast.show(message);
        },

        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog()
        }
    }
    )
});