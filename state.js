const s1={nome:'Alabama',p:'USA'}
const s2={nome:'Alaska',p:'USA'}
const s3={nome:'Arizona',p:'USA'}
const s4={nome:'California',p:'USA'}
const s5={nome:'Kansas',p:'USA'}
const s6={nome:'Carolina do Norte',p:'USA'}
const s7={nome:'Carolina do Sul',p:'USA'}
const s8={nome:'Nebraska',p:'USA'}
const s9={nome:'Colorado',p:'USA'}
const s10={nome:'Nova Jersey',p:'USA'}
const s11={nome:'Nova Iorque',p:'USA'}
const s12={nome:'Novo México',p:'USA'}
const s13={nome:'Oklahoma',p:'USA'}
const s14={nome:'Flórida',p:'USA'}
const s15={nome:'Ohio',p:'USA'}
const s16={nome:'Georgia',p:'USA'}
const s17={nome:'Oregon',p:'USA'}
const s18={nome:'Pensilvânia',p:'USA'}
const s19={nome:'Texas',p:'USA'}
const s20={nome:'Virginia',p:'USA'}
const s21={nome:'Washington',p:'USA'}
const s22={nome:'Massachussets',p:'USA'}
const s23={nome:'Michigan',p:'USA'}
const s24={nome:'Minessota',p:'USA'}
const s25={nome:'Mississipi',p:'USA'}
const s26={nome:'Montana',p:'USA'}
const s27={nome:'Minas Gerais',p:'BR'}
const s28={nome:'Bahia',p:'BR'}
const s29={nome:'Ceará',p:'BR'}
const s30={nome:'São Paulo',p:'BR'}
const s31={nome:'Amazonas',p:'BR'}
const s32={nome:'Rio de Janeiro',p:'BR'}
const s33={nome:'Piauí',p:'BR'}
const s34={nome:'Tocantins',p:'BR'}
const s35={nome:'Alagoas',p:'BR'}

var states=[s1,s22,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,
s15,s16,s17,s18,s19,s20,s21,s22,s23,s24,s25,s26,s27,s28,s29,
s30,s31,s32,s33,s34,s35]

function create(){
    var r=Math.floor(Math.random()*35)
    document.getElementById('word').innerHTML=states[r].nome
    document.getElementById('country').innerHTML=states[r].p
}