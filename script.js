let a = Number(prompt('რამდენი წლის ხარ?'));
if(a<12 && a>=0){
    alert('თქვენ არ გაქვთ დასწრების უფლება');
}else if(a>12){
    alert('თქვენ შეგიძლიათ დაესწროთ ფილმს');
}else{
    alert('შეიყვანეთ ასაკი');
}
