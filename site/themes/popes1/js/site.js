/**
 * Responsive Nav
 */

$('#mobile-nav').scotchPanel({
    containerSelector: 'body',
    direction: 'left',
    duration: 300,
    transition: 'ease',
    clickSelector: '.toggle-panel',
    distanceX: '70%',
    enableEscapeKey: true
});

/**
 * Open all external links in a new window
 */
$(document).ready(function($) {
    $('a').not('[href*="mailto:"]').each(function () {
		var isInternalLink = new RegExp('/' + window.location.host + '/');
		if ( ! isInternalLink.test(this.href) ) {
			$(this).attr('target', '_blank');
		}
	});
});
