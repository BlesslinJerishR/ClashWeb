(function( $ ) {
	'use strict';
    $.noConflict();

	// ======================================================
  	// JQUERY DOCUMENT READY
  	// ------------------------------------------------------
  	$(document).ready( function() {

        // Mailchimp
        $('[data-deventform]').each(function () {
            var $this = $(this);
            $('.form-result', $this).css('display', 'none');

            $this.submit(function ( event ) {

                event.preventDefault();
                $('button[type="submit"]', $this).addClass('clicked');

                // Create a object and assign all fields name and value.
                var values = {};

                $('[name]', $this).each(function () {
                    var $this = $(this),
                    $name = $this.attr('name'),
                    $value = $this.val();
                    values[$name] = $value;
                });

                // Make Request
                $.ajax({
                    url: $this.attr('action'),
                    type: 'POST',
                    data: values,
                    success: function success(data) {
                        if (data.error == true) {
                            $('.form-result', $this).addClass('alert-warning').removeClass('alert-success alert-danger').show().delay(5000).fadeOut();
                        } else {
                            $('.form-result', $this).addClass('alert-success').removeClass('alert-warning alert-danger').show().delay(5000).fadeOut();
                        }
                        $('.form-result > .content', $this).html(data.message);
                        $('button[type="submit"]', $this).removeClass('clicked');
                    },
                    error: function error() {
                        $('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').show().delay(5000).fadeOut();
                        $('.form-result > .content', $this).html('Sorry, an error occurred.');
                        $('button[type="submit"]', $this).removeClass('clicked');
                    }
                });
                return false;
            });
        });




  	});


})( jQuery );


