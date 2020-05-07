
// for(var i=0;i<=10;i++){
//     console.log(i)
// }


// var n=1000000000;
// var count=0;

// if(n!=0){
//     if(n<0){
//         n=n*(-1);
//     }
    
//     while(n>=1){
//         n/=10;
//         count++;
//     }
//     console.log(count);
// }
// else{
//     console.log("0-dan ferqli eded daxil edin");
// }

// var name1="Elgun"
// var name2="Tural"
// var name3="Ferid"

// var student=["Elgun","Ferid","Huseynaga","Tural","Ulvi"];

// console.log(student.length);
// console.log(student[3]);

// comment - ctrl+? ve ya ctrl+k+c - chixarmaqchun ctrl+k+u

// for(var i=0; i<student.length; i++){
//     console.log(student[i])
// }

// for(var i=0; i<student.length; i++){
//     if(student[i]=="Huseynaga"){
//         console.log(i)
//     }
// }

// var name="Tural";
// var surname="Mehdiyev";
// var age=18;

// var name1="Elgun";
// var surname1="Guluzade";
// var age1=27;

// var stu1={
//     name:"Tural",
//     surname:"Mehdiyev",
//     age:18
// }

// var stu2={
//     name:"Elgun",
//     surname:"Guluzade",
//     age:27
// }

// // stu2.age="test"

// console.log(stu1.name+stu1.surname+stu1.age)

// console.log(stu2.name+" "+stu2.surname+" "+stu2.age)


var n=-2;
var m=2;

if(n<m){
    for(var i=n;i<=m;i++)
    {
        if(i%2==0 && i>0)
        {
            console.log(i);
        }
    }
}
else{
    console.log("zehmet olmasa duzgun daxil edin")
}