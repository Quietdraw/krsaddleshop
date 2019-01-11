/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Header
define(
	'Header.View.Extend'
,	[
		'Header.View'
	,	'SC.Configuration'
	,	'Profile.Model'
	,	'Header.Logo.View'
	,	'Header.MiniCart.View'
	,	'Header.MiniCartSummary.View'
	,	'Header.Profile.View'
	,	'Header.Menu.View'
	,	'GlobalViews.HostSelector.View'
	,	'GlobalViews.CurrencySelector.View'
	,	'SiteSearch.View'

	,	'header.tpl'

	,	'jQuery'
	,	'Backbone'
	,	'Backbone.CompositeView'
	,	'underscore'
	,	'Utils'
	]
,	function(
		HeaderView
	,	Configuration
	,	ProfileModel
	,	HeaderLogoView
	,	HeaderMiniCartView
	,	HeaderMiniCartSummaryView
	,	HeaderProfileView
	,	HeaderMenuView
	,	GlobalViewsHostSelectorView
	,	GlobalViewsCurrencySelectorView
	,	SiteSearchView

	,	header_tpl

	,	jQuery
	,	Backbone
	,	BackboneCompositeView
	,	_
	)
{
	'use strict';

	// @class Header.View @extends Backbone.View
	return _.extend(HeaderView.prototype,{
		// Bind Backbone.Events = Click
		events: {
			'click .global-header-mobile__toggle-button': 'toggleMobileMenu'
		},
		// Onload
		initialize: function () {
			// Inside of Application SkeletonNetsuite2018

			var layout = this.options.application.getLayout();

			// Backbone.Events = https://developers.suitecommerce.com/til-thursday-netsuite-professional-services-best-practices#title15
			layout.on('afterAppendToDom', function () {
				//debugger
			}, this);

			this.on('afterViewRender', function () {
				// object.listenToOnce(other, event, callback)
				this.listenToOnce(
					typeof CMS !== 'undefined' ? CMS : Backbone.Events, 
					'cms:rendered', 
					this.siteWideAnnouncement
				);
			});

			// This pulls in all the Header Backbone Views
			BackboneCompositeView.add(this);

		},
		siteWideAnnouncement: function () {
			if ($('.global-header-announcement .cms-content').children().length > 0 ) {
				$('.global-header-announcement-wrapper').addClass("cms-content-yes");
				var announcementHeight = $('.global-header-announcement').height();
				var mobileHeaderHeight = $('.global-header-mobile').height();
				$('#main').addClass('global-header-announcement-cms-yes');
				//$('.global-header-usertools-wrapper').css('height', announcementHeight );
				//$('.global-header-announcement-cms-yes #main-container').css('margin-top', announcementHeight + mobileHeaderHeight);
				
				console.log('Announement + Mobile = ' + announcementHeight +  mobileHeaderHeight + 'px');
				//$('.global-header-mobile').css('margin-top', announcementHeight);
		   	}
		},
		toggleMobileMenu: function (e) {
			//console.log(e);
			e.preventDefault();
			//debugger
			this.$('.global-header-mobile__primary-nav').toggleClass("open");
		},
		verifyShowSiteSearch: function ()
		{
			var hash = Backbone.history.getFragment() || '';
			hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
			var is_home = hash === '' || hash === '/';

			/*if (_.getDeviceType() !== 'desktop' && is_home)
			{
				this.showSiteSearch(null, true);
			}*/
			/*
			if (_.getDeviceType() !== 'desktop'){
				this.hideSiteSearch();
			}
			*/
		}
	});

});
