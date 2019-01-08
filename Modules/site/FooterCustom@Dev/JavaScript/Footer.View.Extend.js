/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Footer
define(
	'Footer.View.Extend', ['Footer.View', 'footer.tpl', 'Backbone', 'Backbone.CompositeView', 'jQuery'],
	function (FooterView, footer_tpl, Backbone, BackboneCompositeView, jQuery) {
		'use strict';

		// @class Footer.View @extends Backbone.View
		return _.extend(FooterView.prototype, {

			events: {
				'click .footer .menu li  > a': 'toggleFunction'
			},
			// Onload
			initialize: function () {
				// Inside of Application Skeleton
				var layout = this.options.application.getLayout();

				// afterViewRender, afterAppendToDom, afterAppendView, beforeAppendView
				layout.on('afterAppendToDom', function () {
					//debugger
					$('#spanYear').html(new Date().getFullYear());
				}, this);
			},
			// Mobile style menu
			toggleFunction: function (e) {
				//console.log(e);
				e.preventDefault();
				//debugger
				this.$(e.target).parent().toggleClass("open");
			}

		});
	});