(function(e){function t(t){for(var n,s,r=t[0],c=t[1],a=t[2],d=0,h=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(h.length)h.shift()();return l.push.apply(l,a||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},l=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/WebTable/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var u=c;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0055":function(e,t,o){},"0dec":function(e,t,o){},"0fff":function(e,t,o){},"1a54":function(e,t,o){},"1c90":function(e,t,o){"use strict";o("ac65")},"243a":function(e,t,o){"use strict";o("65b6")},"270c":function(e,t,o){"use strict";o("0055")},"356f":function(e,t,o){"use strict";o("e9f5")},4845:function(e,t,o){"use strict";o("ebd7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Tools"),o("div",{staticClass:"container"},[o("Table",{style:e.tableStyle}),o("TextTableViewer")],1),o("Popup",{model:{value:e.isOverlayVisible,callback:function(t){e.isOverlayVisible=t},expression:"isOverlayVisible"}})],1)},l=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"table",staticClass:"table"},[o("div",{staticClass:"table__free-space",on:{click:e.selectAll}}),o("div",{staticClass:"table__row-headers-wrapper"},[o("div",{ref:"row_headers_scroll",staticClass:"table__scroll table__scroll-withoutScrollbar table__row-headers-scroll"},[o("div",{staticClass:"table__row-headers"},e._l(e.table.rows,(function(e,t){return o("RowHeader",{key:t,attrs:{rowid:t}})})),1)])]),o("div",{ref:"column_headers",staticClass:"table__column-headers-wrapper"},[o("div",{ref:"column_headers_scroll",staticClass:"table__scroll table__scroll-withoutScrollbar"},[o("div",{staticClass:"table__column-headers"},e._l(e.table.columns,(function(e,t){return o("ColumnHeader",{key:t,attrs:{columnid:t}})})),1)])]),o("div",{ref:"table_viewer",staticClass:"table__scroll",on:{scroll:e.contentScroll}},[o("div",{staticClass:"table__content"},e._l(e.table.rows,(function(t,n){return o("CellRow",{key:n,attrs:{rowid:n,focused:e.focused},on:{cellEditingStart:function(t){e.isCellEditing=!0},cellEditingEnd:function(t){e.isCellEditing=!1}}})})),1)])])},r=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"rowheader",staticClass:"table__header row-header",on:{mousedown:e.mousedown,mousemove:e.mousemove}},[e._v(" "+e._s(e.rowid+1)+" "),o("div",{ref:"header_resizer",staticClass:"row-header__resizer",on:{mousedown:e.resizeStart}})])},a=[],u=(o("a9e3"),o("b85c")),d=(o("a434"),o("4de4"),o("d3b7"),o("159b"),{mouseup:[],mousemove:[],mousedown:[],keydown:[],touchstart:[],touchmove:[],touchend:[],copy:[],paste:[],cut:[],selectionchanged:[],rowsizechanged:[],columnsizechanged:[],cellchanged:[],tablechanged:[],configchanged:[],openpopup:[],closepopup:[]});function h(e,t){d[e]&&d[e].push(t)}function f(e,t){d[e].filter((function(e){return e!==t}))}function m(){for(var e in d)d[e]=[]}function p(e,t){d[e].forEach((function(e){return e&&e(t)}))}document.addEventListener("mousemove",(function(e){p("mousemove",e)})),document.addEventListener("mouseup",(function(e){p("mouseup",e)})),document.addEventListener("mousedown",(function(e){p("mousedown",e)})),document.addEventListener("keydown",(function(e){p("keydown",e)})),document.addEventListener("touchstart",(function(e){p("touchstart",e)})),document.addEventListener("touchmove",(function(e){p("touchmove",e)})),document.addEventListener("touchend",(function(e){p("touchend",e)})),document.addEventListener("copy",(function(e){p("copy",e)})),document.addEventListener("paste",(function(e){p("paste",e)})),document.addEventListener("cut",(function(e){p("cut",e)})),document.addEventListener("load",(function(e){p("load",e)}));var w={on:h,off:f,clear:m,broadcast:p},v=(o("ac1f"),o("466d"),{37:1,38:1,39:1,40:1});function g(e){e.preventDefault()}function b(e){if(v[e.keyCode])return g(e),!1}var y=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){y=!0}}))}catch(It){}var _=!!y&&{passive:!1},C="onwheel"in document.createElement("div")?"wheel":"mousewheel";function S(e){return String.fromCharCode(65+e)}function x(e){return JSON.parse(JSON.stringify(e))}function k(e){for(var t=[0],o=1;o<=e;o++){t[0]+=1;for(var n=0;n<t.length;n++)t[n]>25&&(t.length>n+1?t[n+1]+=1:t[n+1]=0,t[n]=0)}for(var i="",l=0,s=t;l<s.length;l++){var r=s[l];i=S(r)+i}return i}function E(e){return 1===e.length&&(e.match(/\d|\w|[а-яА-Я]/i)||-1!=["_","-","+","=","!","@","#","$","%","^","&","*","(",")","|","\\","/","[","]","{","}",",",".","?","`","~","'",'"',":",";","<",">"].indexOf(e))}function T(e,t){var o=document.createRange();o.selectNodeContents(e),t&&o.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(o)}function O(e){e.addEventListener("DOMMouseScroll",g,!1),e.addEventListener(C,g,_),e.addEventListener("touchmove",g,_),e.addEventListener("keydown",b,!1)}function $(e){e.removeEventListener("DOMMouseScroll",g,!1),e.removeEventListener(C,g,_),e.removeEventListener("touchmove",g,_),e.removeEventListener("keydown",b,!1)}function z(e,t){while(-1==t.indexOf(e)&&e)e=e.parentElement;return!!e}var R=[],D={},j=!1,L={default:{row:{height:20},column:{width:100}},rows:[],columns:[],cells:[]},P=-1,M=-1,V=-1,N=-1,K=null;function A(){w.on("tablechanged",U),w.on("mousemove",ee),w.on("touchmove",ee),w.on("mouseup",te),w.on("touchend",te),w.on("touchmove",ie);var e=localStorage.getItem("table");if(e)e=JSON.parse(e),w.broadcast("tablechanged",{table:e});else{for(var t=0;t<50;t++)L.rows.push(x(L.default.row));for(var o=0;o<50;o++)L.columns.push(x(L.default.column))}w.on("tablechanged",q),w.on("cellchanged",q),w.on("rowsizechanged",q),w.on("columnsizechanged",q)}function B(e){K=e}function J(){return K}function U(e){L.default=e.table.default,L.rows=e.table.rows,L.columns=e.table.columns,L.cells=e.table.cells;for(var t=0;t<L.rows.length;t++)w.broadcast("rowsizechanged",{row:t,value:L.rows[t].height});for(var o=0;o<L.columns.length;o++)w.broadcast("columnsizechanged",{column:o,value:L.columns[o].width})}function q(){localStorage.setItem("table",JSON.stringify(L))}function F(){var e,t=Object(u["a"])(re());try{for(t.s();!(e=t.n()).done;){var o=e.value;I(o.row,o.column,{content:null})}}catch(n){t.e(n)}finally{t.f()}}function I(e,t,o){L.cells[e][t]=o,w.broadcast("cellchanged",{row:e,column:t,value:o})}function H(e,t){return L.cells[e]&&L.cells[e][t]||(L.cells[e]||(L.cells[e]=[]),L.cells[e][t]={content:null}),L.cells[e][t]}function X(e){L.rows.splice(e,0,x(L.default.row)),L.cells.splice(e,0,[]),w.broadcast("cellchanged",{predicate:function(t,o){return t>=e}});for(var t=e;t<L.rows.length;t++)w.broadcast("rowsizechanged",{row:t,value:L.rows[t].height})}function Y(e){L.rows=L.rows.filter((function(t,o){return o!=e})),L.cells=L.cells.filter((function(t,o){return o!=e})),w.broadcast("cellchanged",{predicate:function(t,o){return t>=e}});for(var t=e;t<L.rows.length;t++)w.broadcast("rowsizechanged",{row:t,value:L.rows[t].height})}function W(e){L.columns.splice(e,0,x(L.default.column));for(var t=0;t<L.rows.length;t++)L.cells[t].splice(e,0,{content:null});w.broadcast("cellchanged",{predicate:function(t,o){return o>=e}});for(var o=e;o<L.columns.length;o++)w.broadcast("columnsizechanged",{column:o,value:L.columns[o].width})}function G(e){L.columns=L.columns.filter((function(t,o){return o!=e}));for(var t=0;t<L.rows.length;t++)L.cells[t]=L.cells[t].filter((function(t,o){return o!=e}));w.broadcast("cellchanged",{predicate:function(t,o){return o>=e}});for(var o=e;o<L.columns.length;o++)w.broadcast("columnsizechanged",{column:o,value:L.columns[o].width})}function Q(e,t){P=e,M=t.target.parentElement.getBoundingClientRect().top}function Z(e,t){V=e,N=t.target.parentElement.getBoundingClientRect().left}function ee(e){if(-1!=P){var t=(e.clientY?e.clientY:e.touches[0].clientY)-M;t>5&&(L.rows[P].height=t),w.broadcast("rowsizechanged",{row:P,value:t})}if(-1!=V){var o=(e.clientX?e.clientX:e.touches[0].clientX)-N;o>5&&(L.columns[V].width=o),w.broadcast("columnsizechanged",{column:V,value:o})}}function te(e){P=-1,V=-1,j=!1}function oe(e){if(-1==P&&-1==V){if(e.ev.shiftKey)return e.move=!0,void ne(e);j=!0,e.ev.ctrlKey||e.ev.shiftKey||le(),R.push({row:e.row,column:e.column}),e.index=R.length,D.start=e,w.broadcast("selectionchanged",null)}}function ne(e){if(j||e.move){D.end=e;var t=Math.min(D.start.row,e.row),o=Math.max(D.start.row,e.row),n=Math.min(D.start.column,e.column),i=Math.max(D.start.column,e.column);le(D.start.index),t==o&&0==n&&i==L.columns.length-1?R.push({row:t}):n==i&&0==t&&o==L.rows.length-1?R.push({column:n}):R.push({startRow:t,endRow:o,startColumn:n,endColumn:i}),w.broadcast("selectionchanged",null)}}function ie(e){var t=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY);t&&j&&(t=t.__vue__,t&&("Cell"==t.$options._componentTag?ne({row:t.rowid,column:t.columnid,ev:e}):"RowHeader"==t.$options._componentTag?ne({row:t.rowid,column:L.columns.length-1,ev:e}):"ColumnHeader"==t.$options._componentTag&&ne({row:L.rows.length-1,column:t.columnid,ev:e})))}function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];while(R.length>e)R.pop();1==t&&w.broadcast("selectionchanged",null)}function se(){le(),oe({row:0,column:0,ev:{}}),R.push(null),j=!1,w.broadcast("selectionchanged",null)}function re(){var e,t=D.start,o=[],n=Object(u["a"])(R);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(null==i){for(var l=0;l<L.rows.length;l++)for(var s=0;s<L.columns.length;s++)o.push({row:l,column:s});break}if(void 0==i.column&&i.row==t.row)for(var r=0;r<L.columns.length;r++)o.push({row:t.row,column:r});else if(void 0==i.row&&i.column==t.column)for(var c=0;c<L.rows.length;c++)o.push({row:c,column:t.column});else if(void 0!=i.row&&void 0!=i.column)o.push({row:i.row,column:i.column});else for(var a=i.startRow;a<=i.endRow;a++)for(var d=i.startColumn;d<=i.endColumn;d++)o.push({row:a,column:d})}}catch(h){n.e(h)}finally{n.f()}return o}var ce={value:null,__value:null};function ae(e,t,o,n){L.cells[t][o]&&n.cells.push({row:t-e.row,column:o-e.column,cell:L.cells[t][o]})}function ue(){var e,t={cells:[]},o=D.start,n=Object(u["a"])(re());try{for(n.s();!(e=n.n()).done;){var i=e.value;ae(o,i.row,i.column,t)}}catch(l){n.e(l)}finally{n.f()}return t}function de(){ce.value=JSON.stringify(ue())}function he(e,t,o,n){while(L.rows.length<=e.row+t)L.rows.push(x(L.default.row));while(L.columns.length<=e.column+o)L.columns.push(x(L.default.column));L.cells[e.row+t]||(L.cells[e.row+t]=[]),I(e.row+t,e.column+o,n),R.push({row:e.row+t,column:e.column+o})}function fe(e){if(D.start&&e&&e.cells){le(0);var t,o=Object(u["a"])(e.cells);try{for(o.s();!(t=o.n()).done;){var n=t.value;he(D.start,n.row,n.column,n.cell)}}catch(i){o.e(i)}finally{o.f()}w.broadcast("selectionchanged",null)}}function me(){ce.value.then((function(e){fe(JSON.parse(e))}))}function pe(){de(),F()}navigator.clipboard?Object.defineProperty(ce,"value",{get:function(){return navigator.clipboard.readText()},set:function(e){navigator.clipboard.writeText(e).then(null,(function(){console.log("clipboard write failed")}))}}):Object.defineProperty(ce,"value",{get:function(){return new Promise((function(e,t){return e(ce.__value)}))},set:function(e){ce.__value=e}});var we={setViewer:B,getViewer:J,init:A,clearSelected:F,getCell:H,setCell:I,addRow:X,deleteRow:Y,addColumn:W,deleteColumn:G,rowResizeStart:Q,columnResizeStart:Z,resizeMove:ee,resizeEnd:te,selectionStart:oe,selectionMove:ne,clearSelection:le,selectAll:se,getSelectedCells:re,getCopyObj:ue,pasteFromObj:fe,copy:de,paste:me,cut:pe},ve={props:{rowid:{type:Number,required:!0}},methods:{mousedown:function(e){we.selectionStart({row:this.rowid,column:e.shiftKey?L.columns.length-1:0,ev:e}),we.selectionMove({row:this.rowid,column:L.columns.length-1,ev:e})},mousemove:function(e){we.selectionMove({row:this.rowid,column:L.columns.length-1,ev:e})},resizeStart:function(e){we.rowResizeStart(this.rowid,e)},rowsizechanged:function(e){e.row==this.rowid&&this.$refs.rowheader&&(this.$refs.rowheader.style.height=e.value+"px")}},created:function(){w.on("rowsizechanged",this.rowsizechanged)},mounted:function(){this.rowsizechanged({row:this.rowid,value:L.rows[this.rowid].height}),this.$refs.rowheader.addEventListener("touchstart",this.mousedown),this.$refs.header_resizer.addEventListener("touchstart",this.resizeStart)}},ge=ve,be=(o("4845"),o("2877")),ye=Object(be["a"])(ge,c,a,!1,null,"144af70f",null),_e=ye.exports,Ce=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"columnheader",staticClass:"table__header column-header",on:{mousedown:e.mousedown,mousemove:e.mousemove}},[e._v(" "+e._s(e.numToLetters(e.columnid))+" "),o("div",{ref:"header_resizer",staticClass:"column-header__resizer",on:{mousedown:e.resizeStart}})])},Se=[],xe={props:{columnid:{type:Number,required:!0}},methods:{numToLetters:k,mousedown:function(e){we.selectionStart({row:e.shiftKey?L.rows.length-1:0,column:this.columnid,ev:e}),we.selectionMove({row:L.rows.length-1,column:this.columnid,ev:e})},mousemove:function(e){we.selectionMove({row:L.rows.length-1,column:this.columnid,ev:e})},resizeStart:function(e){we.columnResizeStart(this.columnid,e)},columnsizechanged:function(e){e.column==this.columnid&&this.$refs.columnheader&&(this.$refs.columnheader.style.width=e.value+"px")}},created:function(){w.on("columnsizechanged",this.columnsizechanged)},mounted:function(){this.columnsizechanged({column:this.columnid,value:L.columns[this.columnid].width}),this.$refs.columnheader.addEventListener("touchstart",this.mousedown),this.$refs.header_resizer.addEventListener("touchstart",this.resizeStart)}},ke=xe,Ee=(o("270c"),Object(be["a"])(ke,Ce,Se,!1,null,"169104c3",null)),Te=Ee.exports,Oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"cellrow",staticClass:"wrapper"},e._l(e.table.columns,(function(t,n){return o("div",{key:n,staticClass:"cellrow"},[o("Cell",{attrs:{rowid:e.rowid,columnid:n,focused:e.focused},on:{cellEditingStart:function(t){return e.$emit("cellEditingStart",t)},cellEditingEnd:function(t){return e.$emit("cellEditingEnd",t)}}})],1)})),0)},$e=[],ze=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"editor",staticClass:"cell",class:{"cell-editing":e.isEditing},attrs:{contenteditable:e.isEditing,autofocus:""},domProps:{textContent:e._s(e.content)},on:{keydown:e.onKeyPress,blur:e.onUnfocus,dblclick:function(t){return e.onFocus(!1)},mousedown:e.onMouseDown,mousemove:e.onMouseMove}})},Re=[],De={props:{rowid:{type:Number,required:!0},columnid:{type:Number,required:!0},focused:{type:Boolean,required:!0}},data:function(){return{isEditing:!1,content:null,isTouchEnd:!1}},methods:{onMouseDown:function(e){this.isEditing||we.selectionStart({row:this.rowid,column:this.columnid,ev:e})},onMouseMove:function(e){we.selectionMove({row:this.rowid,column:this.columnid,ev:e})},onTouchStart:function(e){var t=this;this.isTouchEnd=!1;var o={top:we.getViewer().scrollTop,left:we.getViewer().scrollLeft};setTimeout((function(){var n=we.getViewer().scrollTop,i=we.getViewer().scrollLeft;1!=t.isTouchEnd&&o.top+10>=n&&o.top-10<=n&&o.left+10>=i&&o.left-10<=i&&(O(we.getViewer()),t.onMouseDown(e))}),500)},onTouchEnd:function(e){this.isTouchEnd=!0,$(we.getViewer())},onFocus:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isEditing=!0,R.unshift({row:this.rowid,column:this.columnid}),we.clearSelection(1,!0),this.$emit("cellEditingStart",{row:this.rowid,column:this.columnid}),setTimeout((function(){e.$refs.editor.focus(),T(e.$refs.editor,t)}),10)},onUnfocus:function(e){this.updateContent(),this.$emit("cellEditingEnd",{row:this.rowid,column:this.columnid}),this.isEditing=!1},onKeyPress:function(e){"Enter"!==e.code&&"Tab"!==e.code||e.shiftKey||(e.preventDefault(),this.updateContent(),this.isEditing=!1,"Enter"===e.code&&D.start.row+1<L.rows.length?D.start.row+=1:"Tab"===e.code&&D.start.column+1<L.columns.length&&(D.start.column+=1),R.unshift({row:D.start.row,column:D.start.column}),we.clearSelection(1,!0))},getCell:function(){return we.getCell(this.rowid,this.columnid)},globalKeyPress:function(e){this.focused&&!e.ctrlKey&&E(e.key)&&!this.isEditing&&this.isSelected(this.rowid,this.columnid)&&this.isStartCell()&&(this.content=this.content?this.content+e.key:e.key,this.onFocus(!0))},updateContent:function(){this.content=this.$refs.editor.innerText,this.getCell().content=this.content,w.broadcast("cellchanged",{})},isStartCell:function(){return D.start.row==this.rowid&&D.start.column==this.columnid},isSelected:function(e,t){if(e<0||e>=L.rows.length||t<0||t>=L.columns.length)return!1;var o,n=Object(u["a"])(R);try{for(n.s();!(o=n.n()).done;){var i=o.value;if(null==i)return!0;if(void 0==i.column&&i.row==e)return!0;if(void 0==i.row&&i.column==t)return!0;if(i.row==e&&i.column==t)return!0;if(i.startColumn<=t&&i.endColumn>=t&&i.startRow<=e&&i.endRow>=e)return!0}}catch(l){n.e(l)}finally{n.f()}return!1},onSelectionSelectionChanged:function(){if(this.$refs.editor){if(!this.isSelected(this.rowid,this.columnid))return this.$refs.editor.style.border=null,this.$refs.editor.style.boxSizing=null,void(this.$refs.editor.style.background=null);this.$refs.editor.style.boxSizing="border-box";var e="2px solid green";this.isSelected(this.rowid-1,this.columnid)?this.$refs.editor.style.borderTop=null:this.$refs.editor.style.borderTop=e,this.isSelected(this.rowid,this.columnid+1)?this.$refs.editor.style.borderRight=null:this.$refs.editor.style.borderRight=e,this.isSelected(this.rowid+1,this.columnid)?this.$refs.editor.style.borderBottom=null:this.$refs.editor.style.borderBottom=e,this.isSelected(this.rowid,this.columnid-1)?this.$refs.editor.style.borderLeft=null:this.$refs.editor.style.borderLeft=e,this.isStartCell()?this.$refs.editor.style.background=null:this.$refs.editor.style.background="lightgrey"}},columnsizechanged:function(e){e.column==this.columnid&&this.$refs.editor&&(this.$refs.editor.style.width=e.value+"px")},cellchanged:function(e){(e.row==this.rowid&&e.column==this.columnid||void 0!=e.predicate&&e.predicate(this.rowid,this.columnid))&&(this.content=e.value?e.value.content:this.getCell().content)},tablechanged:function(e){this.content=this.getCell().content}},created:function(){w.on("columnsizechanged",this.columnsizechanged),w.on("keydown",this.globalKeyPress),w.on("selectionchanged",this.onSelectionSelectionChanged),w.on("cellchanged",this.cellchanged),w.on("tablechanged",this.tablechanged)},mounted:function(){this.columnsizechanged({column:this.columnid,value:L.columns[this.columnid].width}),this.content=this.getCell().content,this.onSelectionSelectionChanged(),this.$refs.editor.addEventListener("touchstart",this.onTouchStart),this.$refs.editor.addEventListener("touchend",this.onTouchEnd)}},je=De,Le=(o("7439"),Object(be["a"])(je,ze,Re,!1,null,"891e7b90",null)),Pe=Le.exports,Me={components:{Cell:Pe},props:{rowid:{type:Number,required:!0},focused:{type:Boolean,required:!0}},data:function(){return{table:L}},methods:{rowsizechanged:function(e){e.row==this.rowid&&this.$refs.cellrow&&(this.$refs.cellrow.style.height=e.value+"px")}},created:function(){w.on("rowsizechanged",this.rowsizechanged)},mounted:function(){this.rowsizechanged({row:this.rowid,value:L.rows[this.rowid].height})}},Ve=Me,Ne=(o("356f"),Object(be["a"])(Ve,Oe,$e,!1,null,"3a4c9e48",null)),Ke=Ne.exports,Ae={components:{RowHeader:_e,ColumnHeader:Te,CellRow:Ke},data:function(){return{focused:!0,isCellEditing:!1,table:L}},methods:{selectAll:we.selectAll,contentScroll:function(e){this.$refs.column_headers_scroll.scrollTo(e.target.scrollLeft,0),this.$refs.row_headers_scroll.scrollTo(0,e.target.scrollTop)},select:function(e,t){e>=0&&e<L.rows.length&&t>=0&&t<L.columns.length&&(D.start={row:e,column:t},R.unshift({row:D.start.row,column:D.start.column}),we.clearSelection(1,!0))},keyPress:function(e){this.focused&&!this.isCellEditing&&(e.ctrlKey&&"KeyA"==e.code?we.selectAll():"Delete"==e.code?we.clearSelected():"ArrowUp"==e.code?e.ctrlKey?this.select(0,D.start.column):this.select(D.start.row-1,D.start.column):"ArrowDown"==e.code?e.ctrlKey?this.select(L.rows.length-1,D.start.column):this.select(D.start.row+1,D.start.column):"ArrowLeft"==e.code?e.ctrlKey?this.select(D.start.row,0):this.select(D.start.row,D.start.column-1):"ArrowRight"==e.code?e.ctrlKey?this.select(D.start.row,L.columns.length-1):this.select(D.start.row,D.start.column+1):e.ctrlKey&&(e.preventDefault(),"KeyI"==e.code?we.addRow(D.start.row):"KeyK"==e.code?we.addRow(D.start.row+1):"KeyJ"==e.code?we.addColumn(D.start.column):"KeyL"==e.code?we.addColumn(D.start.column+1):"KeyU"==e.code?we.deleteRow(D.start.row):"KeyO"==e.code&&we.deleteColumn(D.start.column)))},globalMouseUp:function(e){this.focused=z(e.target,[this.$refs.table])},handleCopy:function(e){this.focused&&!this.isCellEditing&&(e.preventDefault(),e.clipboardData.setData("text/plain",JSON.stringify(we.getCopyObj())))},handlePaste:function(e){this.focused&&!this.isCellEditing&&(e.preventDefault(),we.pasteFromObj(JSON.parse(e.clipboardData.getData("text/plain"))))},handleCut:function(e){this.focused&&!this.isCellEditing&&(this.handleCopy(e),we.clearSelected())}},created:function(){w.on("keydown",this.keyPress),w.on("mouseup",this.globalMouseUp),w.on("copy",this.handleCopy),w.on("paste",this.handlePaste),w.on("cut",this.handleCut)},mounted:function(){O(this.$refs.column_headers_scroll),O(this.$refs.row_headers_scroll),we.setViewer(this.$refs.table_viewer)}},Be=Ae,Je=(o("9c0b"),Object(be["a"])(Be,s,r,!1,null,"69ce9070",null)),Ue=Je.exports,qe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowed,expression:"isShowed"}],staticClass:"texttable"},[o("div",{staticClass:"texttable__wrapper",style:{"font-size":e.fontSize+"px"}},[o("div",{ref:"content",staticClass:"texttable__content"},[e._v(e._s(e.content))])]),o("div",{staticClass:"texttable__container"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedBorderType,expression:"selectedBorderType"}],staticClass:"texttable__select",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedBorderType=t.target.multiple?o:o[0]}}},e._l(e.borderTypes,(function(t,n){return o("option",{key:n,domProps:{value:t}},[e._v(e._s(t))])})),0),o("input",{directives:[{name:"model",rawName:"v-model",value:e.fontSize,expression:"fontSize"}],attrs:{type:"range",min:"1",max:"20"},domProps:{value:e.fontSize},on:{__r:function(t){e.fontSize=t.target.value}}})]),o("div",{staticClass:"texttable__container"},[o("div",{staticClass:"texttable__checkbox checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.useSelect,expression:"useSelect"}],attrs:{type:"checkbox",name:"useSelect"},domProps:{checked:Array.isArray(e.useSelect)?e._i(e.useSelect,null)>-1:e.useSelect},on:{change:function(t){var o=e.useSelect,n=t.target,i=!!n.checked;if(Array.isArray(o)){var l=null,s=e._i(o,l);n.checked?s<0&&(e.useSelect=o.concat([l])):s>-1&&(e.useSelect=o.slice(0,s).concat(o.slice(s+1)))}else e.useSelect=i}}}),o("label",{staticClass:"texttable__label",attrs:{for:"useSelect"}},[e._v("Use select")])]),o("div",{staticClass:"texttable__button button",on:{click:e.copy}},[e._v("Copy")]),o("div",{staticClass:"texttable__button button",on:{click:e.update}},[e._v("Update table")])])])},Fe=[],Ie="\n";function He(e){var t,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="";function i(e,t){for(var o=0;o<e;o++)n+=t}if(1==o){if(t={startRow:R[0].row,endRow:R[0].row,startColumn:R[0].column,endColumn:R[0].column},R.length>=2){var l=R[1];t=null==l?{startRow:0,endRow:L.rows.length-1,startColumn:0,endColumn:L.columns.length-1}:void 0==l.column&&void 0!=l.row?{startRow:l.row,endRow:l.row,startColumn:0,endColumn:L.columns.length-1}:void 0==l.row&&void 0!=l.column?{startRow:0,endRow:L.rows.length-1,startColumn:l.column,endColumn:l.column}:void 0!=l.row&&void 0!=l.column?{startRow:l.row,endRow:l.row,startColumn:l.column,endColumn:l.column}:l}}else t={startRow:0,endRow:L.rows.length-1,startColumn:0,endColumn:L.columns.length-1};for(var s=t.startRow;s<=t.endRow;s++){L.rows[s];for(var r=[],c=t.startColumn;c<=t.endColumn;c++){var a=L.columns[c],d=a.width/6.5,h=[],f=we.getCell(s,c);if(f.content){for(var m=[],p=0,w=0;w<f.content.length;w++){var v=f.content[w];m[p]||(m[p]="")," "==v||"\n"==v?m[p++]+=v:m[p]+=v}for(var g=0,b=0;b<m.length;b++){var y=m[b];if(y.length>d||-1!=y.indexOf("\n")){h[g]||(h[g]=""),-1!=y.indexOf("\n")&&(h[g]+y).length>d&&g++;var _,C=Object(u["a"])(y);try{for(C.s();!(_=C.n()).done;){var S=_.value;"\n"==S&&(h[++g]="\n",g++),h[g]||(h[g]=""),h[g].length>d&&g++,h[g]||(h[g]=""),"\n"!=S&&(h[g]+=S)}}catch(U){C.e(U)}finally{C.f()}}else h[g]||(h[g]=""),(h[g]+y).length>d&&g++,h[g]||(h[g]=""),h[g]+=y}}var x=[],k=0;c==t.endColumn?s==t.startRow?(c==t.startColumn?n+=e[2]:n+=e[3],i(d,e[0]),n+=e[4]+Ie):(c==t.startColumn?n+=e[5]:n+=e[6],i(d,e[0]),n+=e[7]+Ie):(c==t.startColumn?s==t.startRow?n+=e[2]:n+=e[5]:s==t.startRow?n+=e[3]:n+=e[6],i(d,e[0]));for(var E=0,T=h;E<T.length;E++){var O=T[E];x[k]||(x[k]=""),((x[k]+O).length>d+1||"\n"==O)&&k++,x[k]||(x[k]=""),"\n"!=O&&(x[k]+=O)}r[c-t.startColumn]={cell:x,columnwidth:d}}for(var $=0,z=0,D=r;z<D.length;z++){var j=D[z];j.cell.length>$&&($=j.cell.length)}for(var P=0;P<$;P++){var M,V=Object(u["a"])(r);try{for(V.s();!(M=V.n()).done;){var N=M.value,K=Math.ceil(($-N.cell.length)/2),A="";P>=K&&N.cell[P-K]&&(A=N.cell[P-K]);var B=Math.ceil((N.columnwidth-A.length)/2);n+=e[1],i(B,e[11]),n+=A,i(N.columnwidth-B-A.length,e[11])}}catch(U){V.e(U)}finally{V.f()}n+=e[1]+Ie}if(s==t.endRow)for(var J=0;J<r.length;J++)0==J?(n+=e[8],i(r[J].columnwidth,e[12]),J==r.length-1&&(n+=e[10])):J==r.length-1?(n+=e[9],i(r[J].columnwidth,e[12]),n+=e[10]):(n+=e[9],i(r[J].columnwidth,e[12]))}return n}var Xe={generateTextTable:He},Ye={};function We(){localStorage.setItem("config",JSON.stringify(Ye))}function Ge(){var e=JSON.parse(localStorage.getItem("config"));e&&(Ye=e),et()}function Qe(e,t){Ye[e]=t,et()}function Ze(e){return Ye[e]}function et(){w.broadcast("configchanged",Ye)}function tt(e){w.on("configchanged",e),e(Ye)}Ge(),w.on("configchanged",We);var ot={set:Qe,get:Ze,save:We,load:Ge,changed:et,onchanged:tt},nt={data:function(){var e=["─│┌┬┐├┼┤└┴┘ ─","═║╔╦╗╠╬╣╚╩╝ ═","─║╓╥╖╟╫╢╙╨╜ ─","═│╒╤╕╞╪╡╘╧╛ ═","▀██████████ ▄","─│╭┬╮├┼┤╰┴╯ ─","─ ───────── ─"," ││││││││││  "];return{isShowed:!1,content:null,fontSize:10,useSelect:!1,borderTypes:e,selectedBorderType:e[0]}},watch:{selectedBorderType:function(){ot.set("selectedBorderType",this.selectedBorderType),this.update()},fontSize:function(){ot.set("fontSize",this.fontSize)},useSelect:function(){ot.set("useSelect",this.useSelect),this.update()}},methods:{update:function(){this.isShowed&&(this.content=Xe.generateTextTable(this.selectedBorderType,this.useSelect))},copy:function(){T(this.$refs.content),document.execCommand("copy")}},created:function(){var e=this;w.on("cellchanged",this.update),ot.onchanged((function(t){e.isShowed=t.isTextTableViewerShowed,t.selectedBorderType&&(e.selectedBorderType=t.selectedBorderType),t.fontSize&&(e.fontSize=t.fontSize),t.useSelect&&(e.useSelect=t.useSelect)}))}},it=nt,lt=(o("a404"),Object(be["a"])(it,qe,Fe,!1,null,"7e8e06c0",null)),st=lt.exports,rt=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"overlay",staticClass:"overlay",class:{visible:e.value},on:{mousedown:e.closePopup}},[o("div",{staticClass:"overlay__popup"},[o(e.component,{tag:"component",attrs:{data:e.data},on:{close:function(t){return e.setVisibility(!1)}}})],1)])},ct=[],at={props:{value:{type:Boolean,required:!0}},data:function(){return{component:null,data:{}}},methods:{setVisibility:function(e){this.$emit("input",e)},closePopup:function(e){e.target==this.$refs.overlay&&this.setVisibility(!1)},openpopup:function(e){this.data=e.data,this.component=e.component,this.setVisibility(!0)}},created:function(){var e=this;w.on("openpopup",this.openpopup),w.on("closepopup",(function(){return e.setVisibility(!1)}))}},ut=at,dt=(o("7592"),Object(be["a"])(ut,rt,ct,!1,null,"c336e16a",null)),ht=dt.exports,ft=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"root",staticClass:"tools"},[o("div",{staticClass:"tools__container"},[o("DropdownButton",{attrs:{title:"Table",items:e.tabletab}}),o("DropdownButton",{attrs:{title:"Edit",items:e.edittab}}),o("DropdownButton",{attrs:{title:"Window",items:e.windowtab}})],1)])},mt=[],pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"button",staticClass:"dropdown-button",class:{opened:e.z__isOpened},on:{click:e.click}},[e._v(" "+e._s(e.title)+" "),n("ul",{ref:"dropdown",staticClass:"dropdown-button__dropdown"},e._l(e.items,(function(t,i){return n("li",{key:i,staticClass:"dropdown-button__row",class:{disabled:t.__isDisabled,delimiter:"delimiter"==t.type,default:!t.type||"default"==t.type||"checkbox"==t.type},on:{click:function(o){t.click(o),e.isOpened=!1}}},["checkbox"==t.type&&t.__isChecked?n("img",{staticClass:"dropdown-button__icon",attrs:{src:o("7bae")}}):e._e(),n("div",{staticClass:"dropdown-button__content"},[n("div",[e._v(e._s(t.label))]),n("div",{staticClass:"dropdown-button__hotkey"},[e._v(" "+e._s(t.hotkey?t.hotkey.join("+"):"")+" ")])])])})),0)])},wt=[],vt={props:{items:{type:Array,required:!0},title:{type:String,required:!0}},data:function(){return{z__isOpened:!1}},computed:{isOpened:{get:function(){return this.z__isOpened},set:function(e){if(this.z__isOpened=e,this.z__isOpened){var t,o=Object(u["a"])(this.items);try{for(o.s();!(t=o.n()).done;){var n=t.value;n.isDisabled&&(n.__isDisabled=n.isDisabled()),"checkbox"==n.type&&(n.__isChecked=n.isChecked())}}catch(i){o.e(i)}finally{o.f()}}}}},methods:{click:function(e){e.target==this.$refs.button&&(this.isOpened=!this.isOpened)},mousedown:function(e){var t=e.target;while(t!=this.$refs.dropdown&&t!=this.$refs.button&&t)t=t.parentElement;t||(this.isOpened=!1)}},created:function(){w.on("mousedown",this.mousedown)}},gt=vt,bt=(o("1c90"),Object(be["a"])(gt,pt,wt,!1,null,"3df0e418",null)),yt=bt.exports,_t=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"popup-body"},[o("div",{staticClass:"popup-body__text"},[e._v("Columns:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.columns,expression:"columns"}],staticClass:"popup-body__input",staticStyle:{"grid-column":"2","margin-right":"10px"},attrs:{type:"text"},domProps:{value:e.columns},on:{input:function(t){t.target.composing||(e.columns=t.target.value)}}}),o("div",{staticClass:"popup-body__text",staticStyle:{"grid-row":"2"}},[e._v(" Rows: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.rows,expression:"rows"}],staticClass:"popup-body__input",staticStyle:{"grid-column":"2","grid-row":"2","margin-right":"10px"},attrs:{type:"text"},domProps:{value:e.rows},on:{input:function(t){t.target.composing||(e.rows=t.target.value)}}}),o("div",{staticClass:"popup-body__text",staticStyle:{"grid-column":"3"}},[e._v("Column width:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.columnwidth,expression:"columnwidth"}],staticClass:"popup-body__input",staticStyle:{"grid-column":"4"},attrs:{type:"text"},domProps:{value:e.columnwidth},on:{input:function(t){t.target.composing||(e.columnwidth=t.target.value)}}}),o("div",{staticClass:"popup-body__text",staticStyle:{"grid-column":"3","grid-row":"2"}},[e._v(" Row height: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.rowheight,expression:"rowheight"}],staticClass:"popup-body__input",staticStyle:{"grid-column":"4","grid-row":"2"},attrs:{type:"text"},domProps:{value:e.rowheight},on:{input:function(t){t.target.composing||(e.rowheight=t.target.value)}}}),o("div",{staticClass:"popup-body__container"},[o("div",{staticClass:"button",staticStyle:{"margin-right":"10px"},on:{click:function(t){return e.$emit("close")}}},[e._v(" Cancel ")]),o("div",{staticClass:"button green",on:{click:e.create}},[e._v(" Create ")])])])},Ct=[],St={data:function(){return{columns:10,rows:10,columnwidth:100,rowheight:20}},methods:{create:function(){for(var e={default:{row:{height:this.rowheight},column:{width:this.columnwidth}},rows:[],columns:[],cells:[]},t=0;t<this.rows;t++)e.rows.push(x(e.default.row));for(var o=0;o<this.columns;o++)e.columns.push(x(e.default.column));w.broadcast("tablechanged",{table:e}),this.$emit("close")}}},xt=St,kt=Object(be["a"])(xt,_t,Ct,!1,null,null,null),Et=kt.exports,Tt=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"popup-body"},[o("div",{staticClass:"popup-body__text"},[e._v("Columns:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.columns,expression:"columns"}],staticClass:"popup-body__input",staticStyle:{"grid-column":"2","margin-right":"10px"},attrs:{type:"text"},domProps:{value:e.columns},on:{input:function(t){t.target.composing||(e.columns=t.target.value)}}}),o("div",{staticClass:"popup-body__text",staticStyle:{"grid-row":"2"}},[e._v(" Rows: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.rows,expression:"rows"}],staticClass:"popup-body__input",staticStyle:{"grid-column":"2","grid-row":"2","margin-right":"10px"},attrs:{type:"text"},domProps:{value:e.rows},on:{input:function(t){t.target.composing||(e.rows=t.target.value)}}}),o("div",{staticClass:"popup-body__container"},[o("div",{staticClass:"button",staticStyle:{"margin-right":"10px"},on:{click:function(t){return e.$emit("close")}}},[e._v(" Cancel ")]),o("div",{staticClass:"button green",on:{click:e.change}},[e._v(" Change ")])])])},Ot=[],$t={data:function(){return{rows:L.rows.length,columns:L.columns.length}},methods:{change:function(){while(this.rows<L.rows.length)L.rows.pop();while(this.rows>L.rows.length)L.rows.push(x(L.default.row));while(this.columns<L.columns.length)L.columns.pop();while(this.columns>L.columns.length)L.columns.push(x(L.default.column));this.$emit("close")}}},zt=$t,Rt=Object(be["a"])(zt,Tt,Ot,!1,null,null,null),Dt=Rt.exports;function jt(){Mt("data:application/json,"+encodeURIComponent(JSON.stringify(L)),"table.json")}var Lt=document.createElement("input");function Pt(){Lt.click()}function Mt(e,t){var o=document.createElement("a");o.download=t,o.href=e,document.body.appendChild(o),o.click(),document.body.removeChild(o)}Lt.type="file",Lt.onchange=function(e){var t=e.target.files[0],o=new FileReader;o.readAsText(t,"UTF-8"),o.onload=function(e){var t=JSON.parse(e.target.result);w.broadcast("tablechanged",{table:t})}};var Vt={save:jt,load:Pt},Nt={components:{DropdownButton:yt},data:function(){return{tabletab:[{label:"Create",click:function(){w.broadcast("openpopup",{component:Et})}},{label:"Open",click:function(){Vt.load()}},{label:"Save",click:function(){Vt.save()}},{label:"Change size",click:function(){w.broadcast("openpopup",{component:Dt})}},{type:"delimiter"},{label:"Add row after selected",click:function(){we.addRow(D.start.row+1)},hotkey:["Ctrl","K"],isDisabled:this.isDisabled},{label:"Add row before selected",click:function(){we.addRow(D.start.row)},hotkey:["Ctrl","I"],isDisabled:this.isDisabled},{label:"Delete selected row",click:function(){we.deleteRow(D.start.row)},hotkey:["Ctrl","U"],isDisabled:this.isDisabled},{type:"delimiter"},{label:"Add column after selected",click:function(){we.addColumn(D.start.column+1)},hotkey:["Ctrl","L"],isDisabled:this.isDisabled},{label:"Add column before selected",click:function(){we.addColumn(D.start.column)},hotkey:["Ctrl","J"],isDisabled:this.isDisabled},{label:"Delete selected column",click:function(){we.deleteColumn(D.start.column)},hotkey:["Ctrl","O"],isDisabled:this.isDisabled}],edittab:[{label:"Select all",click:function(){we.selectAll()},hotkey:["Ctrl","A"]},{type:"delimiter"},{label:"Clear",click:function(){we.clearSelected()},hotkey:["Delete"],isDisabled:this.isDisabled},{label:"Copy",click:function(){we.copy()},hotkey:["Ctrl","C"],isDisabled:this.isDisabled},{label:"Paste",click:function(){we.paste()},hotkey:["Ctrl","V"],isDisabled:this.isDisabled},{label:"Cut",click:function(){we.cut()},hotkey:["Ctrl","X"],isDisabled:this.isDisabled}],windowtab:[{type:"checkbox",label:"Show text table preview",click:function(){ot.set("isTextTableViewerShowed",!ot.get("isTextTableViewerShowed"))},isChecked:function(){return ot.get("isTextTableViewerShowed")}}]}},methods:{isDisabled:function(){return!D.start}}},Kt=Nt,At=(o("243a"),Object(be["a"])(Kt,ft,mt,!1,null,"0982986d",null)),Bt=At.exports,Jt={name:"App",components:{Table:Ue,TextTableViewer:st,Popup:ht,Tools:Bt},data:function(){return{isOverlayVisible:!1,isTextTableViewerShowed:!1}},computed:{tableStyle:function(){var e=this.isTextTableViewerShowed?"calc(100% - 400px)":"100%";return{width:e}}},created:function(){var e=this;we.init(),ot.onchanged((function(t){return e.isTextTableViewerShowed=t.isTextTableViewerShowed}))},destroyed:function(){w.clear()}},Ut=Jt,qt=(o("5c0b"),Object(be["a"])(Ut,i,l,!1,null,null,null)),Ft=qt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(Ft)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"65b6":function(e,t,o){},7439:function(e,t,o){"use strict";o("0fff")},7592:function(e,t,o){"use strict";o("1a54")},"7bae":function(e,t,o){e.exports=o.p+"img/check.796c6ed0.svg"},"9c0b":function(e,t,o){"use strict";o("0dec")},"9c0c":function(e,t,o){},a404:function(e,t,o){"use strict";o("e284")},ac65:function(e,t,o){},e284:function(e,t,o){},e9f5:function(e,t,o){},ebd7:function(e,t,o){}});
//# sourceMappingURL=app.11489aed.js.map