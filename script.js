var img=document.querySelector("#box")
var car=document.querySelector("#car")
var dil=document.querySelector("#box #like")
document.addEventListener("mousemove",function(v){
    car.style.left=`${v.x}px`
    car.style.top=`${v.y}px`

})
img.addEventListener("dblclick",function(){
var x=setInterval(function(){
    dil.style.scale=2
},10)
setTimeout(function(){
    var x=setInterval(function(){
        dil.style.scale=2
        dil.style.color="red"
    },10)
    
},300)
setTimeout(function(){
    var y=setInterval(function(){
        dil.style.color="rgba(200, 39, 120, 0.667)"
        dil.style.scale=0
    },10)
    
},600)

setTimeout(function(){

clearInterval(x,y)

},2000)
})