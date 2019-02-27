define('Home.View.Extension', ['Home.View',
	'SC.Configuration'
,	'Utilities.ResizeImage'

,	'home.tpl'

,	'Backbone'
,	'jQuery'
,	'underscore'
,	'Utils'
,	'Tracker'
]
,	function (
	HomeView
,	Configuration

,	resizeImage
,	home_tpl

,	Backbone
,	jQuery
,	_
,	Utils
,	Tracker) {

	_.extend(HomeView.prototype, {
		events: {
			'click button[data-dismiss]': 'stopModalVideo',
			'click .modal.fade': 'stopModalVideo',
			'click a[data-toggle]': 'startModalVideo'
		},
		initialize: function () {
			
			var self = this;

			// debugger

			this.windowWidth = jQuery(window).width();

			// Inside of Application Skeleton
			var layout = this.options.application.getLayout();

			// afterViewRender, afterAppendToDom, afterAppendView, beforeAppendView, etc.
			layout.on('afterAppendView', function () {
				
				
				if(this.$el.find('.home-essentials .row').length >0){
					essentials = this.$el.find('.home-essentials .row').bxSlider({
						auto: true,
						minSlides: 1,
						maxSlides: 6,
						slideWidth: 230,
						moveSlides: 1,
						pager: false,
						shrinkItems: true,
						 prevText: '<a class="btn-arrow btn-arrow-prev"><span></span></a>',
						nextText: '<a class="btn-arrow btn-arrow-next"><span></span></a>'
					});
				}
				
				
			}, this);
			

			//console.log('Window Size = ' + this.windowWidth + "px");

			this.on('afterViewRender', function () {
				this.listenToOnce(
					typeof CMS !== 'undefined' ? CMS : Backbone.Events, 'cms:rendered', this.initSliders
				);
			});

			var windowResizeHandler = _.throttle(function () {

				if (_.getDeviceType(self.windowWidth) === _.getDeviceType(jQuery(window).width())) {
					return;
				}

				this.showContent();

				_.resetViewportWidth();

				self.windowWidth = jQuery(window).width();

			}, 1000);

			this._windowResizeHandler = _.bind(windowResizeHandler, this);

			jQuery(window).on('resize', this._windowResizeHandler);
			//this.startMailChimp();

		},
		initSliders: function () {
			var self = this;
			_.initBxSlider(self.$('[data-slider]'), {
				nextSelector: '.home-slider-next',
				prevSelector: '.home-slider-prev',
				pagerSelector: '.home-slider-pager',
				nextText: '<a class="home-gallery-next-icon"></a>',
				prevText: '<a class="home-gallery-prev-icon"></a>',
				auto: true,
				pause: 6000
			});

		},
		stopModalVideo: function () {
			this.$('div#homeVideoModal iframe').remove();
		},
		startModalVideo: function () {
			var videoID = this.$('.home-video-code').text();
			this.$('div#homeVideoModal .modal-body').html('<iframe src="https://player.vimeo.com/video/' + videoID + '?autoplay=1" class="video-play-url" frameborder="0" allowfullscreen=""></iframe>');
		},

		getContext: _.wrap(HomeView.prototype.getContext,function(fn){
			var fnReturn = fn.apply(this, _.toArray(arguments).slice(1));
			Tracker.getInstance().trackViewHome();
			return _.extend(fnReturn,{})
		})
	});

});