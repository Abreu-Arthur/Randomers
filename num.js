var num=[0,1,2,3,4,5,6,7,8,9]
var nums=[]
var i=0
function create(){
    i=0
    nums=[]
    var qntd=document.getElementById('qntd').value
    while(i<qntd){
        var r=Math.floor(Math.random()*9)
        nums.push(num[r])
        document.getElementById('word').innerHTML=nums
        i++
    }
}