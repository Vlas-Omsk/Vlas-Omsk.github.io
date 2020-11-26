function isOnVisibleSpace(element) {
  var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset   = elemRect.top;// - bodyRect.top;
  if(offset<0) return false;
  if(offset>bodyHeight) return false;
  return true;
}

var listenedElements = [];
window.onscroll = function() {window_onscroll()};
function window_onscroll() {
	listenedElements.forEach(item=>{
  	var result = isOnVisibleSpace(item.el);
    
    // обработчик выпадения из зоны видимости
    if(item.el.isOnVisibleSpace && !result){
    	item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    }
    // обработчик попадания в зону видимости
    if(!item.el.isOnVisibleSpace && result){
    	item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
}

function onVisibleSpaceListener(elementClass, cbIn, cbOut) {
  var els = document.getElementsByClassName(elementClass);
  Array.from(els).forEach((el) => {
	listenedElements.push({
	  el: el,
	  inVisibleSpace: cbIn,
	  outVisibleSpace: cbOut    
	});
  });
}