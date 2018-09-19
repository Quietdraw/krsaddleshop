/*
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ShoppingApplication
// @class SCA.Shopping.Configuration
// This is the Shopping Application configuration file. From here you can configure high level values like
// the logo image, templates to use in common places, facets, sort and display options of the search result places, etc.
// @extends SCA.Configuration
define(
	'SC.Shopping.Configuration.Custom'
,	[
		'SC.Shopping.Configuration'
	,	'SC.Configuration'
	,	'Session'

	,	'item_views_option_tile.tpl'
	,	'item_views_option_initials.tpl'
	,	'item_views_option_dropdown.tpl'
	,	'item_views_option_radio.tpl'
	,	'item_views_option_text.tpl'
	,	'item_views_option_color.tpl'
	,	'item_views_option_leather.tpl'
	,	'item_views_option_style.tpl'
	,	'item_views_selected_option.tpl'
	,	'item_views_selected_option_color.tpl'

	,	'facets_faceted_navigation_item_range.tpl'
	,	'facets_faceted_navigation_item_color.tpl'

	,	'facets_item_cell_grid.tpl'
	,	'facets_item_cell_list.tpl'
	,	'facets_item_cell_table.tpl'

	,	'underscore'
	,	'jQuery'
	,	'Backbone'
	,	'Utils'
	]
,	function (
		ShoppingConfiguration
	,	BaseConfiguration
	,	Session

	,	item_views_option_tile_tpl
	,	item_views_option_initials_tpl
	,	item_views_option_dropdown_tpl
	,	item_views_option_radio_tpl
	,	item_views_option_text_tpl
	,	item_views_option_color_tpl
	,	item_views_option_leather_tpl
	,	item_views_option_style_tpl
	,	item_views_selected_option_tpl
	,	item_views_selected_option_color_tpl

	,	facets_faceted_navigation_item_range_tpl
	,	facets_faceted_navigation_item_color_tpl

	,	facets_item_cell_grid_tpl
	,	facets_item_cell_list_tpl
	,	facets_item_cell_table_tpl

	,	_
	,	jQuery
	,	Backbone
	,	Utils
	)
{
	'use strict';

	var colors = {
			'Black': '#212121'
		,	'Antique': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Black/Cream': { type: 'image', src: 'https://www.krsaddleshop.com/img/blackcream.png', width: 22, height: 22 } //custom King Ranch color
		,	'Black/Cherry': { type: 'image', src: 'https://www.krsaddleshop.com/img/blackcherry.image.png', width: 22, height: 22 } //custom King Ranch color
		,	'Black Cherry': { type: 'image', src: 'https://www.krsaddleshop.com/img/blackcherry.image.png', width: 22, height: 22 } //custom King Ranch color
		,	'Black/Turquoise': { type: 'image', src: 'https://www.krsaddleshop.com/img/blackturquoise.png', width: 22, height: 22 } //custom King Ranch color
		,	'Blaze Orange': { type: 'image', src: 'https://www.krsaddleshop.com/img/blazeorange.png', width: 22, height: 22 } //custom King Ranch color
		,	'Blue Turquoise': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Blue/White': { type: 'image', src: 'https://www.krsaddleshop.com/img/bluewhite.png', width: 22, height: 22 } //custom King Ranch color
		,	'Brass': '#B5A642' //custom King Ranch color
		,	'Camel': '#C19A6B' //custom King Ranch color
		,	'Caramel': '#CC9966' //custom King Ranch color
		,	'Camo': { type: 'image', src: 'https://www.krsaddleshop.com/img/camo.png', width: 22, height: 22 } //custom King Ranch color
		,	'Cayenne': '#BB3E18' //custom King Ranch color
		,	'Chaparral Latigo': { type: 'image', src: 'https://www.krsaddleshop.com/img/chaplatigo.png', width: 22, height: 22 } //custom King Ranch color
		,	'Chaparral': { type: 'image', src: 'https://www.krsaddleshop.com/img/chapparal.png', width: 22, height: 22 } //custom King Ranch color
		,	'Chaparral Docil': { type: 'image', src: 'https://www.krsaddleshop.com/img/chapparal.png', width: 22, height: 22 } //custom King Ranch color
		,	'Chocolate': '#4E2E28' //custom King Ranch color
		,	'Citron': '#9FA91F' //custom King Ranch color
		,	'Clay': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Clear': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Coastal Green': '#a2ccbc' //custom King Ranch color
		,	'Cocoa': '#332A25' //custom King Ranch color
		,	'Cognac': '#A3481B' //custom King Ranch color
		,	'Copper': '#b87333' //custom King Ranch color
		,	'Coral': '#FF7F50' //custom King Ranch color
		,	'Cream': { type: 'image', src: 'Images/colortraits/creamcow.image.png', width: 22, height: 22 } //custom King Ranch color
		,	'Cream Cow': { type: 'image', src: 'Images/colortraits/creamcow.image.png', width: 22, height: 22 } //custom King Ranch color
		,	'Dark': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Dark Chocolate': '#552B00' //custom King Ranch color
		,	'Denim': '#1560BD' //custom King Ranch color
		,	'Deep Water': { type: 'image', src: 'https://www.krsaddleshop.com/img/deepwater.png', width: 22, height: 22 } //custom King Ranch color
		,	'Distressed': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Game Guard Camo': { type: 'image', src: 'https://www.krsaddleshop.com/img/gameguardcamo.png', width: 22, height: 22 } //custom King Ranch color
		,	'Gold': '#D4AF37' //custom King Ranch color
		,	'Gold/Black': { type: 'image', src: 'https://www.krsaddleshop.com/img/goldblack.png', width: 22, height: 22 } //custom King Ranch color
		,	'Ivory': '#fffff0' //custom King Ranch color
		,	'Khaki': { type: 'image', src: 'https://www.krsaddleshop.com/img/khaki.png', width: 22, height: 22 } //custom King Ranch color
		,	'Key Lime': { type: 'image', src: 'https://www.krsaddleshop.com/img/limegreen.png', width: 22, height: 22 } //custom King Ranch color
		,	'Lime Green': { type: 'image', src: 'https://www.krsaddleshop.com/img/limegreen.png', width: 22, height: 22 } //custom King Ranch color
		,	'Lapis': '#336699' //custom King Ranch color
		,	'Linen': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Maroon': '#800000' //custom King Ranch color
		,	'Mixed-Antique': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Multi': { type: 'image', src: 'https://www.krsaddleshop.com/Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Mustard': '#ffdb58' //custom King Ranch color
		,	'Natural': { type: 'image', src: 'https://www.krsaddleshop.com/img/natural.image.png', width: 22, height: 22 } //custom King Ranch color
		,	'Navy/Brown': { type: 'image', src: 'https://www.krsaddleshop.com/img/navybrown.png', width: 22, height: 22 } //custom King Ranch color
		,	'Olive': '#808000' //custom King Ranch color
		,	'Onyx': '#0f0f0f' //custom King Ranch color
		,	'Pearl': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Pecan': { type: 'image', src: 'https://www.krsaddleshop.com/img/pecan.png', width: 22, height: 22 } //custom King Ranch color
		,	'Platinum': { type: 'image', src: 'https://www.krsaddleshop.com/img/platinum.png', width: 22, height: 22 } //custom King Ranch color
		,	'Putty': '#D4D2CB' //custom King Ranch color
		,	'Pyrite': '#A9A9A9' //custom King Ranch color
		,	'Red/Black': { type: 'image', src: 'https://www.krsaddleshop.com/img/redblack.png', width: 22, height: 22 } //custom King Ranch color
		,	'Red Leather': { type: 'image', src: 'https://www.krsaddleshop.com/img/redleather.png', width: 22, height: 22 } //custom King Ranch color
		,	'Rio Latigo': { type: 'image', src: 'https://www.krsaddleshop.com/img/riolatigo.png', width: 22, height: 22 } //custom King Ranch color
		,	'Rio Docil': { type: 'image', src: 'https://www.krsaddleshop.com/img/riolatigo.png', width: 22, height: 22 } //custom King Ranch color
		,	'Rio': { type: 'image', src: 'https://www.krsaddleshop.com/img/riolatigo.png', width: 22, height: 22 } //custom King Ranch color
		,	'Royal Blue': '#4169e1' //custom King Ranch color
		,	'Russett': '#80461b' //custom King Ranch color
		,	'Rust': '#b7410e' //custom King Ranch color
		,	'Sage': '#9C9F84' //custom King Ranch color
		,	'Salmon': '#FFA07A' //custom King Ranch color
		,	'Seafoam': '#a0d6b4' //custom King Ranch color
		,	'Silver': '#C0C0C0' //custom King Ranch color
		,	'Silver/Smoke': { type: 'image', src: 'https://www.krsaddleshop.com/img/silversmoke1.png', width: 22, height: 22 } //custom King Ranch color
		,	'Slate': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Sodalite': '#6762de' //custom King Ranch color
		,	'Sombra Latigo': { type: 'image', src: 'https://www.krsaddleshop.com/img/sombralatigo.png', width: 22, height: 22 } //custom King Ranch color
		,	'Sombra': { type: 'image', src: 'https://www.krsaddleshop.com/img/sombralatigo.png', width: 22, height: 22 } //custom King Ranch color
		,	'Sombra Docil': { type: 'image', src: 'https://www.krsaddleshop.com/img/sombralatigo.png', width: 22, height: 22 } //custom King Ranch color
		,	'Sorbet': { type: 'image', src: 'Images/colortraits/traitcolor_multi.jpg', width: 22, height: 22 } //custom King Ranch color
		,	'Spice': '#e49004' //custom King Ranch color
		,	'Tan': { type: 'image', src: 'https://www.krsaddleshop.com/img/tan.png', width: 22, height: 22 } //custom King Ranch color
		,	'Tan/Black': { type: 'image', src: 'https://www.krsaddleshop.com/img/tanblack1.png', width: 22, height: 22 } //custom King Ranch color
		,	'Taupe': '#483c32' //custom King Ranch color
		,	'Tiger\'s Eye': '#cc9933' //custom King Ranch color
		,	'Tobacco': { type: 'image', src: 'https://www.krsaddleshop.com/img/tobacco.image.png', width: 22, height: 22 } //custom King Ranch color
		,	'Topaz': '#ffc87c' //custom King Ranch color
		,	'Turquoise': '#30d5c8' //custom King Ranch color
		,	'Waxed Canvas': { type: 'image', src: 'https://www.krsaddleshop.com/img/waxedcanvas.png', width: 22, height: 22 } //custom King Ranch color
		,	'Western Tooled': { type: 'image', src: 'https://www.krsaddleshop.com/img/westerntooled.png', width: 22, height: 22 } //custom King Ranch color
		,	'Wheat': '#ffcccc' //custom King Ranch color
		,	'Gun Metal': { type: 'image', src: 'https://www.krsaddleshop.com/img/gunmetal.png', width: 22, height: 22 } //custom King Ranch color
		,	'Mesquite': { type: 'image', src: 'https://www.krsaddleshop.com/img/mesquite.png', width: 22, height: 22 } //custom King Ranch color
		,	'River Blue': { type: 'image', src: 'https://www.krsaddleshop.com/img/riverblue.png', width: 22, height: 22 } //custom King Ranch color
		,	'Aluminum': { type: 'image', src: 'https://www.krsaddleshop.com/img/aluminum.png', width: 22, height: 22 } //custom King Ranch color
		,	'Bronze': { type: 'image', src: 'https://www.krsaddleshop.com/img/bronze.png', width: 22, height: 22 } //custom King Ranch color
		,	'Style 1': { type: 'image', src: 'https://www.krsaddleshop.com/img/style1.jpg', width: 200, height: 133 } //PStyle Image
		,	'Style 2': { type: 'image', src: 'https://www.krsaddleshop.com/img/style2.jpg', width: 200, height: 133 } //PStyle Image
		,	'Gray': '#9c9c9c'
		,	'Grey': '#9c9c9c'
		,	'White': '#fff'
		,	'Brown': '#804d3b'
		, 'Brown/Cream':{ type: 'image', src: 'https://www.krsaddleshop.com/img/brown_cream.image.jpeg', width: 200, height: 133 } //PStyle Imagebrown_cream.image.jpg
		,	'Beige': '#eedcbe'
		,	'Blue': '#0f5da3'
		,	'Light Blue': '#8fdeec'
		,	'Purple': '#9b4a97 '
		,	'Lilac': '#ceadd0'
		,	'Red': { type: 'image', src: 'https://www.krsaddleshop.com/img/red.image.png', width: 200, height: 133 } //PStyle Image
		,	'Sunset': { type: 'image', src: 'https://www.krsaddleshop.com/img/sunset.image.png', width: 200, height: 133 } //PStyle Image
		,	'Pink': '#ffa5c1'
		,	'Orange': '#ff5200'
		,	'Peach': '#ffcc8c'
		,	'Yellow': '#ffde00'
		,	'Light Yellow': '#ffee7a'
		,	'Green': '#00af43'
		,	'Lime': '#c3d600'
		,	'Teal': '#00ab95'
		,	'Aqua': '#28e1c5'
		,	'Burgundy': '#9c0633'
		,	'Navy': '#002d5d'
		,	'Amber': '#FFC200'
		,	'Nicasia Cognac/Plaid': { type: 'image', src: 'https://www.krsaddleshop.com/img/NicasiaCognacPlaid.png', width: 22, height: 22 } //custom King Ranch color
		,	'Grizzly Sand': { type: 'image', src: 'https://www.krsaddleshop.com/img/Grizzly_Sand.png', width: 22, height: 22 } //custom King Ranch color
		,	'Tan/Natural': { type: 'image', src: 'https://www.krsaddleshop.com/img/Tan_Natural.jpg', width: 22, height: 22 } //custom King Ranch color
		}
	,	lightColors = [
			'White'
		,	'Clear'
		];


	var Configuration = {

		// depending on the application we are configuring, used by the NavigationHelper.js
		currentTouchpoint: 'home'
	// Application Setup
	,	siteName: 'King Ranch Saddle Shop'

	,	tracking: {
			// [Google Universal Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
			googleUniversalAnalytics: {
				propertyID: 'UA-6524357-1'
			,	domainName: window.location.hostname
			}
			// [Google AdWords](https://support.google.com/adwords/answer/1722054/)
		,	googleAdWordsConversion: {
				id: 0
			,	value: 0
			,	label: ''
			}
		,	googleTagManager: {
					id: "GTM-559CRGV",
					dataLayerName: "dataLayer"
			}
		}

	,	modulesConfig: {
			'ItemDetails':  {startRouter: true}
		,	'Cart':  {startRouter: true, saveForLater: true}
		// , 'Categories':  {addToNavigationTabs: true}
		}

		// @property {loginToSeePricesConfiguration} loginToSeePrices
		// @class loginToSeePricesConfiguration
	,	loginToSeePrices: {
		// @property {Array<String>} hiddenFacetNames That are the names we are taking into consideration when hide any facet
			hiddenFacetNames: [
				'onlinecustomerprice'
			]
		}
		//@class SC.Shopping.Configuration

		// @property {Boolean} addToCartFromFacetsView flag for showing or not, "add to cart" button in facet views
	,	addToCartFromFacetsView: false

		// @property {String} addToCartBehavior Defines what happens after the user adds an item to the cart.
		// Available values are: goToCart, showMiniCart or showCartConfirmationModal
	,	addToCartBehavior: 'showCartConfirmationModal'

	// ,	homeTemplate: 'home'

		//@property {Array<String>} lightColors
	,	lightColors: lightColors

		// @property {Array<FacetConfiguration>} facets settings on how each facet should display in the "narrow your results" section.
		// @class FacetConfiguration Facet settings on how each facet should display in the "narrow your results" section.
		// @property {String} name internationalized facet name,
		// @property {String} url hash fragment that identified the facet in the url
		// @property {Number} priority an integer grater than zero indicating for ordering facets editors. Facets with greater priority numbers will appear above others.
		// @property {Function} template the tempalte that renders the facet editor. Some available are facetRange, facetColor
		// @property {Boolean} uncollapsible if true the user won't be able to collapse the facet editor
		// @property {String} behavior can be one of "range", "multi". If "range", a double slider will be showed as the editor. If "multi", multiple facet value selection will be available
		// @property {String} titleToken format for the facet on the document title's when it is selected. Can be a string like "from $(0) to $(1)" for range behaviour or "foo $(0) bar" for others. Also it can be a function that accept the facet object as the one parameter.
		// @property {String} titleSeparator a string separator between facets in the document's title.
		// @class SCA.Shopping.Configuration
	,	facets: [
			{
				id: 'custitem_websubcat'
			,	name: _('Category').translate()
			,	priority: 100
			,	behavior: 'hierarchical'
			,	macro: 'facetCategories'
			,	uncollapsible: false
			,	titleToken: '$(0)'
			,	titleSeparator: ', '
			,	url: '/category'
			}
			,{
				id: 'custitem_color'
			,	priority: 20
			,	name: _('Color').translate()
			,	template: facets_faceted_navigation_item_color_tpl
			,	colors: colors
			}
		]
		// @property {String} defaultSearchTitle Title for the facet browse view.
	,	defaultSearchTitle: _('Products - King Ranch Saddle Shop').translate()
		// @property {String} searchTitlePrefix Title prefix for the facet browse view.
	,	searchTitlePrefix: _('').translate()
		// @property {String} searchTitleSuffix Title suffix for the facet browse view.
	,	searchTitleSuffix: _('').translate()

		// @property {FacetsSeoLimits} facetsSeoLimits Limits for the SEO generated links in the facets browser
		// Once the limits are hitted the url is replaced with # in the links
		// @class FacetsSeoLimits
	,	facetsSeoLimits: {
			// @property {Number} numberOfFacetsGroups how many facets groups will be indexed
			numberOfFacetsGroups: 2
			// @property {Number} numberOfFacetsValues for multi value facet groups how many facets values together
		,	numberOfFacetsValues: 2
			// @property {Array<String>} Which options will be indexed,
			// if you omit one here, and it's present in the url it will not be indexed
		,	options: ['page', 'keywords'] // order, page, show, display, keywords
		}

		// @property {Array<Object>} resultsPerPage available options for the Results per Page dropdown
	,	resultsPerPage: [
			{items: 12, name: _('Show $(0) products per page').translate('12')}
		,	{items: 24, name: _('Show $(0) products per page').translate('24'), isDefault: true}
		,	{items: 48, name: _('Show $(0) products per page').translate('48')}
		]

		// @property {Array<Object>} itemsDisplayOptions available views for the item list by selecting the templates
	,	itemsDisplayOptions: [
			{id: 'list', name: _('List').translate(), template: facets_item_cell_list_tpl, columns: 1, icon: 'icon-display-list'}
		,	{id: 'table', name: _('Table').translate(), template: facets_item_cell_table_tpl, columns: 2, icon: 'icon-display-table'}
		,	{id: 'grid', name: _('Grid').translate(), template: facets_item_cell_grid_tpl, columns: 4, icon: 'icon-display-grid', isDefault: true}
		]
		// @property {Array<Object>} sortOptions available sorting options for the Sort By dropdown
	,	sortOptions: [
			{id: 'relevance:asc', name: _('Sort by relevance').translate(), isDefault: true}
		,	{id: 'onlinecustomerprice:asc', name: _('Sort by price, low to high').translate()}
		,	{id: 'onlinecustomerprice:desc', name: _('Sort by price, high to low ').translate()}
		]

		// @property {useCookie:Boolean,numberOfItemsDisplayed:Number} recentlyViewedItems
	,	recentlyViewedItems: {
			useCookie: true
		,	numberOfItemsDisplayed: 6
		}

		// @property {Array<ItemOption>} itemOptions Settings for displaying each of the item options in the Detailed Page
		// Each of the item options are objects that extend whats coming of the api
		// This options should have (but not limited to) these documented properties
		// We have provided some templates for you to use but you are encouraged to create your own:
		// For the selector we have created:
		// * item_views_option_color_tpl
		// * item_views_option_text_tpl
		// * item_views_option_tile_tpl
		// and for the selected we have created:
		// * item_views_selected_option_tpl
		// * item_views_selected_option_color_tpl
		// @class ItemOption
		// @property {String} itemOptionId The id of an option in the item
		// @property {String} cartOptionId The id of an option in the cart (!required, is the primary key for the mapping)
		// @property {String} label The label that the option will be shown
		// @property {String} url the key of the option when its stored in the url
		// @property {selector:Function,selected:Function} templates An object that contains
		//   'selector' is the template that will be rendered for selecting the options (Item list and PDP)
		//   'selected' is the template that will be rendered for the item in the cart (Cart and Cart confirmation)
		// @property {Boolean} showSelectorInList if true the selector will be rendered in the item list
		// Be aware that some marcos may require you to configure some exrta options in order to work properly:
		// @property Object<String,String> colors an map of the label of the color as they key and hexa or an object as the value is required by the itemDetailsOptionColor
		// @class SCA.Shopping.Configuration
	,	itemOptions: [
		// Here are some examples:
		// configure a color option to use color macro
			{
				itemOptionId: 'custitem_color'
			,	cartOptionId: 'custcol_color'
			,	label: 'Color'
			,	url: 'color'
			,	colors: colors
			,	showSelectorInList: false
			,	templates: {
					selector: item_views_option_color_tpl
				,	selected: item_views_selected_option_tpl
				}
			}
			,   {
				itemOptionId: 'custitem_leather'
			,	cartOptionId: 'custcol_leathercolor'
			,	label: 'Leather Color'
			,	showSelectorInList: false
			,	url: 'leather'
			,	colors: colors
			,	templates: {
					selector: item_views_option_leather_tpl
				,	selected: item_views_selected_option_tpl
				}
			}
			 ,  {
				itemOptionId: 'custcol_sizeselect'
			,	cartOptionId: 'shirtsize'
			,	label: 'Shirt Size'
			,	url: 'size'
			,	showSelectorInList: true
			,	templates: {
					selector: item_views_option_tile_tpl
				,	selected: item_views_selected_option_tpl// 'shoppingCartOptionColor'
				}
			}
			,  {
				itemOptionId: 'custcol_personalization'
			,	cartOptionId: 'custcol_personalization'
			,	label: 'Personalization'
			,	url: 'personalization'
			,	showSelectorInList: false
			,	templates: {
					selector: item_views_option_tile_tpl
				,	selected: item_views_selected_option_tpl// 'shoppingCartOptionColor'
				}
			}
			,  {
				itemOptionId: 'custitem_item_number'
			,	cartOptionId: 'custcol_item_number'
			,	label: ' '
			,	url: 'item_number'
			,	showSelectorInList: false
			,	templates: {
					selector: item_views_option_tile_tpl
				,	selected: item_views_selected_option_tpl// 'shoppingCartOptionColor'
				}
			}
			,  {
				itemOptionId: 'custcol_personstyle'
			,	cartOptionId: 'custcol_personstyle'
			,	label: 'Personalization'
			,	url: 'style'
			,	colors: colors
			,	showSelectorInList: false
			,	templates: {
					selector: item_views_option_style_tpl
				,	selected: item_views_selected_option_tpl// 'shoppingCartOptionColor'
				}
			}
			,  {
				itemOptionId: 'custcol_personalization_code'
			,	cartOptionId: 'custcol_personalization_code'
			,	label: 'Initials'
			,	url: 'personalization_code'
			,	showSelectorInList: false
			,	templates: {
					selector: item_views_option_initials_tpl
				,	selected: item_views_selected_option_tpl// 'shoppingCartOptionColor'
				}
			}
			,  {
				itemOptionId: 'custcol_personthreeinitials'
			,	cartOptionId: 'custcol_personthreeinitials'
			,	label: ' '
			,	url: 'initials'
			,	showSelectorInList: false
			,	templates: {
					selector: item_views_option_initials_tpl
				,	selected: item_views_selected_option_tpl// 'shoppingCartOptionColor'
				}
			}
			,  {
				itemOptionId: 'custitem_other'
			,	cartOptionId: 'custcol_other'
			,	label: 'Select Option'
			,	url: 'othero'
			}
		//
		// configure Gift Certificates options to change the value on the url
		// when the user is filling the values
		//	 ,  {
		//		cartOptionId: 'GIFTCERTFROM'
		//	,	url: 'from'
		//	}
		//	 ,	{
		//		cartOptionId: 'GIFTCERTRECIPIENTNAME'
		//	,	url: 'to'
		//	}
		//,	{
		//		cartOptionId: 'GIFTCERTRECIPIENTEMAIL'
		//	,	url: 'to-email'
		//	}
		// ,	{
		//		cartOptionId: 'GIFTCERTMESSAGE'
		//	,	url: 'message'
		//	}
		]

		// @property {String} multiImageOption for multi images, option that determines the id of the option
		// that handles the image change. eg: custcol_color
		,	multiImageOption: 'custcol_color'

		// @property {Array<ItemDetailsField>} details fields to be displayed on a stacked list on the PDP
		// @class ItemDetailsField
		// @property {String} name
		// @property {String} contentFromKey
		// @property {Boolean} opened
		// @property {String} itemprop
	,	itemDetails: [
			{
				name: _('Overview').translate()
			,	contentFromKey: 'storedetaileddescription'
			,	opened: true
			,	itemprop: 'description'
			}
			,{
				name: _('Extended Description').translate()
			,	contentFromKey: 'custitem_extended_description'
			,	opened: false
			,	itemprop: 'description'
			}
		]
		// @class SCA.Shopping.Configuration
		// @property {defaultPaginationSettings:Boolean,pagesToShow:Number,showPageIndicator:Boolean} defaultPaginationSettings
		// This object will be merged with specific pagination settings for each of the pagination calls
		// You can use it here to toggle settings for all pagination components
		// For information on the valid options check the pagination_macro.txt
	,	defaultPaginationSettings: {
			showPageList: true
		,	pagesToShow: 9
		,	showPageIndicator: true
		}

		// Product Reviews Configuration
		// -----------------------------
		// @property {ProductReviewsConfiguration} productReviews
		// @class ProductReviewsConfiguration
	,	productReviews: {
			// @property {Number} maxRate
			maxRate: 5
			// @property {Boolean} computeOverall
		,	computeOverall: true
		,	reviewMacro: 'showReview'
			// @property {Boolean} loginRequired
		,	loginRequired: false
			// @property {Array} filterOptions
		,	filterOptions: [
				{id: 'all', name: _('All Reviews').translate(), params: {}, isDefault: true}
			,	{id: '5star', name: _('$(0) Star Reviews').translate('5'), params: {rating: 5}}
			,	{id: '4star', name: _('$(0) Star Reviews').translate('4'), params: {rating: 4}}
			,	{id: '3star', name: _('$(0) Star Reviews').translate('3'), params: {rating: 3}}
			,	{id: '2star', name: _('$(0) Star Reviews').translate('2'), params: {rating: 2}}
			,	{id: '1star', name: _('$(0) Star Reviews').translate('1'), params: {rating: 1}}
			]
			// @property {Array} sortOptions
		,	sortOptions: [
				{id: 'date', name: _('By Date').translate(), params: {order: 'created_on:ASC'}, isDefault: true}
			,	{id: 'rating', name: _('By Rating').translate(), params: {order: 'rating:ASC'}}
			]
		}

		// @class SCA.Shopping.Configuration
		// @property {SCA.Shopping.Configuration.Cache} cache
		// @class ShoppingConfigCache
	,	cache: {
			// @property {String} contentPageCdn cdn cache duration for content pages. Valid values are 'SHORT', 'MEDIUM', 'LONG'
			contentPageCdn: 'MEDIUM'

			// @property {Number} contentPageTtl application cache for content pages - value in seconds and must be between 5 minutes and 2 hours
		,	contentPageTtl: 2 * 60 * 60
		}
		// @property {SCA.Shopping.Configuration.Performance}
		// @class SCA.Shopping.Configuration.Performance
	,	performance:
		{
			// @property {Boolean} waitForUserProfile if true the application won't start executing until the user profile information (sc.user.environment.ssp)
			// finish loading. False by default (faster page load)
			waitForUserProfile: false
		}
		// @class SCA.Shopping.Configuration

	,	homePage:
		{
			carouselImages: [
				_.getAbsoluteUrl('img/carousel-home-2.jpg')
			,	_.getAbsoluteUrl('img/carousel-home-1.jpg')
			,	_.getAbsoluteUrl('img/carousel-home-3.jpg')
			]
			// the bottom banner images will display by default as a row, so based on bootstrap grid system, there should be a count divisible
		,	bottomBannerImages: [
				_.getAbsoluteUrl('/img/banner-bottom-home-luggage.jpg')
			,	_.getAbsoluteUrl('/img/banner-bottom-home-western.jpg')
			,	_.getAbsoluteUrl('/img/banner-bottom-home-office.jpg')
			]
		}

		// Analytics Settings
		// You need to set up both popertyID and domainName to make the default trackers work
	//,	tracking: {
			// [Google Universal Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/)
			// [Google Analytics](https://developers.google.com/analytics/devguides/collection/gajs/)
	//	,	google: {
	//			propertyID: ''
	//		,	domainName: ''
	//		}
			// [Google AdWords](https://support.google.com/adwords/answer/1722054/)
	//	,	googleAdWordsConversion: {
	//			id: 0
	//		,	value: 0
	//		,	label: ''
	//		}
	//	}

	};

	// Device Specific Settings
	// ------------------------

	/*---------------------------
	itemsDisplayOptions is set when the user loads the page with the current width of the screen device, NOT the width of the browser.
	This option is NOT responsive, so if the user loads the page with the desktop resolution, even if he resize the browser, he will still see the view of the desktop.

	Display type and columns supported by screen resolution:

	Mobile
	Display types -> List, Table
		List -> columns  [1, 2]
		Table -> columns [1, 2]

	Tablet
	Display types  -> List, Table
		List -> columns [1, 2, 3, 4, 6, 12]
		Table -> columns [1, 2, 3, 4, 6, 12]

	Desktop
	Display types	->
		List -> columns [1, 2, 3, 4, 6, 12]
		Table -> columns [1, 2, 3, 4, 6, 12]
		Grid -> columns [1, 2, 3, 4, 6, 12]
	--------------------------*/

	if (!SC.isPageGenerator())
	{
		var screenType = Utils.getDeviceType();

		// Phone Specific
		if (screenType === 'phone')
		{
			_.extend(Configuration, {

				itemsDisplayOptions: [
					{ id: 'list', name: _('List').translate(), template: facets_item_cell_list_tpl, columns: 1, icon: 'icon-display-list' }
				,	{ id: 'table', name: _('Table').translate(), template: facets_item_cell_table_tpl, columns: 2, icon: 'icon-display-table', isDefault: true }
				]

			,	sortOptions: [
					{id: 'relevance:asc', name: _('Sort by relevance').translate(), isDefault: true}
				,	{id: 'onlinecustomerprice:asc', name: _('Sort by  price, low to high').translate()}
				,	{id: 'onlinecustomerprice:desc', name: _('Sort by price, high to low ').translate()}
				]

			,	defaultPaginationSettings: {
					showPageList: false
				,	showPageIndicator: true
				}
			});
		}
		// Tablet Specific
		else if (screenType === 'tablet')
		{
			_.extend(Configuration, {

				itemsDisplayOptions: [
					{id: 'list', name: _('List').translate(), template: facets_item_cell_list_tpl, columns: 1, icon: 'icon-display-list' }
				,	{id: 'table', name: _('Table').translate(), template: facets_item_cell_table_tpl, columns: 2, icon: 'icon-display-table'}
				,	{id: 'grid', name: _('Grid').translate(), template: facets_item_cell_grid_tpl, columns: 4, icon: 'icon-display-grid', isDefault: true}
				]

			,	sortOptions: [
					{id: 'relevance:asc', name: _('Sort by relevance').translate(), isDefault: true}
				,	{id: 'onlinecustomerprice:asc', name: _('Sort by price, low to high').translate()}
				,	{id: 'onlinecustomerprice:desc', name: _('Sort by price, high to low ').translate()}
				]

			,	defaultPaginationSettings: {
					showPageList: true
				,	pagesToShow: 4
				,	showPageIndicator: true
				}
			});
		}
		// Desktop
		else
		{
			_.extend(Configuration, {

				itemsDisplayOptions: [
					{ id: 'list', name: _('List').translate(), template: facets_item_cell_list_tpl, columns: 1, icon: 'icon-display-list' }
				,	{ id: 'table', name: _('Table').translate(), template: facets_item_cell_table_tpl, columns: 2, icon: 'icon-display-table' }
				,	{ id: 'grid', name: _('Grid').translate(), template: facets_item_cell_grid_tpl, columns: 4, icon: 'icon-display-grid', isDefault: true }
				]
			});
		}
	}


	/**
	 * SEO related configuration
	 * Search Engine Optimization
	 */
	var seo_title = function (layout)
		{
			var title = layout.$('[itemprop="name"]:eq(0)').text();
			return title && title.length ? jQuery.trim(title) : '';
		}

	,	seo_url = function ()
		{
			return window.location.protocol + '//' + window.location.hostname + '/' + Backbone.history.fragment;
		}

	,	seo_domain = function ()
		{
			return Session.get('touchpoints.home');
		}

	,	seo_image =  function (layout, number)
		{
			var $image = layout.$('[data-type="social-image"], [itemprop="image"]')
			,	my_number = typeof number === 'undefined' ? 0 : number
			,	resized_image = $image.get(my_number) ? $image.get(my_number).src : Configuration.imageNotAvailable;
			return resized_image;
		}

	,	seo_site_name = function ()
		{
			return SC.ENVIRONMENT.siteSettings.displayname;
		}

	,	seo_description = function (layout)
		{
			var social_description = layout.$('[data-type="social-description"], [itemprop="description"]').first().text();
			social_description = jQuery.trim( social_description ).replace(/\s+/g, ' ');

			return social_description && social_description.length ? social_description : '';
		}

	,	seo_twitter_description = function (layout)
		{
			var description = seo_description(layout);

			// Twitter cards requires a description less than 200 characters
			return description && description.length ? description.substring(0, 200) : '';
		}

	,	seo_provider_name = function ()
		{
			return SC.ENVIRONMENT.siteSettings.displayname;
		}

	,	seo_price = function (layout)
		{
			var price = layout.$('[itemprop="price"]:eq(0)').text();
			price = jQuery.trim( price );

			return price && price.length ? price : '';
		}

	,	seo_price_standard_amount = function (layout)
		{
			var the_num = seo_price(layout);
			return the_num && the_num.length ? the_num.replace( /^\D+/g, '') : '';
		}

	,	seo_price_currency = function (layout)
		{
			var price_currency = layout.$('[itemprop="priceCurrency"]').attr('content');
			price_currency = jQuery.trim( price_currency );

			return price_currency && price_currency.length ? price_currency : '';
		}

	,	seo_availability = function (layout)
		{
			var $availability_href = layout.$('[itemprop="availability"]')
			,	result = ''
			,	param = '';

			$availability_href = jQuery.trim( $availability_href.attr('href') );

			result= $availability_href.split('/');
			param = result[result.length - 1];

			return param && param.length ? param : '';
		}

	,	seo_rating = function (layout)
		{
			var rating = layout.$('[itemprop="ratingValue"]:eq(0)').attr('content');
			return rating && rating.length ? rating : '';
		}

	,	seo_rating_scale = function (layout)
		{
			var rating_scale = layout.$('[itemprop="bestRating"]:eq(0)').attr('content');
			return rating_scale && rating_scale.length ? rating_scale : '';
		}

	,	seo_rating_count = function (layout)
		{
			var rating_count = layout.$('[itemprop="reviewCount"]:eq(0)').text();
			return rating_count && rating_count.length ? jQuery.trim(rating_count) : '';
		}

	,	seo_twitter_site = function ()
		{
			return '';
		}

	,	seo_twitter_creator = function ()
		{
			return '';
		}

	,	seo_twitter_label_one = function ()
		{
			return 'PRICE';
		}

	,	seo_twitter_price = function (layout)
		{
			return jQuery.trim( seo_price(layout) + ' ' + seo_price_currency(layout) );
		}

	,	seo_twitter_label_two = function ()
		{
			return 'AVAILABILITY';
		}

	,	seo_twitter_image_cero = function (layout)
		{
			return seo_image(layout, 0);
		}

	,	seo_twitter_image_one = function (layout)
		{
			return seo_image(layout, 1);
		}

	,	seo_twitter_image_two = function (layout)
		{
			return seo_image(layout, 2);
		}

	,	seo_twitter_image_three = function (layout)
		{
			return seo_image(layout, 3);
		}
	,	seo_google_plus_authorship_author = function ()
		{
			// Author for individual contents
			//return 'https://plus.google.com/+YourAuthorName';
		}
	,	seo_google_plus_authorship_publisher = function ()
		{
			// Publisher for brand contents
			//return 'https://plus.google.com/+YourPublisherName';
		}
	;

	_.extend(Configuration, {

		// @property {Object} linkTagGooglePlusAuthorship
		linkTagGooglePlusAuthorship: {
			'author': seo_google_plus_authorship_author
		,	'publisher': seo_google_plus_authorship_publisher
		}

		// @property {Object} metaTagMappingOg [Open Graph](https://ogp.me/)
	,	metaTagMappingOg: {
			'og:title': seo_title

		,	'og:type': function ()
			{
				return 'product';
			}

		,	'og:url': seo_url

		,	'og:image': seo_image

		,	'og:site_name': seo_site_name

		,	'og:description': seo_description

		,	'og:provider_name': seo_provider_name

		,	'og:price:standard_amount': seo_price_standard_amount

		,	'og:price:currency': seo_price_currency

		,	'og:availability': seo_availability

		,	'og:rating': seo_rating

		,	'og:rating_scale': seo_rating_scale

		,	'og:rating_count': seo_rating_count
		}

		// @property {Object} metaTagMappingTwitterProductCard [Twitter Product Card](https://dev.twitter.com/docs/cards/types/product-card)
	,	metaTagMappingTwitterProductCard: {
			'twitter:card': function ()
			{
				return 'product';
			}

		,	'twitter:site': seo_twitter_site

		,	'twitter:creator': seo_twitter_creator

		,	'twitter:title': seo_title

		,	'twitter:description': seo_twitter_description

		,	'twitter:image:src': seo_image

		,	'twitter:domain': seo_domain

		,	'twitter:data1': seo_twitter_price

		,	'twitter:label1': seo_twitter_label_one

		,	'twitter:data2': seo_availability

		,	'twitter:label2': seo_twitter_label_two
		}

		// @property {Object} metaTagMappingTwitterGalleryCard [Twitter Gallery Card](https://dev.twitter.com/docs/cards/types/gallery-card)
	,	metaTagMappingTwitterGalleryCard: {
			'twitter:card': function ()
			{
				return 'gallery';
			}

		,	'twitter:title': seo_title

		,	'twitter:description': seo_twitter_description

		,	'twitter:image0:src': seo_twitter_image_cero

		,	'twitter:image1:src': seo_twitter_image_one

		,	'twitter:image2:src': seo_twitter_image_two

		,	'twitter:image3:src': seo_twitter_image_three
		}

		// Social Sharing Services
		// -----------------------

		// @property {Object} pinterest Pinterest Social Sharing Service
	,	pinterest: {
			enable_hover: true // Pin it button over image
		,	enable_button: true
		,	image_size: 'main' // Select resize id to show on Pintrest
		,	popupOptions: {
				status: 'no'
			,	resizable: 'yes'
			,	scrollbars: 'yes'
			,	personalbar: 'no'
			,	directories: 'no'
			,	location: 'no'
			,	toolbar: 'no'
			,	menubar: 'no'
			,	width: '680'
			,	height: '300'
			,	left: '0'
			,	top: '0'
			}
		}

		// @property {Object} facebook facebook Social Sharing Service
		// You need to set your custom appId for this to work and associate the domain to your application.
	,	facebook: {
			enable: true
		,	appId: '166330017034906'
		,	popupOptions: {
				status: 'no'
			,	resizable: 'yes'
			,	scrollbars: 'yes'
			,	personalbar: 'no'
			,	directories: 'no'
			,	location: 'no'
			,	toolbar: 'no'
			,	menubar: 'no'
			,	width: '500'
			,	height: '250'
			,	left: '0'
			,	top: '0'
			}
		}

		// @property {Object} twitter twitter Social Sharing Service
	,	twitter: {
			enable: true
		,	popupOptions: {
				status: 'no'
			,	resizable: 'yes'
			,	scrollbars: 'yes'
			,	personalbar: 'no'
			,	directories: 'no'
			,	location: 'no'
			,	toolbar: 'no'
			,	menubar: 'no'
			,	width: '632'
			,	height: '250'
			,	left: '0'
			,	top: '0'
			}
		,	via: ''
		}

		// @property {Object} googlePlus
	,	googlePlus: {
			enable: true
		,	popupOptions: {
				menubar: 'no'
			,	toolbar: 'no'
			,	resizable: 'yes'
			,	scrollbars: 'yes'
			,	height: '600'
			,	width: '600'
			}
		}

		// @property {Object} addThis
	,	addThis: {
			enable: false
		,	pubId: 'ra-50abc2544eed5fa5'
		,	toolboxClass: 'addthis_default_style addthis_toolbox addthis_button_compact'
		,	servicesToShow: {
			    pinterest: 'Pinterest'
			,	facebook: 'Facebook'
			,	twitter: 'Twitter'
			,	google_plusone: ''
			,	print: _('Print').translate()
			,	email: _('Email').translate()
			,	expanded: _('More').translate()
			}

			// https://support.addthis.com/customer/portal/articles/381263-addthis-client-api#configuration-ui
		,	options: {
				username: 'jonswindle'
			,	data_track_addressbar: true
			// ,	services_exclude: '',
			// ,	services_compact: '',
			// ,	services_expanded: '',
			// ,	services_custom: '',
			// ,	ui_click: '',
			// ,	ui_delay: '',
			// ,	ui_hover_direction: '',
			// ,	ui_language: '',
			// ,	ui_offset_top: '',
			// ,	ui_offset_left: '',
			// ,	ui_header_color: '',
			// ,	ui_header_background: '',
			// ,	ui_cobrand: '',
			// ,	ui_use_css: '',
			// ,	ui_use_addressbook: '',
			// ,	ui_508_compliant: '',
			// ,	data_track_clickback: '',
			// ,	data_ga_tracker: '',
			}
		}
	});

	//Deep extend
	jQuery.extend(true, BaseConfiguration, Configuration);

	return BaseConfiguration;
});
