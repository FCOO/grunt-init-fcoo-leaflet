/****************************************************************************
	{%= name %}.js, {%= description %}

	(c) {%= year %}, FCOO

	https://github.com/FCOO/{%= name %}
	https://github.com/FCOO

****************************************************************************/
;(function (L, window, document, undefined) {
	"use strict";

	//Extend base leaflet class
	L.{%= class_name %} = L.Class.extend({
		includes: L.Mixin.Events,

	//or extend eq. L.Control
	//L.Control.{%= class_name %} = L.Control.extend({
		
    //Default options	
		options: {
			VERSION: "{VERSION}"
		
		},

		//initialize
		initialize: function(options) {
			L.setOptions(this, options);

		},

		//addTo
		addTo: function (map) {
			L.Control.prototype.addTo.call(this, map); //Extend eq. L.Control

			return this;
		},


		//onAdd
		onAdd: function (map) {
			this._map = map;
			
			//Create the object/control
			
		},

		//myMethod
		myMethod: function () {

		}
	});

}(L, this, document));



