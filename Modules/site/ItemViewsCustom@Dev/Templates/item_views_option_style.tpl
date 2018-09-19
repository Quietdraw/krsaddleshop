{{!
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
<style>
	.item-views-option-color-tile.style IMG
{
	width: 75px;
}
</style>
<div class="item-views-option-color" data-id="{{itemOptionId}}" data-type="option" data-cart-option-id="{{cartOptionId}}">
	<p class="item-views-option-color-label">
		{{label}}
		{{#if showSelectedOption}}
			: <span>{{selectedOption.label}}</span>
		{{/if}}
	</p>
	<div class="step1">
		<h4>Step 1: Select Style</h4>
	</div>
	<ul class="item-views-option-color-tiles-container" data-id="{{itemOptionId}}">
		{{#each options}}
			{{#if internalId}}
				<li>
					<a	href="{{link}}"
						class="item-views-option-color-tile style {{#if isLightColor}}white-border{{/if}} {{#if isActive}}active{{/if}}  {{#unless isAvailable}}disabled{{/unless}}"
						title="{{label}}"
						data-value="{{internalId}}"
						data-toggle="set-option"
						data-active="{{isActive}}"
						data-available="{{isAvailable}}">
						{{#if isImageTile}}
							<img
								src="{{image.src}}"
								alt="{{label}}"
								width="{{width}}"
								height="{{height}}">
						{{/if}}
						<center><p class="optionselect">(Select)</p></center>
					</a>
				</li>
			{{/if}}
		{{/each}}
	</ul>
</div>
