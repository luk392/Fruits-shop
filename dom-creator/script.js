var createNodes = function() {
    let result = document.getElementById('creator-result');
    let select = document.getElementById('tag-select').value;
    let txt = document.getElementById('inptxt').value;
    let node = document.createElement(select);
    node.textContent = txt;
    
    result.appendChild(node);    
}

var createClass = function() {
    let cls_name = document.getElementById('cls-crt-name').value;
    
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.cssClass { color: #F00; }';
    document.getElementsByTagName('head')[0].appendChild(style);

    document.getElementById('someElementId').className = 'cssClass';
}

var createData = function(){
    createNodes();
    createClass();
}

let inpcrt = document.getElementById('inpcrt');
inpcrt.addEventListener("click", createData, false);