define('Home.View.Extension',['Home.View','jQuery','underscore'],function (HomeView,jQuery,_){

	_.extend(HomeView.prototype,{
	events: {
		'click button[data-dismiss]': 'stopModalVideo',
		'click .modal.fade': 'stopModalVideo',
		'click a[data-toggle]': 'startModalVideo'
	},
	initialize: function ()
		{
			var self = this;
			
			// debugger
			
			this.windowWidth = jQuery(window).width();

			// Inside of Application Skeleton
			var layout = this.options.application.getLayout();
			
			// afterViewRender, afterAppendToDom, afterAppendView, beforeAppendView
			layout.on('afterAppendToDom', function(){
				//debugger
				$('.home-essentials .row').bxSlider({
					auto: true,
					minSlides: 1,
					maxSlides: 5,
					slideWidth: 280,
					moveSlides: 1,
					pager: false
				  });
			}, this);

			//console.log('Window Size = ' + this.windowWidth + "px");
			
			this.on('afterViewRender', function()
			{
				this.listenToOnce(
					typeof CMS !== 'undefined'? CMS : Backbone.Events, 'cms:rendered', this.initSliders
				);
			});

			var windowResizeHandler = _.throttle(function ()
			{
				if (_.getDeviceType(self.windowWidth) === _.getDeviceType(jQuery(window).width()))
				{
					return;
				}
				this.showContent();

				_.resetViewportWidth();

				self.windowWidth = jQuery(window).width();

			}, 1000);

			this._windowResizeHandler = _.bind(windowResizeHandler, this);

			jQuery(window).on('resize', this._windowResizeHandler);
			//this.startMailChimp();

		}
		,initSliders: function(){
			
			//console.log('Testing Slider');

			var self = this;
			_.initBxSlider(self.$('[data-slider]'), {
					nextText: '<a class="home-gallery-next-icon"></a>'
				,	prevText: '<a class="home-gallery-prev-icon"></a>'
				,   auto: true
				,	pause:6000
			});

		}
		,stopModalVideo: function() {
      	this.$('div#homeVideoModal iframe').remove();
    }
  	,startModalVideo: function() {
  		var videoID = this.$('.home-video-code').text();
    	this.$('div#homeVideoModal .modal-body').html('<iframe src="https://player.vimeo.com/video/'+videoID+'?autoplay=1" class="video-play-url" frameborder="0" allowfullscreen=""></iframe>');
  	}
  	//,startMailChimp: function() {

  	    // Fill in your MailChimp popup settings below.
				/*var mailchimpConfig = {
          baseUrl: 'mc.us1.list-manage.com',
          uuid: 	 '71538d58586f8eee69f172c09',
          lid: 		 'b6b57b4dea'
			  };

        // No edits below this line are required
        var chimpPopupLoader = document.createElement("script");
        chimpPopupLoader.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js';
        chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false');

        var chimpPopup = document.createElement("script");
        chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +  mailchimpConfig.baseUrl + '", "uuid": "' + mailchimpConfig.uuid + '", "lid": "' + mailchimpConfig.lid + '"})});'));

        // jQuery(function () {
        document.body.appendChild(chimpPopupLoader);
        document.body.appendChild(chimpPopup);
    		//});*/

	//	}
	});

	return {

        mountToApp: function (application) {

			var container = $(".card-img-top");
			

			var simple = jQuery('#site-header')[0];
			console.log(simple);

			

			jQuery('.home-featured-collections').hide()
			
			$('#container_2').html("<p>Soon you will be HTML</p>");

        }
    }

});
