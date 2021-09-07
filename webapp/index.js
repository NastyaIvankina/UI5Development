sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    'use strict';
    new ComponentContainer({
		name: "ui5development",
		settings : {
			id : "ui5dev"
		},
		async: true
	}).placeAt("content")
});