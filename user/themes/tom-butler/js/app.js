// $(document).ready(function() {
//   $(".animsition").animsition({
//     inClass: 'fade-in',
//     outClass: 'fade-out',
//     inDuration: 800,
//     outDuration: 800,
//     linkElement: '.animsition-link',
//     loading: true,
//     loadingParentElement: 'body',
//     loadingClass: 'animsition-loading',
//     loadingInner: '<img src="/user/themes/tom-butler/images/logo.svg">', // e.g '<img src="loading.svg" />'
//     timeout: true,
//     timeoutCountdown: 5000,
//     onLoadEvent: true,
//     browser: [ 'animation-duration', '-webkit-animation-duration'],
//     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
//     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
//     overlay : false,
//     overlayClass : 'animsition-overlay-slide',
//     overlayParentElement : 'body',
//     transition: function(url){ window.location.href = url; }
//   });
// });

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.site-header').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.site-header').removeClass('head-down').addClass('head-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.site-header').removeClass('head-up').addClass('head-down');
        }
    }

    lastScrollTop = st;
}