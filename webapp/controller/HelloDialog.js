sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function(ManagedObject, Fragment) {
    "use strict";
    return ManagedObject.extend("ui5development.controller.HelloDialog", {
        constructor: function(oView) {
            this._oView = oView
        },

        exit: delete this._oView,

        open: function() {
            let oView = this._oView;

            if(!this.helloDialog) {
                let oFragmentController = {
                    onPressDialogButtonOk: function() {
                        let helloDialog = oView.byId("helloDialog");
                        if( helloDialog && helloDialog.isOpen()) {
                            helloDialog.close();
                        }
                    }
                }; 

                this.helloDialog = Fragment.load(
                    {
                        id: oView.getId(),
                        name: "ui5development.view.HelloDialog",
                        controller: oFragmentController
                    }
                ).then(function(oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                    }
                );
            }
            this.helloDialog.then(oDialog => oDialog.open());
        }
    })
});