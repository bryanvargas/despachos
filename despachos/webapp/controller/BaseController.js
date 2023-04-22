sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (jQuery, Controller, History, UIComponent, JSONModel, MessageToast) {
	"use strict";


	return Controller.extend("rizobacter.despachos.controller.BaseController", {

		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},

		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		onNavBack: function () {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Principal");
			}
		},

		createEntry: function (entidad, datos) {
			var oModel = this.getOwnerComponent().getModel();
			return new Promise(function (resolve, reject) {
				oModel.create(entidad, datos, {
					success: function (res) {
						resolve(new JSONModel(res));
					},
					error: function (err) {
						reject(err);
					}
				});
			});
		},

		getSingleData: function (entidad, filtros, cadena) {
			var oModel = this.getOwnerComponent().getModel();
			return new Promise(function (resolve, reject) {
				oModel.read(entidad, {
					filters: filtros,
					urlParameters: cadena,
					success: function (response) {
						resolve(response);
					},
					error: function (error) {
						reject(error);
					}
				});
			});
		}

	});
});