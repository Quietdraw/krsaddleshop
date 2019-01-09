{{!
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="header-message" data-type="message-placeholder"></div>

<section class="global-header-mobile">
	<div class="global-header-announcement-wrapper">
			<div class="global-header-announcement" data-cms-area="global_header_announcement" data-cms-area-filters="global"></div>
	</div>

	<div class="global-header-mobile__navigation">
		<i class="global-header-mobile__toggle-menu"></i>
		<div class="global-header-mobile__logo">
			<img alt="King Ranch Saddle Shop logo" src="/img/logo-w-header-brown.svg">
		</div>
		<div class="global-header-mobile__auxiliary-links">
				<div class="header-menu-profile" data-view="Header.Profile"></div>
				<div data-view="Header.MiniCart"></div>
		</div>
	</div>

	<div class="global-header-mobile__search">
		<div class="header-site-search" data-view="SiteSearch" data-type="SiteSearch"></div>
	</div>
</section>
<!-- 

<div class="header-main-wrapper">

	<div class="header-topsection">
		<div class="header-topsection-wrapper">
			<div class="header-topsection-left">
				<ul>
					<li><a href="https://king-ranch.com" target="_blank"><img src="/img/kr-iso-white.svg" alt="Iso White" class="header-top-iso-white"></a></li>
					<li><a href="/about-us" data-touchpoint="home" data-hashtag="#about-us">Our Heritage</a></li>
					<li><a href="/corporate-gifts" data-touchpoint="home" data-hashtag="#corporate-gifts">Corporate Gifts</a></li>
				</ul>
			</div>
			<div class="header-topsection-right">

				<div class="header-menu-cart">
					<div class="header-menu-cart-dropdown" >
						<div data-view="Header.MiniCart"></div>
					</div>
				</div>
				<div class="header-extra-links">
					<a href="/faq" data-touchpoint="home" data-hashtag="#faq">HELP</a>
				</div>
				<div class="header-menu-profile" data-view="Header.Profile"></div>

				{{#if showLanguagesOrCurrencies}}
				<div class="header-menu-settings">
					<a href="#" class="header-menu-settings-link" data-toggle="dropdown" title="{{translate 'Settings'}}">
						<i class="header-menu-settings-icon"></i>
						<i class="header-menu-settings-carret"></i>
					</a>
					<div class="header-menu-settings-dropdown">
						<h5 class="header-menu-settings-dropdown-title">{{translate 'Site Settings'}}</h5>
						{{#if showLanguages}}
							<div data-view="Global.HostSelector"></div>
						{{/if}}
						{{#if showCurrencies}}
							<div data-view="Global.CurrencySelector"></div>
						{{/if}}
					</div>
				</div>
				{{/if}}
			</div>
		</div>
	</div>

	<div class="global-header-announcement-wrapper">
		<div class="global-header-announcement" data-cms-area="global_header_announcement" data-cms-area-filters="global"></div>
	</div>

	<nav class="header-main-nav">

		<div id="banner-header-top" class="content-banner banner-header-top" data-cms-area="header_banner_top" data-cms-area-filters="global"></div>

		<div class="header-content">
			<div class="header-logo-wrapper">

				<div class="header-sidebar-toggle-wrapper">
					<button class="header-sidebar-toggle" data-action="header-sidebar-show">
						<i class="header-sidebar-toggle-icon"></i>
					</button>
				</div>

				<div data-view="Header.Logo"></div>

				<div class="header-menu-searchmobile">
					<button class="header-menu-searchmobile-link" data-action="show-sitesearch" title="{{translate 'Search'}}">
						<i class="header-menu-searchmobile-icon"></i>
					</button>

					<div class="header-site-cart-mobile">
						<a data-touchpoint="viewcart"><i class="header-site-cart-mobile-icon"></i></a>
					</div>

				</div>

				<div class="header-right-menu">

					<div class="header-site-search" data-view="SiteSearch" data-type="SiteSearch"></div>
					<ul class="social-dark">
						<li class="social-dark-icon"><a href="https://www.facebook.com/Kingranchsaddleshop" target="_blank"><i class="fa-facebook"></i></a></li>
						<li class="social-dark-icon"><a href="https://instagram.com/kingranchsaddleshop/" target="_blank"><i class="fa-instagram"></i></a></li>
						<li class="social-dark-icon"><a href="https://www.pinterest.com/krsaddleshop" target="_blank"><i class="fa-pinterest"></i></a></li>
					</ul>

					<div class="header-menu-quote" data-view="RequestQuoteWizardHeaderLink">
					</div>
			</div>

			</div>
		</div>

		<div id="banner-header-bottom" class="content-banner banner-header-bottom" data-cms-area="header_banner_bottom" data-cms-area-filters="global"></div>
	</nav>
</div>


<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>
<div class="header-secondary-wrapper" data-view="Header.Menu" data-phone-template="header_sidebar" data-tablet-template="header_sidebar">
</div>



<div class="header-banner-section" data-cms-area="header-banner-section" data-cms-area-filters="global"></div>
-->