"use strict"
sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({viewName: "ui5development.App"}).then(function (oView) {
		oView.placeAt("content");
	});
});