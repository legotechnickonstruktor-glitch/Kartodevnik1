const PW='admin123';
function login(){if(document.getElementById('pw').value===PW){document.getElementById('pnl').style.display='block';ld()}else{alert('Неверно!')}}
function ld(){const d=init();const c=document.getElementById('c2');const s=document.getElementById('s2');
c.innerHTML='<option>Класс</option>';Object.keys(d.classes).forEach(n=>{c.innerHTML+=`<option>${n}</option>`});
s.innerHTML='<option>Предмет</option>';d.subjects.forEach(n=>{s.innerHTML+=`<option>${n}</option>`})}
function ac(){const n=document.getElementById('nc').value.trim();if(!n)return;
const d=init();d.classes[n]={hw:{}};save(d);alert('Добавлено!');ld()}
function as(){const n=document.getElementById('ns').value.trim();if(!n)return;
const d=init();d.subjects.push(n);save(d);alert('Добавлено!');ld()}
function ah(){const c=document.getElementById('c2').value;const s=document.getElementById('s2').value;
const h=document.getElementById('hw').value.trim();const a=document.getElementById('au').value.trim()||'Админ';
if(!c||!s||!h)return;const d=init();if(!d.classes[c].hw)d.classes[c].hw={};
d.classes[c].hw[s]={text:h,author:a,date:new Date().toLocaleDateString()};save(d);alert('ДЗ добавлено!');
document.getElementById('hw').value=''}