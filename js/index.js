$(window).on("load", function() {
    if (IsIE())
        $('head').append('<link rel="stylesheet" href="css/optimization-ie.css"></link>');

    setTimeout(() => {
        $(".background .image").css({
            transform: 'none',
            opacity: '1'
        });
        setTimeout(() => {
            $(".foreground .image, .triangle .image").css({
                transform: 'none',
                opacity: '1'
            });
            setTimeout(() => $('header').css({ opacity: 1 }), 1000);
        }, 200);
    }, 1000);

    setTimeout(() => {
        if (!isscrolled)
            $('.arrow-down').css({ bottom: '2vw'});
    }, 5000);

    /*$.get("https://api.github.com/users/Vlas-Omsk", function( data ) {
        console.log(data);
        $("#github-avatar").attr('src', `data:image/svg+xml;utf-8,<svg class="image" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 750 500"><image href="${data.avatar_url}"/></svg>`);
    });*/
    
    onVisibleSpaceListener(document.getElementsByClassName('content'), 
		el=>{
            $('header').addClass('header-opened');
            $('header .logo').removeClass('black-filter');

            $('#projects-btn').removeClass('button-hover');
            $('#projects-btn').addClass('button-opened_only');

            $('#home-btn').removeClass('button-opened_only');
            $('#home-btn').addClass('button-hover');
        },
        el=>{
            $('header').removeClass('header-opened');
            $('header .logo').addClass('black-filter');

            $('#projects-btn').removeClass('button-opened_only');
            $('#projects-btn').addClass('button-hover');

            $('#home-btn').removeClass('button-hover');
            $('#home-btn').addClass('button-opened_only');
        }
    );

    onVisibleSpaceListener(document.getElementsByClassName('slidecontent'),
        el=>{
            $(el).css({ transform: 'none' });
        }
    );

    onVisibleSpaceListener($('.grid .background'),
        el=>{
            $(el).removeClass('background-scale');
        }
    );

    $(".shift ul li a").click(function(self) {
        $("#parralax").animate({
            scrollTop: $('#' + $(self.target).attr('scrollto')).offset().top - 70
        }, 800);
    });

    $('.arrow-down').click(function() {
        $("#parralax").animate({
            scrollTop: $('#projects').offset().top - 70
        }, 800);
        $('.arrow-down').css({ bottom: '-4vw'});
    });
})

function IsIE()
{
    var ua = window.navigator.userAgent;
    console.log(ua);

    if (ua.indexOf("MSIE") != -1 || ua.indexOf("Edge") != -1 )
        return true;
    else
        return false;
}