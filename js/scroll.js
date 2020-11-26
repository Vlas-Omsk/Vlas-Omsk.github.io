function isOnVisibleSpace(element) {
    var bodyHeight = window.innerHeight;
    var elemRect = element.getBoundingClientRect();
    var offset = elemRect.top;// - bodyRect.top;
    //if (offset < 0) return false;
    if (offset > bodyHeight) return false;
    return true;
}

var isscrolled = false, closed = false;
var listenedElements = [];
document.addEventListener("DOMContentLoaded", window_onload);
function window_onload() {
    document.getElementById('parralax').onscroll = function() {

        isscrolled = true;
        if (!closed)
        {
            $('.arrow-down').css({ bottom: '-4vw'});
            closed = true;
        }

        listenedElements.forEach((item, index) => {
            if (item == null)
                return;

            var result = isOnVisibleSpace(item.el);

            // обработчик выпадения из зоны видимости
            if (item.el.isOnVisibleSpace && !result) {
                item.el.isOnVisibleSpace = false;
                item.outVisibleSpace(item.el);
                return;
            }
            // обработчик попадания в зону видимости
            if (!item.el.isOnVisibleSpace && result) {
                item.el.isOnVisibleSpace = true;
                item.inVisibleSpace(item.el);

                if (item.outVisibleSpace == null)
                    listenedElements[index] = null;
                return;
            }
        });
    }
}

function onVisibleSpaceListener(els, cbIn, cbOut) {
    Array.from(els).forEach((el) => {
        listenedElements.push({
            el: el,
            inVisibleSpace: cbIn,
            outVisibleSpace: cbOut
        });
    });
}