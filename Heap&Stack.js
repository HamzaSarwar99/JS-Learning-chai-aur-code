// Heap and Stack
 
// all the primitive data types in js use stack memory which means that
// when we change the value the original value will not change but it's
// copy will be changed 


//example of stack memory

// let idOne= 12432;
// let idTwo = idOne
// idTwo= 86054
// console.log(idOne);
// console.log(idTwo)

// on the other hand all the non primitive data types in js use heap 
// memory which means that if we change the value of these data types
// it will change the original value 

// example of heap memory

let myObj = {
    name: 'hamza',
    email:'hamza@test.com'
}

let myObj2 = myObj;
myObj2.email = "hamza@yahoo.com"
console.log(myObj.email)
console.log(myObj2.email);
