

function moveBoxToUp(){
    var boxEl = document.getElementById("caixa-1");
    var position = boxEl.getAttribute('position');
    position.y = position.y + 0.5;
    boxEl.setAttribute('position', position);
}

function moveBoxToRight(){
    var boxEl = document.getElementById("caixa-1");
    var position = boxEl.getAttribute('position');
    position.x = position.x - 0.5;
    boxEl.setAttribute('position', position);
}

function moveBoxToLeft(){
    var boxEl = document.getElementById("caixa-1");
    var position = boxEl.getAttribute('position');
    position.x = position.x + 0.5;
    boxEl.setAttribute('position', position);
}

function moveZRight(){
    var boxEl = document.getElementById("caixa-1");
    var position = boxEl.getAttribute('position');
    position.z = position.z + 0.5;
    boxEl.setAttribute('position', position);
}

function moveZLeft(){
    var boxEl = document.getElementById("caixa-1");
    var position = boxEl.getAttribute('position');
    position.z = position.z - 0.5;
    boxEl.setAttribute('position', position);
}

function moveBoxToDown(){
    var boxEl = document.getElementById("caixa-1");
    var position = boxEl.getAttribute('position');
    position.y = position.y - 0.5;
    if (position.y >= 0.5){
        boxEl.setAttribute('position', position);
    }
}

function check(){
    var pBox1 = document.getElementById("caixa-1").getAttribute("position");
    var box1 = document.getElementById("caixa-1");
    var pBox2 = document.getElementById("caixa-2").getAttribute("position");
    if (compareData(pBox1.x, pBox2.x)
        && compareData(pBox1.z, pBox2.z)
            && (pBox2.y + 1) == pBox1.y){
                box1.setAttribute("color", 'green');
    }else{
        box1.setAttribute("color", 'blue');
    }
}



function compareData(d1, d2){
    return ("" + d1) == ("" + d2);
}
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 100:
            moveBoxToRight();
            break;
        case 104:
            moveZLeft();
            break;
        case 102:
            moveBoxToLeft();
            break;
        case 98:
            moveZRight();
            break;
        case 38:
            moveBoxToUp();
            break;
        case 40:
            moveBoxToDown();
            break;
    }
    check()
};