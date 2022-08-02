var alpha=['a','b','c','d','e','f','g','h','i','j',
'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var letters=[]
var i=0
function create(){
    i=0
    letters=[]
    var qntd=document.getElementById('qntd').value
    while(i<qntd){
        var r=Math.floor(Math.random()*25)
        letters.push(alpha[r])
        document.getElementById('word').innerHTML=letters
        i++
    }
}