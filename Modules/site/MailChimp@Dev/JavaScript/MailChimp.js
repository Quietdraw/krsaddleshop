define('MailChimp', ['MailChimp.View'], function (View) {
    'use strict';
    var cookieName = 'welcomePopup',
        cookieDays = 1000,
        cookieDaysRemindmelater = 1;


    function openPopup() {
        if (jQuery.cookie(cookieName, true, {expires: cookieDays})) {
            return false;
        }
        else if (jQuery(window).width() <= 767) {
            return false;
        } else {
            jQuery.cookie(cookieName, true, {expires: cookieDays});
            return true;
        }

    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    return {

        mountToApp: function (application) {

            var Layout = application.getLayout();
            if(!getCookie(cookieName)){
                openPopup();
                var view = new View({application: application});
                Layout.once('afterAppendToDom', function () {
                    Layout.showInModal(view , {macro: 'emptyModal', className: 'welcome-modal'});
                    var $form = Layout.$('#in-modal-welcome-popup .newsletter-form form');
                    var settings = application.getConfig('newsletter');

                });
            }else{
                jQuery("body").removeClass("modal-open")
                return;
            }

        }
    }
});
