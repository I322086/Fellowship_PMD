sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("pmd1.controller.View1", {
		onInit: function() {
		 var container = this.getView().byId("container");	
         //var uri = "https://vtprojectsw0756d159.int.sap.hana.ondemand.com/ScholarDetails/aaa/services/ContFetchdata.xsjs";
        // var jsonMOdel = new sap.ui.model.json.JSONModel(uri);
        // container.setModel(jsonMOdel,"tiledata");
}
	});
});