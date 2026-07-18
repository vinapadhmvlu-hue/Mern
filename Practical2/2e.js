//Creating an Object 
let student ={ 
 rollNo:112, 
 name:"Vinayak Padhy", 
 marks: 90, 
}; 
console.log("Original Object:"); 
console.log(student); 
// 2. Accessing Properties 
console.log("\nAccessing Properties: "); 
console.log("Name:", student.name); 
console.log("Marks:",student.marks); 
//Updating Properties 
student.marks = 95; 
console.log("\nAfter Updating Marks:"); 
console.log(student); 
//4.Adding New Properties 
student.city = "Mumbai"; 
console.log("\nAfter Adding City:"); 
console.log(student); 
//5. Deleting a Property
delete student.rollNo; 
console.log("\nAfter Deleting Roll No:"); 
console.log(student); 
console.log("vinayak"); 
