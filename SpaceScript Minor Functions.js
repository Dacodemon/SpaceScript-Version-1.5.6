function getVariable(name){
    for(var i=0;i<=variables.length-1;i++){
        if(name===variables[i][0]){
            return variables[i][1]
        }
    }
}

function targetElementX(id,variable){
document.getElementById(id).onmousemove=function(e){
for(var i=0;i<variables.length;i++){
if(variables[i][0]===variable){
variables[i][0]=e.offsetX
}else{
variables[varControl]=[variable,e.offsetX]
}
return e.offsetX
}
}
}
function targetElementY(id,variable){
document.getElementById(id).onmousemove=function(e){
for(var i=0;i<variables.length;i++){
if(variables[i][0]===variable){
variables[i][0]=e.offsetY
}else{
variables[varControl]=[variable,e.offsetX]
}
return e.offsetY
}
}
}
var x=0
var y=0 
document.onmousemove=function(e){
x=e.offsetX
y=e.offsetY
variables[1]=["mouseX",x]
variables[2]=["mouseY",y]
}

function accessLocalStorage(name,variable){
if(localStorage.getItem(name)!==null){
for(var i=0;i<variables.length;i++){
if(variables[i][0]===name){
variables[i]=[variable,localStoage.getItem(name)]
}else{
variables[varControl]=[variable,localStorage.getItem(name)]
}
}
}else{
console.error("The item with the name of '"+name+"' does not exist please make sure that you entered the name correctly")
}
}
function pinToLocalStorage(name,value){
localStorage.setItem(name,value)
}
function accessSessionStorage(name,varName){
if(sessionStorage.getItem(name)!==null){
for(var i=0;i<variables.length;i++){
if(variables[i][0]===varName){
variables[i]=[varName,sessionStorage.getItem(name)]
}else{
variables[varControl]=[varName,sessionStorage.getItem(name)]
varControl++
}
}
}else{
console.error("The item with the name of '"+name+"' does not exist please make sure you entered the name correctly at accessSessionStorage param1")
}
}
function pinToSessionStorage(name,value){
sessionStorage.setItem(name,value)
}

function grabElementById(id,callback){
var code=callback.split("_") 
for(var i=0;i<=code.length-1;i++){
if(code[i]==="changeTextColor"){
document.getElementById(id).style.color=code[i+1]
}
if(code[i]==="changeBackgroundColor"){
document.getElementById(id).style.backgroundColor=code[i+1]
}
if(code[i]==="changeFontSize"){
document.getElementById(id).style.fontSize=code[i+1]
}
if(code[i]==="changeFont"){
document.getElementById(id).style.fontFamily=code[i+1]
}
if(code[i]==="changeText"){
console.error("You have to use the changeText function to change the text of the element due to this functions syntax")
}
}

}
function square(id,x,y,w,h){
    var ctx=document.getElementById(id).getContext("2d")
var X=parseInt(x)
var Y=parseInt(y)
var W=parseInt(w)
var H=parseInt(h)
console.log(X,Y,W,H)
try{
ctx.fillRect(X,Y,W,W)
   }catch(e){
var error=e.split(":")
console.error("%c SpaceScript Internal Error:"+error[1],"background-color:rgb(0,0,100)")
}
    
}
function createFunctionWithParams(name,p1,p2){
functions[functionControl]=[name,p1,p2]
   functionControl++
}
function createCanvas(id,width,height,to,el){
    var canvas=document.createElement("canvas")
    canvas.width=width 
    canvas.height=height 
    canvas.style.width=width+"px" 
    canvas.style.height=height+"px" 
    canvas.id=id
    if(to==="body"||to==="body\n"){
        document.body.appendChild(canvas)
    }
    if(to==="toElementById"||to==="toElementById\n"){
        document.getElementById(el).append(canvas)
    }
var ctx=document.getElementById(id).getContext("2d")
ctx.fillStyle="white"
ctx.fillRect(0,0,width,height)
}
function bezeirVertex(id,x1,y1,x2,y2,curveX1,curveY1){
    if(isNaN(x1)===false){
        x1=parseInt(x1)
    }
    if(isNaN(x2)===false){
        x2=parseInt(x2)
    }
    if(isNaN(y1)===false){
        y1=parseInt(y1)
    }
    if(isNaN(y2)===false){
        y2=parseInt(y2)
    }
    if(isNaN(curveX1)===false){
        curveX1=parseInt(curveX1)
    }
    if(isNaN(curveY1)===false){
        curveY1=parseInt(curveY1)
    }
    if(isNaN(x1)===true){
        x1=getVariable(x1)
    }
    if(isNaN(y1)===true){
        y1=getVariable(y1)
    }
    if(isNaN(x2)===true){
        x2=getVariable(x2)
    }
    if(isNaN(curveX1)===true){
        curveX1=getVariable(curveX1)
    }
    if(isNaN(curveY1)===true){
        curveY1=getVariable(curveY1)
    }
var ctx=document.getElementById(id).getContext("2d")
if(y1>y2){
ctx.beginPath()
ctx.lineTo(x1,y1)
ctx.arc(x2,y2,y1-y2,curveX1,curveY1,true)
ctx.lineTo(x2,y2)
ctx.fill()
ctx.stroke()
}else{
    ctx.beginPath()
ctx.lineTo(x1,y1)
ctx.arc(x2,y2,y2-y1,curveX1,curveY1,true)
ctx.lineTo(x2,y2)
ctx.fill()
ctx.stroke()
}
}
function add1(varName){
    
    for(var i=0;i<variables.length;i++){
        if(variables[i][0]===varName){
         variables[i][1]=parseInt(getVariable(varName))+1    
        }
    }
   
}
function subtract1(varName){
     var variable=getVariable(varName)
    variable--
    for(var i=0;i<variables.length;i++){
        if(variables[i][0]===varName){
            variables[i][1]=variable
        }
    }
}
function divide(n1,n2,name){
    var digit1,digit2
    if(isNaN(n1)===false){
digit1=parseInt(n1)
    }else{
        digit1=parseInt(getVariable(n1))
    }
    if(isNaN(n2)===false){
        digit2=parseInt(n2)
    }else{
        digit2=parseInt(getVariable(n2))
    }
    for(var i=0;i<variables.length;i++){
        if(variables[i][0]===name){
            variables[i][1]=digit1/digit2
        }
    }
    return digit1/digit2
}
function multiply(n1,n2,name){
    var digit1,digit2
    if(isNaN(n1)===false){
digit1=parseInt(n1)
    }else{
        digit1=parseInt(getVariable(n1))
    }
    if(isNaN(n2)===false){
        digit2=parseInt(n2)
    }else{
        digit2=parseInt(getVariable(n2))
    }
    for(var i=0;i<variables.length;i++){
        if(variables[i][0]===name){
            variables[i][1]=digit1*digit2
        }
    }
    return digit1*digit2
}
function add(n1,n2,name){
    var digit1,digit2
    
    if(isNaN(n1)===false){
digit1=parseInt(n1)
    }else{
        if(typeof(getVariable(n1))!=="undefined"){
        digit1=parseInt(getVariable(n1))
        }
        if(typeof(getVariable(n1))==="undefined"){
            digit1=parseFloat(n1)
        }
    }
    if(isNaN(n2)===false){
        digit2=parseFloat(n2)
    }else{
        if(typeof(getVariable(n2))!=="undefined"){
        digit2=parseInt(getVariable(n2))
        }
        if(typeof(getVariable(n2))==="undefined"){
            digit2=parseFloat(n2)
        }
    }
    
    
    redefine(name,digit1+digit2)
    
}
function subtract(n1,n2,name){
     
    var digit1,digit2
    if(isNaN(n1)===false){
digit1=parseInt(n1)
    }else{
        if(typeof(getVariable(n1))!=="undefined"){
        digit1=parseInt(getVariable(n1))
        }
        if(typeof(getVariable(n1))==="undefined"){
            digit1=parseFloat(n1)
        }
    }
    if(isNaN(n2)===false){
        digit2=parseFloat(n2)
    }else{
        if(typeof(getVariable(n2))!=="undefined"){
        digit2=parseInt(getVariable(n2))
        }
        if(typeof(getVariable(n2))==="undefined"){
            digit2=parseFloat(n2)
        }
    }
    
    
    redefine(name,digit1-digit2)
  
}
function noStroke(id){
    var ctx=document.getElementById(id).getContext("2d")
    ctx.strokeStyle="rgba(0,0,0,0)"
}
function invisible(id){
    var ctx=document.getElementById(id).getContext("2d")
    ctx.fillStyle="rgba(0,0,0,0)"
}
function begin(id){
    var ctx=document.getElementById(id).getContext("2d")
    ctx.beginPath()
}
function end(id){
    var ctx=document.getElementById(id).getContext("2d")
    ctx.stroke()
    ctx.fill()
}
function startLine(id,x1,y1){
    var x,y
    if(isNaN(x1)){
x=getVariable(x1)
    }else{
        x=x1
    }
    if(isNaN(y1)){
        y=getVariable(y1)
    }else{
        y=y1
    }
    var ctx=document.getElementById(id).getContext("2d")
    ctx.moveTo(x,y)
}
function lineToward(id,x1,y1){
    var x,y
    if(isNaN(x1)){
x=getVariable(x1)
    }else{
        x=x1
    }
    if(isNaN(y1)){
        y=getVariable(y1)
    }else{
        y=y1
    }
   try{ var ctx=document.getElementById(id).getContext("2d")}catch(e){
console.error("%c SpaceScript Internal Error: "+e,"background-color:rgb(0,0,100)")
console.error("No Element With The Id Of "+id+" Found")
}
   try{ ctx.lineTo(x,y)}catch(e){
console.error("%c SpaceScript Internal Error:"+e,"background-color:rgb(0,0,100)")
}
}
function createFunction(name,callback){
functions[functionControl]=[name,callback]
functionControl=functionControl+1
}

function create(tag,id,text,to,el){
var e=document.createElement(tag) 
try{e.id=id}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")} 
try{e.innerText=text}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")} 
if(to!=="body"){
try{document.getElementById(el).appendChild(e)}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
}
if(to==="body"){
try{document.body.appendChild(e)}catch(e){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
}
}


function redefine(name,newVal){
for(var i=0;i<=variables.length-1;i++){
    if(name===variables[i][0]){
variables[i][1]=newVal
    }
}
}
function createArray(name,value){
    var array=value.split(",")
        variables[varControl]=[name,array]
}
function getArrayValue(name,blockNum){
    
    for(var i=0;i<=variables.length-1;i++){
        
 if(variables[i][0]===name){
    if(blockNum!=="FULL"){
        var b=parseInt(blockNum) 
        
    }
    return variables[i][1][b+1]
 }       
}
}
function innerColor(id,color){
try{var ctx=document.getElementById(id).getContext("2d")}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
try{ctx.fillStyle=color}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
}
function outerColor(id,color){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
    try{ctx.strokeStyle=color}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
}
function triangle(id,x1,y1,x2,y2,x3,y3){
    console.log(x1,y1,x2,y2,x3,y3)
    try{var ctx=document.getElementById(id).getContext("2d")}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")
console.error("canvas With The ID Of "+id+" Not Found")
}
    document.getElementById(id)
    if(isNaN(x1)===true){
    x1=parseInt(getVariable(x1))
    }
    if(isNaN(y1)===true){
      y1=parseInt(getVariable(y1))
        }
        if(isNaN(x2)===true){
            x2=parseInt(getVariable(x2))
            }
            if(isNaN(y2)===true){
                y2=parseInt(getVariable(y2))
                }
                if(isNaN(x3)===true){
                    x3=parseInt(getVariable(x3))
                }
                if(isNaN(y3)===true){
                    y3=parseInt(getVariable(y3))
                }
   try{ ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.lineTo(x3,y3)
    ctx.lineTo(x1,y1)
    ctx.fill()
    ctx.stroke()
    }catch(e){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
    }
    function addAttribute(id,attrib,value){
       
        document.getElementById(id).setAttribute(attrib,value)
       
}
function declare(name,value){
variables[varControl]=[name,value]
varControl++
}
function consoleLog(value,value2){
var text=""
if(value!=="TYPEVAR"){
var txt=value.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){txt[i]=""}
text=text+" "+txt[i]
}
}
console.log(text)
}
function consoleWarn(value,value2){
var text=""
if(value!=="TYPEVAR"){
var txt=value.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=value2.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
console.warn(text)
}
function consoleInfo(value1,value2){
var text=""
if(value1!=="undefined"){
var txt=value1.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
console.info(text)
}
function consoleError(value1,value2){
var text=""
if(value1!=="undefined"){
var txt=value1.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
console.error(text)
}
function consoleAssert(value1,value2){
var text=""
if(value1!=="undefined"){
var txt=value1.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
console.assert(text)
}
function consoleDebug(value1,value2){
var text=""
if(value1!=="undefined"){
var txt=value1.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
console.debug(text)
}
function consoleNumberCount(value1,value2){
var text=""
if(value1!=="undefined"){
var txt=value1.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
console.count(text)
}
function consoleCountReset(value1,value2){
var text=""
if(value1!=="undefined"){
var txt=value1.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
console.countReset(text)
}
function consoleDebug(value1,value2){
var text=""
if(value1!=="undefined"){
var txt=value1.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
console.debug(text)
}
function consoleInfo(value1,value2){
var text=""
if(value1!=="undefined"){
var txt=value1.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
console.info(text)
}
function notify(value1,value2){
var text=""
if(value1!=="undefined"){
var txt=value1.split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}else{
var txt=getVariable(value2).split("_")
for(var i=0;i<txt.length;i++){
if(typeof(txt[i])==="undefined"){
txt[i]=""
}
text=text+" "+txt[i]
}
}
alert(text)
}
function threeDSquare(id,x,y,w,h,colorFromR,colorFromG,colorFromB,colorToR,colorToG,colorToB,transition,ifVar1){
var X,Y,W,H,cfr,cfg,cfb,ctr,ctg,ctb,t
var Rto="="
var Gto="="
var Bto="="
var used=[]
var clr=[]
var ctx=document.getElementById(id).getContext("2d")
if(x!=="TYPEVAR"){
X=parseInt(x)
}else{
X=parseInt(getVariable(y))
used[0]=true
}
if(y!=="TYPEVAR"){
if(typeof(used[0])==="undefined"){
Y=parseInt(y)
}else{
if(w!=="TYPEVAR"){
Y=parseInt(w)
used[1]=true
}else{
console.error("Error SpaceScript was expecting a variable name but you tried to define another variable at 3dSquare ")
}
}
}

if(isNaN(w)){
if(y!=="TYPEVAR"){
if(w==="TYPEVAR"){
if(typeof(used[1])==="undefined"){
W=parseInt(getVariable(h))
used[2]=true
}
}else{
console.error("Unexpected text passed to 3dSquare at param 4")
}
}
}else{
if(typeof(used[1])==="undefined"){
W=parseInt(w)
}
}
if(isNaN(h) && typeof(used[2])==="undefined"){
if(h==="TYPEVAR"){
H=parseInt(getVariable(colorFromR))
used[3]=true
}else{
console.error("Unexpected text passed to 3dSquare at param 5")
}
}else{
if(typeof(used[2])==="undefined"){
H=parseInt(h)
}
}
if(isNaN(colorFromR) && typeof(used[3])==="undefined"){
if(colorFromR==="TYPEVAR"){
cfr=parseInt(getVariable(colorFromG))
used[4]=true
}else{
console.error("Unexpected text passed to 3dSquare at param 6")
}
}else{
cfr=parseInt(colorFromR)
}
if(isNaN(colorFromG) && typeof(used[4])==="undefined"){
if(colorFromG==="TYPEVAR"){
cfg=parseInt(getVariable(colorFromB))
used[5]=true
}else{
console.error("Unexpected text passed to 3dSquare at param 7")
}
}else{

cfg=parseInt(colorFromG)

}

if(isNaN(colorFromB) && typeof(used[5])==="undefined"){
if(colorFromB==="TYPEVAR"){
cfb=parseInt(getVariable(colorToR))
used[6]=true
}else{
console.error("Unexpected text passed to 3dSquare at param 8")
}
}else{

cfb=parseInt(colorFromB)

}

if(isNaN(colorToR) && typeof(used[6])==="undefined"){
if(colorToR==="TYPEVAR"){
ctr=parseInt(getVariable(colorToG))
used[7]=true
}else{
console.error("Unexpected text passed to 3dSquare at param 9")
}
}else{

ctr=parseInt(colorToR)

}

if(isNaN(colorToG) && typeof(used[7])==="undefined"){
if(h==="TYPEVAR"){
ctg=parseInt(getVariable(colorToB))
}else{
console.error("Unexpected text passed to 3dSquare at param 10")
}
}else{

ctg=parseInt(colorToG)
}

if(isNaN(colorToB) && typeof(used[8])==="undefined"){
if(colorToB==="TYPEVAR"){
ctb=parseInt(getVariable(transition))
used[9]=true
}else{
console.error("Unexpected text passed to 3dSquare at param 11")
}
}else{
ctb=parseInt(colorToB)
}
if(isNaN(transition) && typeof(used[9])==="undefined"){
if(transition==="TYPEVAR"){
t=parseInt(getVariable(ifVar1))
}else{
console.error("Unexpected text passed to 3dSquare at param 11")
}
}else{
t=parseInt(transition)
}
try{
if(cfr<ctr){
Rto="+"
}
if(cfr===ctr){
Rto="="
}
if(cfr>ctr){
Rto="-"
}
if(cfg<ctg){
Gto="+"
}
if(cfg===ctg){
Gto="="
}
if(cfg>ctg){
Gto="-"
}
if(cfb<ctb){
Bto="+"
}
if(cfb>ctb){
Bto="-"
}
if(ctb===cfb){
Bto="="
}
clr=[cfr,cfg,cfb]
var m=1/W/H 
m=m*W/t
try{
var color=ctx.getImageData(X,Y,W,H)
for(var i=0;i<color.data.length;i++){
if(Rto==="+"){
clr[0]=clr[0]+m
color.data[i*4]=clr[0]
}if(Rto==="-"){
clr[0]=clr[0]-m
color.data[i*4]=clr[0]
}
}
}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
for(var i=0;i<color.data.length/4;i++){
if(Gto==="+"){
clr[1]=clr[1]+m
color.data[i*4+1]=clr[1]
}
if(Gto==="-"){
clr[1]=clr[1]-m
color.data[i*4+1]=clr[1]
}
}
for(var i=0;i<color.data.length;i++){
if(Bto==="+"){
clr[2]=clr[2]+m
color.data[i*4+2]=clr[2]
}if(Bto==="-"){
clr[2]=clr[2]-m
color.data[i*4+2]=clr[2]
}
}
if(Gto==="="){
for(var i=0;i<color.data.length;i++){
color.data[i*4+1]=clr[1]
}
}
if(Rto==="="){
for(var i=0;i<color.data.length;i++){
color.data[i*4]=clr[0]
}
}
if(Bto==="="){
for(var i=0;i<color.data.length;i++){
color.data[i*4+2]=clr[2]
}
}
ctx.putImageData(color,X,Y)
}catch(e){
console.error("%cSpaceScript Internal Error: "+e,"background-color:rgb(0,0,100);")
}
}

function forLoop(tempVar,beginAt,stopAt,transition,extra,extra2){
var used=[]
var b,stop,t
if(beginAt==="TYPEVAR"){
b=parseInt(stopAt)
used[0]=1
}else{
b=parseInt(beginAt)
}
if(stopAt==="TYPEVAR"){
if(typeof(used[1])!=="undefined"){
stop=getVariable(transition)
}else{
stop=parseInt(stopAt)
}
}else{
if(transition==="TYPEVAR"){
stop=getVariable(extra)
used[2]=1
used[1]=1
}else{
stop=parseInt(transition)
used[1]=1
}
}
if(transition==="TYPEVAR"){
if(typeof(used[1])==="undefined"){
t=parseInt(getVariable(extra))
used[2]=78781927817389
}
}else{
if(typeof(used[1])==="undefined"){
t=parseInt(t)
}else{
if(extra==="TYPEVAR"){
t=getVariable(extra2)
used[2]=829382910 
used[3]=9892810829038
}else{
t=parseInt(extra)
}
}
}
console.log(start,stop,t)
for(var i=start;i<stop;i+=t){
console.log(i)
}

}
function textToCanvas(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11){
try{var ctx=document.getElementById(p1).getContext("2d")}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")
console.error("canvas With The ID Of "+p1+" Is Not Found")
}
var txt,x,y,w,h
var text="" 
var used=[0]
if(p2!=="TYPEVAR"){
txt=p2
}else{
txt=getVariable(p3)
used[0]=1
}
if(used[0]===0){
if(p3!=="TYPEVAR"){
x=parseInt(p3)
}else{
x=parseInt(getVariable(p4))
used[1]=1
}
}else{
if(p3!=="TYPEVAR"){
txt=p3
}else{
txt=getVariable(p4)
used[2]=1
}
}
if(typeof(used[1])==="undefined"){
if(p3!=="TYPEVAR"){
y=parseInt(p4)
}else{
y=parseInt(getVariable(p5))
used[2]=1
}
}else{
if(p5!=="TYPEVAR"){
y=parseInt(p5)
used[2]=1
}else{
y=parseInt(getVariable(p6))
used[3]=1
}
}
if(typeof(used[2])==="undefined"){
if(p5!=="TYPEVAR"){
w=parseInt(p5)
}else{
w=parseInt(getVariable(p6))
used[3]=1
}
}else{
if(p6!=="TYPEVAR"){
w=parseInt(p6)
used[3]=1
}else{
w=parseInt(getVariable(p7))
used[4]=1
}
}
if(typeof(used[3])==="undefined"){
if(p6!=="TYPEVAR"){
h=parseInt(p6)
}else{
h=parseInt(getVariable(p7))
}
}else{
if(p7!=="TYPEVAR"){
h=parseInt(p7)
}else{
h=parseInt(getVariable(p8))
}
}
var t=txt.split("_")
for(var i=0;i<t.length;i++){
if(typeof(t[i])==="undefined"){
t[i]=""
}
text=text+" "+t[i]
}
try{ctx.fillText(text,x,y,w,h)}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
try{ctx.strokeText(text,x,y,w,h)}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
}
function canvasTextFont(id,font,fontSize){
try{var ctx=document.getElementById(id).getContext("2d")}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")}
var size=fontSize+"px"
try{ctx.font=size+" "+font}catch(r){console.error("%c SpaceScript Internal Error: "+r,"background-color:rgb(0,0,100)")} 
}
function createPopUp(url,name,width,height,html){
var att='width="'+width+'",height="'+height+'"'
var h=""
if(url==="CUSTOMPAGE"){
var c=window.open("about:blank",name,att)
var text=html.split("_")
for(var i=0;i<text.length;i++){
if(typeof(text[i])==="undefined"){
text[i]=""
}
h=h+" "+text[i]
}
c.document.write(h)
}else{
var c=window.open(url,name,att)
}
}
function createAudio(id,src,controls,to,el){
var audio=document.createElement("audio")
audio.src=src 
if(controls==="true"){
audio.controls=true
}
if(to==="body"){
document.body.appendChild(audio)
}
if(to==="toElementById"){
document.getElementById(el).appendChild(audio)
}
}
function Play(id){
document.getElementById(id).play()
}
function createVideo(id,src,controls,to,el,width,height){
var video=document.createElement("video")
video.src=src  
video.id=id
if(controls==="true"){
video.controls=true
}
video.style.width=el
video.style.height=width
if(to==="body"){
document.body.appendChild(video)
}
if(to==="toElementById"){
document.getElementById(el).appendChild(video)
}
}
function navigate(id,time){
if(isNaN(time)===false){
var t=time*1000 
document.getElementById(id).currentFloat=t
}else{
var t=parseFloat(getVariable(time))*1000
document.getElementById(id).currentTime=t
}
}
function Stop(id){
document.getElementById(id).stop()
}
function Pause(id){
document.getElementById(id).pause()
}
