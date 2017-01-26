console.log('I am running');

var stylesheetContent = document.getElementById("stylesheet_contents");
var stylesheetCol = document.querySelector(".sheets .col");

var myCodeMirror = CodeMirror(stylesheetCol, {
    mode:  "css",
    theme: "dracula",
    tabSize: 2,
    autoCloseBrackets: true,
    styleActiveLine: true,
    scrollbarStyle: "overlay",
    gutters: ["CodeMirror-lint-markers"],
    lint: true
});

myCodeMirror.doc.setValue(stylesheetContent.value);

myCodeMirror.on("change", function(cm, change) {
    stylesheetContent.value = cm.getValue();
});