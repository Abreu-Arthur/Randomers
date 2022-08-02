var dt=new Date()
var d=dt.getDate()
var m=dt.getMonth()+1
var y=dt.getFullYear()
if(d<10){
    d='0'+d
}
if(m<10){
    m='0'+m
}
document.getElementById('word').innerHTML=d+'/'+m+'/'+y
function create(){
    var m=Math.floor(Math.random()*12)+1
    if (m==2){
        var d=Math.floor(Math.random()*28)+1
    }else if(m==1||m==3||m==5||m==7||m==8||m==10||m==12){
        var d=Math.floor(Math.random()*31)+1
    }else{
        var d=Math.floor(Math.random()*30)+1
    }
    if(d<10){
        d='0'+d
    }
    if(m<10){
        m='0'+m
    }
    var y=Math.floor(Math.random()*3000)
    document.getElementById('word').innerHTML=d+'/'+m+'/'+y
}