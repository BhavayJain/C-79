var arraystudent=[];

function submit(){
  var name1=  document.getElementById("student_1").value;

  var name2=  document.getElementById("student_2").value;

  var name3=  document.getElementById("student_3").value;

  var name4=  document.getElementById("student_4").value;

  arraystudent.push(name1);

  arraystudent.push(name2);

  arraystudent.push(name3);

  arraystudent.push(name4);

console.log(arraystudent);
  
document.getElementById("display").innerHTML=arraystudent;

document.getElementById("sub").style.display="none";

document.getElementById("sort").style.display="inline-block";


}

function sort1(){

    arraystudent.sort();

    console.log(arraystudents);

    document.getElementById("display").innerHTML=arraystudent;


}

