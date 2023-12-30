canvas=document.getElementById("myCanvas")

ctx=canvas.getContext("2d")

mouseEvent="empty"

var lastx,lasty 

color="black"
width=2

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouseEvent="mousedown"
    color=document.getElementById("input").value
}



canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
   currentx=e.clientX-canvas.offsetLeft
   currenty=e.clientY-canvas.offsetTop

   if(mouseEvent=="mousedown"){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width
    ctx.moveTo(lastx,lasty)
    ctx.lineTo(currentx,currenty)
    ctx.stroke()
   }
   lastx=currentx
   lasty=currenty
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
 }