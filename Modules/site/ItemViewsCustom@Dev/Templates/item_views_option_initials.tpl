{{!
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="item-views-option-text" data-id="{{itemOptionId}}" data-type="option" data-cart-option-id="{{cartOptionId}}">
		<div class="step1">
		<h4>Step 2: Initials (As Stamped)</h4>
	</div>
	{{#if isTextArea}}
		<textarea 
			name="option-{{cartOptionId}}"
			id="option-{{cartOptionId}}"
			class="item-views-option-text-area"
			data-toggle="text-option"
			data-available="true"
			data-id="{{itemOptionId}}">{{#if showSelectedOption}}{{selectedOption.internalId}}{{/if}}</textarea>
	{{else}}
		<input 
			type="{{#if isEmail}}email{{else}}text{{/if}}"
			name="option-{{cartOptionId}}"
			id="option-{{cartOptionId}}"
			class="item-views-option-text-input" 
			value="{{#if showSelectedOption}}{{selectedOption.internalId}}{{/if}}" 
			data-toggle="text-option"
			data-id="{{itemOptionId}}"
			data-available="true">
	{{/if}}
<div class="stylenote">
<p>Style 1 = First, Middle, Last <span push>Style 2 = First, Last, Middle</span></p>
<p>Please note that after an item has been personalized, it cannot be exchanged or returned for a refund.</p>
</div>
</div>