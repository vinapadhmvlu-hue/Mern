function genBill(product, quantity, price){ 
 let total = quantity*price; 
 let Gst = total*0.18;
 console.log("Name of product = ", product);  console.log("quantity of product = ",quantity);  console.log("Price of product = ", price);  console.log("Total Bill = ", total); 
 console.log("Bill After GST = ", Gst);   
} 
genBill("Mobile",2,50000); 
console.log("vinayak"); 
