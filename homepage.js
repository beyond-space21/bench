var content=document.getElementsByClassName('content')
var navcard=document.getElementsByClassName('nav-card')
var certCard=document.getElementsByClassName('Cert-card')

exe()
window.onresize = function(){
    exe()
}
function exe(){
        content[0].style.width= map(81,0,100,0,window.innerWidth)-20+'px'        
        navcard[0].style.width= map(17,0,100,0,window.innerWidth)-20+'px'
        card(30,250,content[0].offsetWidth)
}


function card(margin,MinWidth,ScreenRes){
    console.log(margin,MinWidth,ScreenRes);
     a=ScreenRes/(MinWidth+margin*2)
     b=ScreenRes%(MinWidth+margin*2)
     c=b/(parseInt(a))
    console.log(a,b,c);
    for(var i=0;i<certCard.length;i++){
    certCard[i].style.margin=margin+'px'
    certCard[i].style.width=MinWidth+c+'px'    
    certCard[i].style.height=map(50,0,100,0,MinWidth+c)+'px'
    }
}

function map(x, in_min, in_max, out_min, out_max) {
    return parseInt((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}
function pixtoint(elm) {
    elm = elm.split('')
    elm.splice(elm.length - 2, elm.length - 1)
    return (parseInt(elm.join('')));
}

// var nav = [
//     { icon: 'imgs/test.svg',content: 'test'},
//     { icon: 'imgs/verify certificate.svg',content: 'verify'},
//     { icon: 'imgs/event.svg',content: 'event'},
//     { icon: 'imgs/certificate.svg',content: 'certificate'},
//     { icon: 'imgs/home.svg',content: 'home'}]

//     document.addEventListener('click',function(e){
//         if(e.target.className==='nav-icon'){
//             navigate(e.target.id)
//         }
//     })

// function navigate(to) {
//     document.getElementById(to).src = nav[4].icon
//     document.getElementById(nav[4].content).style.display='none'
//     document.getElementById(nav[to].content).style.display='block'
//     var a=nav[to]
//     nav[to]=nav[4]
//     nav[4]=a
// } 
document.addEventListener('click',function(e){
   document.getElementsByClassName('nav-card')[0].innerHTML=e.target.offsetWidth
})