sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend("ui5development.controller.App", {
        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog()
        }
    })
});