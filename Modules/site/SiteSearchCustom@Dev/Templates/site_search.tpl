{{!
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="site-search" data-type="site-search">
    <div class="site-search-content">
        <form class="site-search-content-form" method="GET" action="/search" data-action="search">
            <div class="site-search-content-input">
				<div data-view="ItemsSeacher"></div>
				<a class="site-search-input-reset" data-type="search-reset"><i class="site-search-input-reset-icon"></i></a>
            </div>
            <button class="site-search-button-submit" type="submit">
                <i class="site-search-input-icon"></i>
            </button>
            <a href="#" class="site-search-button-close" data-action="show-sitesearch">{{translate 'Close'}}</a>
        </form>
    </div>
</div>
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '804879839641130');
fbq('track', "PageView");
// Search
// Track searches on your website (ex. product searches)
fbq('track', 'Search');</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=804879839641130&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->