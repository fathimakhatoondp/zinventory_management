/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/sap/zinventorymanagement/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
