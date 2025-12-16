sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.zinventorymanagement.controller.Product", {
        onInit() {
            this.oModel = new sap.ui.model.odata.ODataModel("/V2/(S(ywzlxk0to3s33pvsmznmv4og))/OData/OData.svc/");
            this.getView().setModel(this.oModel);
            this.mode = null || "";
        },
        // It opens a fragment that displays complete details after you select a row in simpleform
        onPressRow: function (oEvent) {
            //grab selected row
            this.oSelectedRowPath = oEvent.getSource().getBindingContext().getPath();

            //calls opens Product Details Fragment
            this.openDetailsFragment();
        },
        //opens Product Details Fragment
        openDetailsFragment: function () {
            debugger;
            if (!this.oDetailsFragment) {
                this.oDetailsFragment = new sap.ui.xmlfragment("com.sap.zinventorymanagement.view.fragments.detailsFragment", this);
                this.getView().addDependent(this.oDetailsFragment);
            }
            //binds selected product path to the form in the fragment ----- for ex. Products(5)
            this.oDetailsFragment.bindElement(this.oSelectedRowPath);

            this.oDetailsFragment.open();
        },
        //opens Add Edit Fragment
        openAddEditFragment: function(){
            debugger;
            if(!this.oAddEditFragment){
                this.oAddEditFragment = new sap.ui.xmlfragment("com.sap.zinventorymanagement.view.fragments.addEditFragment", this);
                this.getView().addDependent(this.oAddEditFragment);
            }
            
            this.oAddEditFragment.open();
        },

        //When Add + is clicked
        onPressAdd: function(){
            this.mode = "add";

            this.openAddEditFragment();
        },
        onPressEdit : function(){
            this.mode = "edit";

            this.openAddEditFragment();
        },
        // closes and destroys Product Details Fragment
        onPressCloseInDetailsFragment: function () {
            this.oDetailsFragment.close();
            this.oDetailsFragment.destroy();
            this.oDetailsFragment = null;
        },
                
        //closesand destroys Add-Edit Product Fragment
        onPressCloseInAddEditFragment: function () {
            this.oAddEditFragment.close();
            this.oAddEditFragment.destroy();
            this.oAddEditFragment = null;
        }
    });
});