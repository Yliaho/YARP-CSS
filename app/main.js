//core
import CodeMirror from '../codemirror/lib/codemirror';
import '../codemirror/mode/css/css';
import '../codemirror/lib/codemirror.css';
//themes
import '../codemirror/theme/dracula.css';
//addons
import '../codemirror/addon/edit/closebrackets.js';
import '../codemirror/addon/dialog/dialog.js';
import '../codemirror/addon/dialog/dialog.css';
import '../codemirror/addon/search/search.js';
import '../codemirror/addon/search/match-highlighter.js';
import '../codemirror/addon/scroll/simplescrollbars.js';
import '../codemirror/addon/scroll/simplescrollbars.css';

var stylesheetCol         = document.querySelector(".sheets .col");
var originalTextArea      = document.querySelector(".sheets .col textarea");
var stylesheetContent     = document.getElementById("stylesheet_contents");
var imagesPreview         = document.getElementById('images');

var myCodeMirror = CodeMirror(stylesheetCol, {
    mode: "css",
    theme: "dracula",
    autoCloseBrackets: true,
    tabSize: 2,
    scrollbarStyle: 'overlay'
});

myCodeMirror.tabIndex = -1;

//set codemirror value to match stylesheet_contents on load
myCodeMirror.doc.setValue(stylesheetContent.value);

//watch for changes on codemirror - update the stylesheet_contents value
myCodeMirror.on("change", function (cm, change) {
    stylesheetContent.value = cm.getValue();
    console.log(myCodeMirror.getCursor());
});

function scrollToCM() {
    myCodeMirror.focus();
    console.log(cmEditor.pos.top);
}

function pasteButton(node, imgUrl) {
    var button;
    var perse = node;
    (function() {
        button = document.createElement("A");
            button.innerHTML = 'paste url';
            button.className += "paste-url";
            perse.querySelector(".description").appendChild(button);
        button.addEventListener('click', function(e) {
            e.preventDefault();
            myCodeMirror.doc.replaceSelection(imgUrl.textContent)
            scrollToCM();
        })
    }());
}

var imgPreviewPanel = document.querySelector('.image-preview-list');

function loopImgPreviewNode() {
    var imgPreviewNode = Array.from(imgPreviewPanel.getElementsByTagName('LI'));
    for (var i = 0; i < imgPreviewNode.length; i++) {
        var imgUrl = imgPreviewNode[i].querySelector('.img-url');
        pasteButton(imgPreviewNode[i], imgUrl);
    }
} 

loopImgPreviewNode();

var toggleOriginalSheet = document.createElement("button");
    toggleOriginalSheet.innerHTML = "show/hide textarea";
    var toggle = true;
    stylesheetCol.insertAdjacentElement('afterbegin', toggleOriginalSheet);

toggleOriginalSheet.addEventListener('click', function(){
    if (toggle == false) {
        originalTextArea.style.display = 'none';
        toggle = true;
    } else {
        originalTextArea.style.display = 'block';
        toggle = false;
    }
})

document.querySelector('.sheets .buttons').insertAdjacentElement('afterend', imagesPreview);