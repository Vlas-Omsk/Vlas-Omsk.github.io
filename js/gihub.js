function CreateProjectCell(link, title, content, imglink) {
    var length = $('#projects .grid').children().length;
    var column = length - (Math.floor(length / 3) * 3);

    var l = $('#projects .grid').append(
    `<li>
        <a href=${link}>
            <style>
                ul.grid li div.background_style${length + 1}:before { transition-delay: ${column * 50 + 400}ms, ${column * 50 + 400}ms; ${!imglink ? '' : `background-image: url('${imglink}');`} }
                ul.grid li a div.fore h2 div.slidecontent_time${length + 1} { transition-delay: ${column * 50 + 600}ms; }
            </style>
            <div class="background background_style${length + 1} background-scale">
                <div class="trim">
                    <div class="fore">
                        <div class="cell-content">
                            ${!content ? '' : content}
                        </div>
                        <span>${length + 1 < 10 ? '0' : ''}${length + 1}</span>
                        <h2 class="title"><div class="slidecontent slidecontent_time${length + 1}">${title}</div></h2>
                        <div class="arrow">
                            <svg viewBox="0 0 20.23 29.93"><g><path d="M1.11,17.68l9,10,9-10"></path><path d="M10.11,26V0"></path></g></svg>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>`);
    
    return l.children().last();
}

var converter = new showdown.Converter();

$(window).on("load", function() {
    $.get('https://api.github.com/users/Vlas-Omsk/repos', function( data ) {
        data.forEach(item => {
            var link = item.html_url, title = item.name, content = '', imglink = '', show = true;

            $.get(`https://raw.githubusercontent.com/${item.full_name}/${item.default_branch}/README.md`, function(data) {
                content = converter.makeHtml(data);
                console.log(content);
            });

            $.get(`https://raw.githubusercontent.com/${item.full_name}/${item.default_branch}/website-config.json`
                  /*'data:application/json;utf-8,{"show":false,"home_url":"$default","title":"$default","content_html":"$default","image_url":"$default"}'*/, function(data) {
                
                data = JSON.parse(data);
                console.log(data);

                show = data.show == null ? true : data.show;
                if (show) {
                    link = data.home_url.replace(/\$default/gi, link);
                    title = data.title.replace(/\$default/gi, title);
                    content = data.content_html.replace(/\$default/gi, content);
                    imglink = data.image_url.replace(/\$default/gi, imglink);
                }
            })
            .always(function() {
                if (!show)
                    return;

                item = CreateProjectCell(link, title, content, imglink);

                onVisibleSpaceListener(item.find('.slidecontent'),
                    el=>{
                        $(el).css({ transform: 'none' });
                    }
                );

                onVisibleSpaceListener(item.find('.background'),
                    el=>{
                        $(el).removeClass('background-scale');
                    }
                );
            });
        });
    });
});