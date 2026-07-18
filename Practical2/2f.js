//Array of objects 
let students = [ 
 { 
 rollNo: 103, 
 name: "Suyash", 
 marks: 90, 
 }, 
 { 
 rollNo: 104, 
 name: "Rahul", 
 marks: 85, 
 }, 
 { 
 rollNo: 105, 
 name: "Priya", 
 marks: 95, 
 } 
];
//Finction to display student details 
function display(s) 
{ 
 console.log("student details"); 
 console.log(`--------------------`);  for(let stud of s) 
 { 
 console.log(`Roll No: , ${stud.rollNo}`);  console.log(`Name: , ${stud.name}`);  console.log(`Marks: , ${stud.marks}`);  console.log(`--------------------`);  } 
} 
//Function Call 
display(students); 
console.log("vinayak"); 
