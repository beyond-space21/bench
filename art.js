function getCentre(ele, axis) {
    if (axis === 'y')
        ele.style.marginTop = (window.innerHeight - ele.offsetHeight) / 2 + 'px'
    else if (axis === 'x')
        ele.style.marginLeft = (window.innerWidth - ele.offsetWidth) / 2 + 'px'
    else {
        ele.style.marginTop = (window.innerHeight - ele.offsetHeight) / 2 + 'px'
        ele.style.marginLeft = (window.innerWidth - ele.offsetWidth) / 2 + 'px'
    }
}

function cent(cent, elm) {
    var a = (cent / 100) * elm.offsetHeight
    var b = (cent / 100) * elm.offsetWidth
    return { h: a, w: b }
}

function pixtoint(elm) {
    elm = elm.split('')
    elm.splice(elm.length - 2, elm.length - 1)
    return (parseInt(elm.join('')));
}
function map(x, in_min, in_max, out_min, out_max) {//https://arduino.stackexchange.com/questions/32148/explanation-of-the-formula-of-the-map-funtion
    return parseInt((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}
