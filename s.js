const K='kd';function init(){let d=localStorage.getItem(K);
if(!d){d={classes:{},subjects:['Математика','Русский','Английский','История']};save(d)}else{d=JSON.parse(d)}return d}
function save(d){localStorage.setItem(K,JSON.stringify(d))}
function load(){const d=init();const c=document.getElementById('cls');const s=document.getElementById('sbj');
if(c){c.innerHTML='<option>Выбери класс</option>';Object.keys(d.classes).forEach(n=>{c.innerHTML+=`<option>${n}</option>`})}
if(s){s.innerHTML='<option>Выбери предмет</option>';d.subjects.forEach(n=>{s.innerHTML+=`<option>${n}</option>`})}}
function get(){const c=document.getElementById('cls').value;const s=document.getElementById('sbj').value;
const d=init();const r=document.getElementById('res');const t=document.getElementById('txt');
if(d.classes[c]&&d.classes[c].hw&&d.classes[c].hw[s]){t.textContent=d.classes[c].hw[s].text;r.style.display='block'}
else{t.textContent='Не добавлено';r.style.display='block'}}
window.onload=load;