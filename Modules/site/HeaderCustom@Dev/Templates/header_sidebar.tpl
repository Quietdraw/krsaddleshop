{{!
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
<nav class="header-menu-mobile-nav__wrapper">
	<div class="header-menu-mobile-nav__container">
		<ul class="header-menu-mobile-nav__lists">

			{{#each categories}}
			<li {{#if categories}} class="menu-item menu-item-has-children" {{/if}}>
				{{#if image}}{{else}}<a {{objectToAtrributes this}} data-toggle-submenu >{{text}} </a> <a href="#"><i class="toggle-menu-arrow"></i></a>{{/if}}
				{{#if categories}}
				<ul class="sub-menu">
					<span>Shop by category</span>
					{{#each categories}}
					<li class="menu-item">
						<a {{objectToAtrributes this}}>{{text}}</a>
					</li>
					{{/each}}
				</ul>
				{{/if}}
			</li>
			{{/each}}

		</ul>
	</div>
</nav>

	


{{#if showExtendedMenu}}
	<a class="header-sidebar-user-logout" href="#" data-touchpoint="logout" name="logout">
		<i class="header-sidebar-user-logout-icon"></i>
		{{translate 'Sign Out'}}
	</a>
	{{/if}}

	{{#if showLanguages}}
	<div data-view="Global.HostSelector"></div>
	{{/if}}
	{{#if showCurrencies}}
	<div data-view="Global.CurrencySelector"></div>
	{{/if}}