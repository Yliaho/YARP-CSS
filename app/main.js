import CodeMirror from '../codemirror/lib/codemirror';
import '../codemirror/mode/css/css';
import '../codemirror/lib/codemirror.css';
import '../codemirror/theme/dracula.css';

console.log('I am running');

var stylesheetCol = document.querySelector(".sheets .col");
var stylesheetContent = document.getElementById("stylesheet_contents");

var myCodeMirror = CodeMirror(stylesheetCol, {
    mode:  "css",
    theme: "dracula"
});

myCodeMirror.doc.setValue(stylesheetContent.value);

myCodeMirror.on("change", function(cm, change) {
    stylesheetContent.value = cm.getValue();
});
