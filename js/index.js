var ua = window.navigator.userAgent;

$(window).on("load", function() {
    console.log(ua);

    if (IsIE())
        $('head').append('<link rel="stylesheet" href="css/optimization-ie.css"></link>');

    if (IsFirefox()) {
        function no() {
            $('header').css({ opacity: 1 });
            $('#home').css({ height: 0 });
            setTimeout(() => document.getElementById('parralax').onscroll(), 700);
        }
        ShowMessage("Warning!", 
            `The background of this site slows it down on browsers like Firefox.
            <br><br>
            Do you want to enable a background for this site?`, () => { no(); HideMessage(); },
            [
                {
                    text: "Yes",
                    onclick: ShowBackground,
                    class: "red_button",
                    hidemessage: true
                },
                {
                    text: "No",
                    onclick: no,
                    hidemessage: true
                }
            ]);
    }
    else
        ShowBackground();
    
    Start();
})

function ShowBackground() {
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
}

function Start() {
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
}

function ShowMessage(caption, text, background, buttons) {
    $('#message').on("click", function(e) { if (e.target == e.currentTarget) { background(); } });

    $("#message div.message-body h2").html(caption);

    $("#message div.message-body div.text").html(text);

    var ul = $("#message div.message-body div.buttons ul");
    ul.html('');
    buttons.forEach(function(item, i) {
        ul.append(`<li><a>${item.text}</a></li>`);
        var li = $($("#message div.message-body div.buttons ul li")[i]);
        if (item.class != null)
            li.addClass(item.class);
        else
            li.addClass('blue_button');
        if (item.hidemessage)
            li.on("click", () => { item.onclick(); HideMessage(); });
        else
            li.on("click", item.onclick);
    });

    $('#message').css({ display: 'flex' });

    setTimeout(() => {
        $('#message').css({ opacity: 1 });
        $('#message div.message-body').css({ transform: 'none' });
    }, 1);
}

function HideMessage() {
    $('#message').css({ opacity: 0 });
    $('#message div.message-body').css({ transform: 'scale(0.5)' });

    setTimeout(() => $('#message').css({ display: 'none' }), 300);
}


function IsIE() {
    ua.indexOf("MSIE") != -1 || ua.indexOf("Edge") != -1;
}

function IsFirefox() {
    return ua.indexOf("Firefox") != -1;
}