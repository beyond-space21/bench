function getCentre(ele,axis) {
    if(axis==='y')
    ele.style.top = (window.innerHeight - ele.offsetHeight) / 2 + 'px'
    else if(axis==='x')
    ele.style.left = (window.innerWidth - ele.offsetWidth) / 2 + 'px'
    else{
    ele.style.top = (window.innerHeight - ele.offsetHeight) / 2 + 'px'
    ele.style.left = (window.innerWidth - ele.offsetWidth) / 2 + 'px'
    }
}

function cent(cent,elm) {
    var a=(cent/100)*elm.innerHeight
    var b=(cent/100)*elm.innerWidth
    return {h:a,w:b}
 }
 
 function pixtoint(elm){
     elm=elm.split('')
     elm.splice(elm.length-2,elm.length-1)
     return(parseInt(elm.join('')));
 }
