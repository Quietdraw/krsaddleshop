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
			'click .global-header-mobile__toggle-button': 'toggleMobileMenu',
			'click .header-menu-level1-anchor': 'toggleDesktopMenu',
			'click a[data-toggle-submenu]': 'toggleMobileMenuLinks',
			'click .global-header-mobile__closer-menu': 'toggleMobileMenu'
		},
		// Onload
		initialize: function () {
			// Inside of Application SkeletonNetsuite2018

			var layout = this.options.application.getLayout();

			

			this.on('afterViewRender', function () {
				// object.listenToOnce(other, event, callback)
				this.listenToOnce(
					typeof CMS !== 'undefined' ? CMS : Backbone.Events, 
					'cms:rendered', 
					this.siteWideAnnouncement
				);

				var hash = Backbone.history.getFragment() || '';
				hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
				var is_home = hash === '' || hash === '/';

				if (is_home) {
					//this.showSiteSearch(null, true);
					this.initializeHomeNav();
					console.log('This is the Home Page');
				}
			});

			// This pulls in all the Header Backbone Views
			BackboneCompositeView.add(this);

			// URL has changed and new model list is pulled into DOM
			Backbone.history.on('all', this.displayDropdownNav, this);

			// Lets see if we can listen for Scrolling
			//_.bindAll(this, 'detect_scroll');
			// bind to window
			$(window).scroll(this.detect_scroll);

			

		},
		siteWideAnnouncement: function () {
			if (this.$('.global-header-announcement .cms-content').children().length > 0 ) {
				this.$('.global-header-announcement-wrapper').addClass("cms-content-yes");
				this.$('#main').addClass('global-header-announcement-cms-yes');
		   	}
		},
		toggleMobileMenu: function (e) {
			e.preventDefault();
			console.log(e);
			//debugger
			this.$('.global-header-mobile').toggleClass('mobile-menu-open');
		},
		toggleDesktopMenu: function (e) {
			//console.log(e);
			e.preventDefault();
			
			if (this.$(e.target).parent().hasClass("open")) {
				this.$(e.target).parent().toggleClass("open");
				this.$('.global-header-navigation__wrapper').removeClass("menu-open");
			} else {
				this.$('.global-header-navigation__wrapper').addClass("menu-open");
				this.$('.header-menu-level1-anchor').parent().removeClass('open');
				this.$(e.target).parent().addClass("open");
			}
		},
		// Mobile style menu
		toggleMobileMenuLinks: function (e) {
			//console.log(e);
			e.preventDefault();
			//debugger
			this.$(e.target).parent().toggleClass("open");
			
		},
		// @method verifyShowSiteSearch expand the site search only if hash===home and (phone or tablet)
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
		},
		displayDropdownNav: function ()
		{
			// console.log('URL Changed');
			var hash = Backbone.history.getFragment() || '';
			hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
			var is_home = hash === '' || hash === '/';

			if (_.getDeviceType() !== 'desktop')
			{
				this.$('.global-header-mobile').removeClass('mobile-menu-open');
				this.$('.menu-item-has-children').removeClass("open");
			} else {
				// Clean up the Header Nav
				this.$('.global-header-navigation__wrapper').removeClass("menu-open");
				this.$('.header-menu-level1-anchor').parent().removeClass('open');

				

				if (is_home) {
					
					this.$('.global-header-navigation__wrapper').addClass("hash-home");
				} else {
					this.$('.global-header-navigation__wrapper').removeClass("hash-home");
				}
			}
			
			
		},
		detect_scroll: function() {
		  	console.log('detected again');
		  	// console.log('URL Changed');
			var hash = Backbone.history.getFragment() || '';
			hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
			var is_home = hash === '' || hash === '/';

			if (is_home) {
				//console.log('home page yes');
				var main = this.$('#main-container');
				var nav = this.$('.global-header-navigation__wrapper');
				//debugger
				var y = main.offset().top  - jQuery(window).scrollTop();

				console.log(y);

				if (y < -300) {
					console.log('Scrolled Past Destination');
					nav.addClass("fix-main-nav");
				  } else {
					nav.removeClass("fix-main-nav");
				  }
			}
		},
		initializeHomeNav: function() {
			//debugger
			
			this.$('.global-header-navigation__wrapper').addClass("hash-home");
			console.log('Gonzo it was init');
		}
		
	});

});
