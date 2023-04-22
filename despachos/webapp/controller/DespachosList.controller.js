sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/DespachosFormatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(
	Controller,
	JSONModel,
	InvoicesFormatter,
	Filter,
	FilterOperator
) {
	"use strict";
	return Controller.extend("rizobacter.despachos.controller.DespachosList", {
        formatter: InvoicesFormatter,
        onInit: function() {
            var oViewModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            });

            this.getView().setModel(oViewModel, "currency");
        },

        onFilterInvoices: function(oEvent) {
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");

            if (sQuery) {
                aFilter.push( new Filter("ProductName", FilterOperator.EQ, sQuery ) );
            };
            debugger;
            const oList = this.getView().byId("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        }
	});
});