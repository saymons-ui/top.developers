// script.js

function autoExpand(element) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight <= 300 ? element.scrollHeight + "px" : "300px");
}
