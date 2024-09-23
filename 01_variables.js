const accountId = 23456
let accountEmail = 'hamza@test.com'
var accountPassword = '23456789'//always avoid to use this because 
//there is a problem with this that it don't have any control over 
// block level scope
accountCity = 'Manserha'//do not use this 
let accountState;//this will give undefined

// accountId = 67890
// console.log(accountId);// this is not allowed as the accountId is a constant
//and we can update the value of constants
//TypeError: Assignment to constant variable.

// accountEmail = 'test@test.com'//this is valid and will output this email
// // because we can update the let and this is recommended to use
// console.log(accountEmail)


accountPassword = '12345'
console.table([accountPassword, accountCity, accountEmail, accountId, accountState])
// .table is a shortcut method for outputting more than one variables

