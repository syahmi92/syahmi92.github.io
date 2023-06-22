/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function ($) {

    //Dark mode toggle with save function
    var getMode = localStorage.getItem('mode');
    if (getMode == null) {
        getMode = 'light';
    }
    if (getMode == 'dark') {
        $('body').toggleClass('dark-mode');
    }
    $('#darkModeToggle').click(function () {
        if (getMode == 'light') {
            $('body').toggleClass('dark-mode');
            localStorage.setItem('mode', 'dark');
        }
        if (getMode == 'dark') {
            $('body').toggleClass('dark-mode');
            localStorage.setItem('mode', 'light');
        }

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    //Toggle Note

    $('#dev').click(function () {
        this.classList.toggle('active');
        if ($('#iDev').hasClass('fa fa-chevron-circle-down')) {
            $('#iDev').removeClass('fa-chevron-circle-down');
            $('#iDev').addClass('fa-chevron-circle-up');
        }
        else {
            $('#iDev').removeClass('fa-chevron-circle-up');
            $('#iDev').addClass('fa-chevron-circle-down');
        }
    });
    $('#offensive').click(function () {
        this.classList.toggle('active');
        if ($('#iOffensive').hasClass('fa fa-chevron-circle-down')) {
            $('#iOffensive').removeClass('fa-chevron-circle-down');
            $('#iOffensive').addClass('fa-chevron-circle-up');
        }
        else {
            $('#iOffensive').removeClass('fa-chevron-circle-up');
            $('#iOffensive').addClass('fa-chevron-circle-down');
        }
    });
    $('#deffensive').click(function () {
        this.classList.toggle('active');
        if ($('#iDeffensive').hasClass('fa fa-chevron-circle-down')) {
            $('#iDeffensive').removeClass('fa-chevron-circle-down');
            $('#iDeffensive').addClass('fa-chevron-circle-up');
        }
        else {
            $('#iDeffensive').removeClass('fa-chevron-circle-up');
            $('#iDeffensive').addClass('fa-chevron-circle-down');
        }
    });

    //---END TOGGLE NOTE---//

    // Show current year
    $("#current-year").text(new Date().getFullYear());

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function (e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.scrollY - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function () {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function () {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function () {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function () {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function () {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function () {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function () {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function (e) {
        e.preventDefault();
        $(this).fadeOut(300, function () {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);
