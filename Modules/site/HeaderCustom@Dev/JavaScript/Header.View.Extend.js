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
		getContext: _.wrap(HeaderView.prototype.getContext,function(fn){
			var fnReturn = fn.apply(this, _.toArray(arguments).slice(1));
			return _.extend(fnReturn,{
				logoCustomUrl: Configuration.logoUrl
			})
		}),
		// Bind Backbone.Events = Click
		events: {
			'click .global-header-mobile__toggle-button': 'toggleMobileMenu',
			'mouseover .menu-dropdown-link': 'toggleDesktopMenu',
			'mouseleave .menu-dropdown-link': 'toggleDesktopMenuInactive',
			//'click .global-header-navigation__wrapper:not(.menu-open) .header-menu-level1-anchor': 'toggleDesktopMenu',
			//'mouseover .global-header-navigation__wrapper.menu-open .header-menu-level1-anchor': 'toggleDesktopMenu',
			//'click a[data-toggle-submenu]': 'toggleMobileMenuLinks',
			'click .menu-item-has-children .toggle-menu-arrow': 'toggleMobileMenuLinks',
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
			
			this.$('.global-header-mobile').toggleClass('mobile-menu-open');
			this.$('.header-menu-mobile-nav__lists .menu-item-has-children').removeClass("open");
			
		},
		toggleDesktopMenu: function (e) {
			//console.log(e);
			//e.preventDefault();
			var dropdown_inactive = undefined;
			

			// Remove all open menus
			$('.menu-dropdown-link').removeClass('open');

			//clearTimeout(dropdown_inactive)
			
			if (this.$(e.currentTarget).hasClass("open")) {
				//this.$(e.currentTarget).toggleClass("open");
				//this.$('.global-header-navigation__wrapper').removeClass("menu-open");
			} else {
				this.$('.global-header-navigation__wrapper').addClass("menu-open");
				this.$('.header-menu-level1-anchor').removeClass('open');
				this.$(e.currentTarget).addClass("open");
			}
			
		},
		toggleDesktopMenuInactive: function (e) {
			console.log(e);
			//e.preventDefault();

			var dropdown_inactive = undefined;

			/*dropdown_inactive = setTimeout(() => {
				this.$(e.currentTarget).removeClass("open");
				this.$('.global-header-navigation__wrapper').removeClass("menu-open");
			}, 500);
			*/
			
			this.$(e.currentTarget).removeClass("open");
			this.$('.global-header-navigation__wrapper').removeClass("menu-open");
		},
		// Mobile style menu
		toggleMobileMenuLinks: function (e) {
			//console.log('this has been clicked' + e);
			//console.log(e);
			//this.$(e.target).preventDefault();
			e.preventDefault();

			if (this.$(e.currentTarget).parent().parent().hasClass("menu-item-has-children")) {
				//this.$(e.currentTarget).preventDefault();
				this.$(e.target).parent().parent().toggleClass("open");
				//console.log('And now the event' + e);
				//console.log(this.$(e));
			}
			
			
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
		  	
		  	// console.log('URL Changed');
			var hash = Backbone.history.getFragment() || '';
			hash = hash.indexOf('?') === -1 ? hash : hash.substring(0, hash.indexOf('?'));
			var is_home = hash === '' || hash === '/';

			//console.log('home page yes');
			var main = this.$('#main-container');
			var header = this.$('#site-header');
			var nav = this.$('.global-header-navigation__wrapper');
			
			var y = main.offset().top  - jQuery(window).scrollTop();

			

			if (y < -300) {
				header.addClass("menu-fixed");
				nav.addClass("fix-main-nav");
				nav.addClass("menu-fixed");
			} else {
				header.removeClass("menu-fixed");
				nav.removeClass("fix-main-nav");
				nav.removeClass("menu-fixed");
			}
		},
		initializeHomeNav: function() {
			
			
			this.$('.global-header-navigation__wrapper').addClass("hash-home");
			
		}
		
	});

});
