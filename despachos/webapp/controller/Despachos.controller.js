sap.ui.define([
	"./BaseController",
	"../model/models",
	"../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, models, formatter) {
        "use strict";

	return BaseController.extend("rizobacter.despachos.controller.Despachos", {
		formatter: formatter,
		onInit: function () {

		}
	});
});