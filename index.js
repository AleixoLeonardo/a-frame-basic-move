

function moveBoxToUp() {
    var boxEl = document.getElementById("roda_tras");
    var position = boxEl.getAttribute('position');
    position.y = position.y + 0.5;
    boxEl.setAttribute('position', position);
}

function moveBoxToRight() {
    var boxEl = document.getElementById("roda_tras");
    var position = boxEl.getAttribute('position');
    position.x = position.x - 0.5;
    boxEl.setAttribute('position', position);
}

function moveBoxToLeft() {
    var boxEl = document.getElementById("roda_tras");
    var position = boxEl.getAttribute('position');
    position.x = position.x + 0.5;
    boxEl.setAttribute('position', position);
}

function moveZRight() {
    var boxEl = document.getElementById("roda_tras");
    var position = boxEl.getAttribute('position');
    position.z = position.z + 0.5;
    boxEl.setAttribute('position', position);
}

function moveZLeft() {
    var boxEl = document.getElementById("roda_tras");
    var position = boxEl.getAttribute('position');
    position.z = position.z - 0.5;
    boxEl.setAttribute('position', position);
}

function moveBoxToDown() {
    var boxEl = document.getElementById("roda_tras");
    var position = boxEl.getAttribute('position');
    position.y = position.y - 0.5;
    if (position.y >= 0.5) {
        boxEl.setAttribute('position', position);
    }
}

function check() {
    var pRoda = document.getElementById("roda_tras").getAttribute("position");
    var roda = document.getElementById("roda_tras");
    if (compareData(pRoda.x, 2) && compareData(pRoda.y, 1) && compareData(pRoda.z, -9)) {
        roda.setAttribute("color", 'green');
    } else {
        roda.setAttribute("color", 'red');
    }

}



function compareData(d1, d2) {
    return ("" + d1) == ("" + d2);
}
document.onkeydown = function (e) {
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