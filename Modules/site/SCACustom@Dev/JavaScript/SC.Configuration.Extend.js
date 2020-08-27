/*
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module SC
// @class SC.Configuration
// All of the applications configurable defaults

define(
    'SC.Configuration.Extend', [
        'SC.Configuration', 'item_views_option_tile.tpl', 'item_views_option_text.tpl', 'item_views_selected_option.tpl'

        , 'underscore', 'Utils'
    ]

    ,
    function (
        Configuration, item_views_option_tile_tpl, item_views_option_text_tpl, item_views_selected_option_tpl

        , _
    ) {

        'use strict';

        //CATEGORY VARIABLE IF NEED FOR THIRD TIER MENU
        //	var outlet = [
        //		{
        //			text: _('Womens Outlet').translate()
        //		,	href: '/outlet/womens'
        //		,	'class': 'header-menu-level3-anchor'
        //		,	data: {
        //				touchpoint: 'home'
        //				, hashtag: '#search'
        //			}
        //		},
        //	];


        var ConfigurationCustom = {


            // @property {Object} searchPrefs Search preferences
            searchPrefs: {
                // @property {Number} searchPrefs.maxLength Search preferences. keyword maximum string length - user won't be able to write more than 'maxLength' chars in the search box
                maxLength: 40

                    // @property {Function} searchPrefs.keywordsFormatter Search preferences. Keyword formatter function will format the text entered by the user in the search box. This default implementation will remove invalid keyword characters like *()+-="
                    ,
                keywordsFormatter: function (keywords) {
                    if (keywords === '||') {
                        return '';
                    }

                    var anyLocationRegex = /[\(\)\[\]\{\~\}\!\"\:\/]{1}/g // characters that cannot appear at any location
                        ,
                        beginingRegex = /^[\*\-\+]{1}/g // characters that cannot appear at the begining
                        ,
                        replaceWith = ''; // replacement for invalid chars

                    return keywords.replace(anyLocationRegex, replaceWith).replace(beginingRegex, replaceWith);
                }
            }

            // @property {String} imageNotAvailable url for the not available image
            ,
            imageNotAvailable: _.getAbsoluteUrl('img/no_image_available.jpeg')

                ,
            templates: {
                itemOptions: {
                    // each apply to specific item option types
                    selectorByType: {
                        select: item_views_option_tile_tpl,
                        'default': item_views_option_text_tpl
                    }
                    // for rendering selected options in the shopping cart
                    ,
                    selectedByType: {
                        'default': item_views_selected_option_tpl
                    }
                }
            }

            // @class SCA.Shopping.Configuration
            // @property {Array<Object>} footerNavigation links that goes in the footer
            ,
            footerNavigation: [{
                        text: 'About Us',
                        href: 'https://www.krsaddleshop.com/about-us'
                    }, {
                        text: 'Contact Us',
                        href: 'https://www.krsaddleshop.com/contact'
                    }
                    //		,	{text: 'Return Policy', href:'/return-policy'}
                    , {
                        text: 'A Look at King Ranch',
                        href: 'https://www.kingranch.com'
                    }
                ]

                // @property {closable:Boolean,saveInCookie:Boolean,anchorText:String,message:String} cookieWarningBanner
                // settings for the cookie warning message (mandatory for UK stores)
                ,
            footerLogoUrl: _.getAbsoluteUrl('img/logo-w-footer.svg'),    
            cookieWarningBanner: {
                closable: true,
                saveInCookie: true,
                anchorText: _('Learn More').translate(),
                message: _('To provide a better shopping experience, our website uses cookies. Continuing use of the site implies consent.').translate()
            }

            // @class SCA.Shopping.Configuration
            // @property {betweenFacetNameAndValue:String,betweenDifferentFacets:String,betweenDifferentFacetsValues:String,betweenRangeFacetsValues:String,betweenFacetsAndOptions:String,betweenOptionNameAndValue:String,betweenDifferentOptions:String}
            ,
            facetDelimiters: {
                betweenFacetNameAndValue: '/',
                betweenDifferentFacets: '/',
                betweenDifferentFacetsValues: ',',
                betweenRangeFacetsValues: 'to',
                betweenFacetsAndOptions: '?',
                betweenOptionNameAndValue: '=',
                betweenDifferentOptions: '&'
            }
            // Output example: /brand/GT/style/Race,Street?display=table

            // eg: a different set of delimiters
            /*
            ,	facetDelimiters: {
            		betweenFacetNameAndValue: '-'
            	,	betweenDifferentFacets: '/'
            	,	betweenDifferentFacetsValues: '|'
            	,	betweenRangeFacetsValues: '>'
            	,	betweenFacetsAndOptions: '~'
            	,	betweenOptionNameAndValue: '/'
            	,	betweenDifferentOptions: '/'
            }
            */
            // Output example: brand-GT/style-Race|Street~display/table

            // @param {Object} searchApiMasterOptions options to be passed when querying the Search API
            ,
            searchApiMasterOptions: {

                Facets: {
                    include: 'facets',
                    fieldset: 'search'
                }

                ,
                itemDetails: {
                    include: 'facets',
                    fieldset: 'details'
                }

                ,
                relatedItems: {
                    fieldset: 'relateditems_details'
                }

                ,
                correlatedItems: {
                    fieldset: 'correlateditems_details'
                }

                // don't remove, get extended
                ,
                merchandisingZone: {}

                ,
                typeAhead: {
                    fieldset: 'typeahead'
                }

                ,
                itemsSearcher: {
                    fieldset: 'itemssearcher'
                }
            }


            // @property {String} logoUrl header will show an image with the url you set here
            ,
            logoUrl: _.getAbsoluteUrl('img/logo-w-header-brown.svg')

                // @property {String} defaultSearchUrl
                ,
            defaultSearchUrl: 'search'

                // @property {Boolean} isSearchGlobal setting it to false will search in the current results
                // if on facet list page
                ,
            isSearchGlobal: true

                // @property {#obj(minLength: Number, maxResults: Number, macro: String, sort: String)} typeahead Typeahead Settings
                ,
            typeahead: {
                minLength: 3,
                maxResults: 4,
                macro: 'typeahead',
                sort: 'relevance:asc'
            }

            // @property {Array<NavigationData>} NavigationData array of links used to construct navigation. (maxi menu and sidebar)
            // @class NavigationData

            ,
            navigationData: [{
                    text: _('New Arrivals').translate(),
                    href: '/new-arrivals/',
                    'class': 'header-menu-level1-anchor',
                    data: {
                        touchpoint: 'home',
                        hashtag: '#new-arrival/true'
                    }
                },
                {
                    text: _('Men').translate(),
                    href: '/mens-gear',
                    'class': 'header-menu-level1-anchor'
                        // @property {Array<NavigationData>} categories
                        ,
                    categories: [{
                            text: _('Men\'s Shirts & Pants').translate(),
                            href: '/men/shirts-pants',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Mens-Shirts--AND--Pants'
                            }
                        },

                        {
                            text: _('Men\'s Vests & Jackets').translate(),
                            href: '/men/men-vest-jackets',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Mens-Vests--AND--Jackets'
                            }
                        },
                        {
                            text: _('Belts & Buckles').translate(),
                            href: '/men/belts-buckles',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Belts--AND--Buckles'
                            }
                        },
                        {
                            text: _('Men\'s Boots & Shoes').translate(),
                            href: '/men/boots-shoes',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Mens-Boots--AND--Shoes'
                            }
                        },
                        {
                            text: _('Wallets & Money Clips').translate(),
                            href: '/men/wallet-money-clips',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Wallets--AND--Money-Clips'
                            },
                        },
                        {
                            text: _('Hats & Caps').translate(),
                            href: '/men/hats-caps',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Hats--AND--Caps'
                            }
                        },
                        {
                            text: _('Men\'s Accessories').translate(),
                            href: '/men/men-accessories',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Mens-Accessories'
                            }
                        }
                    ]
                },
                {
                    text: _('Women').translate(),
                    href: '/womens-gear',
                    'class': 'header-menu-level1-anchor'
                        // @property {Array<NavigationData>} categories
                        ,
                    categories: [{
                            text: _('Handbags & Wallets').translate(),
                            href: '/women/handbags-wallets',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Handbags--AND--Wallets'
                            }
                        },
                        {
                            text: _('Women\'s Apparel').translate(),
                            href: '/women/womens-apparel',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Womens-Apparel'
                            }
                        },
                        {
                            text: _('Women\'s Boots').translate(),
                            href: '/women/womens-boots',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Womens-Boots'
                            }
                        },
                        {
                            text: _('Jewelry').translate(),
                            href: '/women/jewelry',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Jewelry'
                            }
                        },
                        {
                            text: _('Women\'s Accessories').translate(),
                            href: '/women/accessories',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Womens-Accessories'
                            }
                        }
                    ]
                },
                {
                    text: _('Luggage').translate(),
                    href: '/luggage',
                    'class': 'header-menu-level1-anchor'
                        // @property {Array<NavigationData>} categories
                        ,
                    categories: [{
                            text: _('Carry Ons & Duffels').translate(),
                            href: '/luggage/carryons-duffels',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Carry-Ons--AND--Duffels'
                            }
                        },
                        {
                            text: _('Backpacks').translate(),
                            href: '/luggage/backpacks',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Backpacks'
                            }
                        },
                        {
                            text: _('Rolling Bags').translate(),
                            href: '/luggage/rolling-bags',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Rolling-Bags'
                            }
                        },
                        {
                            text: _('Hanging Bags').translate(),
                            href: '/luggage/hanging-bags',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Hanging-Bags'
                            }
                        },
                        {
                            text: _('Shave Cases').translate(),
                            href: '/luggage/shave-cases',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Shave-Cases'
                            }
                        }
                    ]
                },
                {
                    text: _('Logo').translate(),
                    'image': _.getAbsoluteUrl('img/logo-w-header-brown.svg'),
                    href: '/',
                    'class': 'header-menu-level1-logo',
                    data: {
                        touchpoint: 'home',
                        hashtag: '#'
                    }
                },
                {
                    text: _('Outdoors').translate(),
                    href: '/outdoors',
                    'class': 'header-menu-level1-anchor'
                        // @property {Array<NavigationData>} categories
                        ,
                    categories: [{
                            text: _('Gun Cases').translate(),
                            href: '/outdoors/gun-cases',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Gun-Cases'
                            }
                        },
                        {
                            text: _('Shooting Bags & Accessories').translate(),
                            href: '/outdoors/shooting-bags-accessories',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Shooting-Bags--AND--Accessories'
                            }
                        },
                        {
                            text: _('Knives').translate(),
                            href: '/outdoors/knives',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Knives'
                            },
                        },
                    ]
                },
                {
                    text: _('Office').translate(),
                    href: '/office',
                    'class': 'header-menu-level1-anchor',
                    categories: [{
                            text: _('Briefcases').translate(),
                            href: '/office/briefcases',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Briefcases'
                            }
                        },
                        {
                            text: _('Agendas & Tablet Cases').translate(),
                            href: '/office/agendas-tablet',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Agendas--AND--Tablet-Cases'
                            }
                        },
                        {
                            text: _('Office & Desk Accessories').translate(),
                            href: '/office/office-desk-accessories',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Office--AND--Desk-Accessories'
                            }
                        },
                        {
                            text: _('Furniture').translate(),
                            href: '/office/furniture',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Furniture'
                            }
                        }
                    ]
                },
                {
                    text: _('Ranch Home').translate(),
                    href: '/ranch-home',
                    'class': 'header-menu-level1-anchor'
                        // @property {Array<NavigationData>} categories
                        ,
                    categories: [{
                            text: _('Decor Accessories').translate(),
                            href: '/ranch-home/decor-accessories',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Decor-Accessories'
                            }
                        },
                        {
                            text: _('Dinnerware').translate(),
                            href: '/ranch-home/dinnerware',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Dinnerware'
                            }
                        },
                        {
                            text: _('Table Decor').translate(),
                            href: '/ranch-home/table-decor',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Table-Decor'
                            }
                        },
                        {
                            text: _('Glassware').translate(),
                            href: '/ranch-home/glassware',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Glassware'
                            }
                        },
                        {
                            text: _('Flatware').translate(),
                            href: '/ranch-home/flatware',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Flatware'
                            }
                        },
                        {
                            text: _('Foods').translate(),
                            href: '/ranch-home/foods',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Foods'
                            }
                        },
                        {
                            text: _('Books').translate(),
                            href: '/ranch-home/books',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Books'
                            }
                        },
                        {
                            text: _('Wall & Art Decor').translate(),
                            href: 'wall-art-decor',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Wall--AND--Art-Decor'
                            }
                        },
                        {
                            text: _('Pillows & Throws').translate(),
                            href: 'pillows-throws',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: 'custitem_websubcat/Pillows--AND--Throws'
                            }
                        },
                        {
                            text: _('Rugs &  Rug Rails').translate(),
                            href: 'rugs-rails',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Rugs--AND--Rug-Rails'
                            }
                        },
                        {
                            text: _('Lighting & Fireplace').translate(),
                            href: '/ranch-home/lighting-fireplace',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Lighting--AND--Fireplace'
                            }
                        },
                    ]
                },
                {
                    text: _('Saddles').translate(),
                    href: '#',
                    'class': 'header-menu-level1-anchor'
                        // @property {Array<NavigationData>} categories
                        ,
                    categories: [{
                            text: _('Western Saddles').translate(),
                            href: '/saddles/western-saddles',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Western-Saddles'
                            }
                        },
                        {
                            text: _('Saddle Stands').translate(),
                            href: '/saddles/saddle-stands',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Saddle-Stands'
                            }
                        },
                        {
                            text: _('Saddle Accessories').translate(),
                            href: '/saddles/saddle-accessories',
                            'class': 'header-menu-level3-anchor',
                            data: {
                                touchpoint: 'home',
                                hashtag: '#custitem_websubcat/Saddle-Accessories'
                            }
                        },
                    ]
                },
                {
                    text: _('Sale').translate(),
                    href: '/outlet/true',
                    'class': 'header-menu-level1-anchor',
                    data: {
                        touchpoint: 'home',
                        hashtag: '#outlet/true'
                    }
                },
            ],

            // @property {Object} imageSizeMapping map of image custom image sizes
            // usefull to be customized for smaller screens
            imageSizeMapping: {
                thumbnail: 'thumbnail' // 175 * 175
                    ,
                main: 'main' // 600 * 600
                    ,
                tinythumb: 'tinythumb' // 50 * 50
                    ,
                zoom: 'zoom' // 1200 * 1200
                    ,
                fullscreen: 'fullscreen' // 1600 * 1600
                    ,
                homeslider: 'homeslider' // 200 * 220
                    ,
                homecell: 'homecell' // 125 * 125
            }

            // @property {Object} When showing your credit cards, which icons should we use
            ,
            creditCardIcons: {
                'VISA': 'img/visa.png',
                'Discover': 'img/discover.png',
                'Master Card': 'img/master.png',
                'Maestro': 'img/maestro.png',
                'American Express': 'img/american.png'
            }

            ,
            bxSliderDefaults: {
                minSlides: 2,
                slideWidth: 228,
                maxSlides: 5,
                forceStart: true,
                pager: false,
                touchEnabled: true,
                nextText: '<a class="item-details-carousel-next"><span class="control-text">' + _('next').translate() + '</span> <i class="carousel-next-arrow"></i></a>',
                prevText: '<a class="item-details-carousel-prev"><i class="carousel-prev-arrow"></i> <span class="control-text">' + _('prev').translate() + '</span></a>',
                controls: true,
                preloadImages: '1'
            }

            ,
            siteSettings: SC && SC.ENVIRONMENT && SC.ENVIRONMENT.siteSettings || {}

                ,
            tracking: {
                googleTagManager: {
                    id: 'GTM-559CRGV',
                    dataLayerName: 'dataLayer'
                }
            }

            ,
            get: function (path, defaultValue) {
                    return _.getPathFromObject(this, path, defaultValue);
                }

                ,
            getRegistrationType: function () {
                //registrationmandatory is 'T' when customer registration is disabled
                if (Configuration.get('siteSettings.registration.registrationmandatory') === 'T') {
                    // no login, no register, checkout as guest only
                    return 'disabled';
                } else {
                    if (Configuration.get('siteSettings.registration.registrationoptional') === 'T') {
                        // login, register, guest
                        return 'optional';
                    } else {
                        if (Configuration.get('siteSettings.registration.registrationallowed') === 'T') {
                            // login, register, no guest
                            return 'required';
                        } else {
                            // login, no register, no guest
                            return 'existing';
                        }
                    }
                }
            }
        };

        // Append Bronto Integration configuration
        _.extend(Configuration, {
            bronto: {
                accountId: '12103502650dd72c48fd5077f091f3aee03e46a2bd8d2a695164f15c55df5b32'
            }
        });


        return _.extend(Configuration, ConfigurationCustom);
    });
