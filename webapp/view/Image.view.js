sap.ui.jsview("pmd1.view.Image", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf QuickStartApplication.view.Image
	 */
	getControllerName: function() {
		return "pmd1.controller.Image";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf QuickStartApplication.view.Image
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "Title",
			content: []
		}).addStyleClass("body");

	
	}

});