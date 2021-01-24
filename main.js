var names [];
function submit() {
var n1=document.getElementById("s1").value;
var n2=document.getElementById("s2").value;
var n3=document.getElementById("s3").value;
var n4=document.getElementById("s4").value;
names.push(n1);
names.push(n2);
names.push(n3);
names.push(n4);
document.getElementById("names").innerHTML=names;
document.getElementById("button1").style.display="none";
document.getElementById("sorting").style.display="inline-block";
console.log(names);
}
function sorting() {
    names.sort();
    document.getElementById("names").innerHTML=names;
}