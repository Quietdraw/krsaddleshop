define('MailChimp.View'
,	[	'jQuery'
	,	'mailchimp.tpl'
	]
,	function (
		jQuery
	,	template
	)
{
	'use strict';

	// @lass GoogleAdWords Adds GoogleAdWords tracking pixel on the checkout confirmation page. @extends ApplicationModule
	return Backbone.View.extend({

        template: template,

        events:{
            "click #in-modal-notnow":"setCookieForLater",
            "click #in-modal-nothanks":"noThanks",
            "click .close-btn":"closePopup",
            "click #in-modal-send":"sendForm",
            "blur #in-modal-mce-EMAIL":"validateEmail",
            "blur #in-modal-mce-MMERGE3":"validateZipcode"
        },
        validateZipcode:function(el){

        	var zipcode = jQuery(el.target).val()

        	if(isNaN(zipcode)){

        		jQuery(el.target).css("border","1px solid red");

        	}else{

        		jQuery(el.target).css("border","1px solid #DECDBA");

        	}
        },
        validateEmail:function(el){
        	var email = jQuery(el.target).val();

    		if(!this.checkEmail(email)){

    			jQuery(el.target).css("border","1px solid red");

    		}else{

    			jQuery(el.target).css("border","1px solid #DECDBA");

    		};
        },
        checkEmail:function(email){
        	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        	return re.test(email);
        },
        showError:function(msj,color){
        	jQuery("#in-modal-mce-responses").html("<div style='color:"+color+"'>"+msj+"</div>")
        },
        removeError:function(){
        	jQuery("#in-modal-mce-responses").html("");
        },
        sendForm:function(){

        	try{
        		if(this.checkEmail(jQuery("#in-modal-mce-EMAIL").val()) && jQuery("#in-modal-mce-MMERGE3").val()!=""){
        			this.showError("Success! thanks you for your subscription","green");
        			var formdata = new FormData(document.getElementById("in-modal-mc-embedded-subscribe-form"));
					var xhr = new XMLHttpRequest();
					xhr.open("POST", "//krsaddleshop.us1.list-manage.com/subscribe/post?u=71538d58586f8eee69f172c09&id=b6b57b4dea", true)
					xhr.send(formdata);

					xhr.onload = function(e){}
        		}else{
        			this.showError("Please fill all the mandatory fields","red");
        		}

        	}catch(e){
        		console.log(e);
        	}

        },

	    closePopup: function(){

	        jQuery.cookie(cookieName, true, {expires: cookieDaysRemindmelater});

	        jQuery(".welcome-modal").modal('hide')

	    },

			popup: function popup() {

	            this.showInModal({
	                modalOptions: { backdrop: 'static', keyboard: false }
	            });
	      },

        setCookieForLater:function(){
            jQuery.cookie(cookieName, true, {expires: cookieDaysRemindmelater});

        },

        noThanks:function(){
            jQuery.cookie(cookieName, true, {expires: cookieDays});

        }

	});
});
