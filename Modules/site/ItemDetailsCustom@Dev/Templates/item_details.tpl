{{!
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
<div class="item-details">
	<div data-cms-area="item_details_banner" data-cms-area-filters="page_type"></div>

	<header class="item-details-header">
		<div id="banner-content-top" class="item-details-banner-top"></div>
	</header>

	<article class="item-details-content" itemscope itemtype="https://schema.org/Product">
		<meta itemprop="url" content="{{model._url}}">
		<div id="banner-details-top" class="item-details-banner-top-details"></div>

		<section class="item-details-main-content">
			<div class="item-details-content-header">
				
				<div class="item-details-breadcrumb"> {{ model.custitem_websubcat }} / <span class="item-details-breadcrumb__product-name">{{model._pageHeader}}</span></div>
				<h1 class="item-details-content-header-title" itemprop="name">{{model._pageHeader}}</h1>
				
				
				<div data-cms-area="item_info" data-cms-area-filters="path"></div>
			</div>

			<div class="item-details-divider"></div>

			<div class="item-details-image-gallery-container">
				<div id="banner-image-top" class="content-banner banner-image-top"></div>
				<div data-view="ItemDetails.ImageGallery"></div>
				<div id="banner-image-bottom" class="content-banner banner-image-bottom"></div>
			</div>

			<div class="item-details-divider"></div>

			<div class="item-details-main">

				<section class="item-details-info">
					<div id="banner-summary-bottom" class="item-details-banner-summary-bottom"></div>
						
						<div class="item-details-product-info-group lockup__price">
							<div class="item-details-sku-container">
								<span class="item-details-sku">
									{{translate 'PRODUCT NUMBER: #'}}
								</span>
								<span class="item-details-sku-value" itemprop="sku">
									{{sku}}
								</span>
								
							</div>

							<div data-view="Item.Price"></div>
						</div>

					
					<div data-view="Item.Stock"></div>
				</section>

				{{#if showRequiredReference}}
					<div class="item-details-text-required-reference-container">
						<small>Required <span class="item-details-text-required-reference">*</span></small>
					</div>
				{{/if}}

				<section class="item-details-options">
					{{#if isItemProperlyConfigured}}
						{{#if hasAvailableOptions}}
							<button class="item-details-options-pusher" data-type="sc-pusher" data-target="item-details-options"> {{#if isReadyForCart}}{{ translate 'Options' }}{{else}}{{ translate 'Select options' }}{{/if}} {{#if hasSelectedOptions}}:{{/if}} <i></i>
								{{#each selectedOptions}}
									{{#if @first}}
										<span> {{ label }} </span>
									{{else}}
										<span> , {{ label }} </span>
									{{/if}}
								{{/each}}
							</button>
						{{/if}}

						<div class="item-details-options-content" data-action="pushable" data-id="item-details-options">

							<div class="item-details-options-content-price" data-view="Item.Price"></div>

							<div class="item-details-options-content-stock"  data-view="Item.Stock"></div>

							
							<div data-view="ItemDetails.Options"></div>
						</div>
					{{else}}
						<div class="alert alert-error">
							{{translate '<b>Warning</b>: This item is not properly configured, please contact your administrator.'}}
						</div>

					{{/if}}
				</section>

				{{#if isPriceEnabled}}
				{{#if isItemProperlyConfigured}}
					<section class="item-details-actions">

						<form action="#" class="item-details-add-to-cart-form" data-validation="control-group">
							{{#if showQuantity}}
								<input type="hidden" name="quantity" id="quantity" value="1">
							{{else}}
								<div class="item-details-options-quantity" data-validation="control">
									<label for="quantity" class="item-details-options-quantity-title">
										{{translate 'Quantity'}}
									</label>

									<div class="item-details-quantity-wrapper">
										<button class="item-details-quantity-remove" data-action="minus" {{#if isMinusButtonDisabled}}disabled{{/if}}>-</button>
										<input type="number" name="quantity" id="quantity" class="item-details-quantity-value" value="{{quantity}}" min="1">
										<button class="item-details-quantity-add" data-action="plus">+</button>
									</div>

									{{#if showMinimumQuantity}}
										<small class="item-details-options-quantity-title-help">
											{{translate 'Minimum of $(0) required' minQuantity}}
										</small>
									{{/if}}
								</div>
							{{/if}}

							{{#unless isReadyForCart}}
								{{#if showSelectOptionMessage}}
									<p class="item-details-add-to-cart-help">
										<i class="item-details-add-to-cart-help-icon"></i>
										<span class="item-details-add-to-cart-help-text">{{translate 'Please select from the options above prior to ADDING TO CART'}}</span>
									</p>
								{{/if}}
							{{/unless}}
							<div class="item-details-actions-container">
								<div class="item-details-add-to-cart">
									<button data-type="add-to-cart" data-action="sticky" class="item-details-add-to-cart-button" {{#unless isReadyForCart}}disabled{{/unless}}>
										{{translate 'Add to Cart'}}
									</button>
								</div>
								{{#if isReadyForWishList}}
									<div class="item-details-add-to-wishlist" data-type="product-lists-control"></div>
								{{else}}
									<div class="item-details-add-to-wishlist" data-type="product-lists-control" data-disabledbutton="true"></div>
								{{/if}}
							</div>
						</form>

						<div data-type="alert-placeholder"></div>

					</section>
				{{/if}}
				{{/if}}

				<section class="item-details-product-description">
					{{#each details}}
						{{#if @first}} 
						<h3 class="item-details-description">
								{{translate 'Product Details'}}
							</h3>
							<p>{{{content}}}</p>
						{{/if}}
					{{/each}}
				</section>

				<div class="item-details-social-wrapper">
					<h3 class="item-details-social-buttons">
								{{translate 'Share'}}
							</h3>
					<div data-view="SocialSharing.Flyout"></div>
					<div id="banner-summary-bottom" class="item-details-banner-summary-bottom"></div>
				</div>
				
				<!-- Customer Ratings -->
				{{#if showReviews}}
				<div class="item-details-rating-header" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
					<div class="item-details-rating-header-rating" data-view="Global.StarRating"></div>
				</div>
				{{/if}}


			<div id="banner-details-bottom" class="item-details-banner-details-bottom" data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>
			</div>
		</section>


		<h1 class="heading-marquee">King Ranch<br>Essentials</h1>
		<section class="item-details-more-info-content">
				{{!-- I think we need to have these empty divs to help EverGage inject their Related Products Javascript - super weird --}}
				<div>
					<div></div>
					<div>
						<div></div>
					</div>
				</div>
				{{!-- end Related Products Javascript --}}
		</section>

		<div class="item-details-divider-desktop"></div>

		<section class="item-details-product-review-content" >
			{{#if showReviews}}
				<button class="item-details-product-review-pusher" data-target="item-details-review" data-type="sc-pusher">{{ translate 'Reviews' }}
					<div class="item-details-product-review-pusher-rating" data-view="Global.StarRating"></div><i></i>
				</button>
				<div class="item-details-more-info-content-container" data-action="pushable" data-id="item-details-review">
					<div data-view="ProductReviews.Center"></div>
				</div>
			{{/if}}
		</section>

		<div class="item-details-content-related-items">
			<div data-view="Related.Items"></div>
		</div>

		<div class="item-details-content-correlated-items">
			<div data-view="Correlated.Items"></div>
		</div>
		<div id="banner-details-bottom" class="content-banner banner-details-bottom" data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
	</article>
</div>
