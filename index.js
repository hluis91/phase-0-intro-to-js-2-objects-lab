// Write your solution in this file!

const employee = {
    name : 'Jose',
    streetAddress: '123 Fake St.'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
      };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newKey = {...employee[key]}
    delete newKey[key]
    return newKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}












































































// const employee = {
//     name: "Jose",
//     streetAddress: "123 Fake Street"
// };

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const newObj = {...employee};
//     newObj[key] = value;
//     return newObj
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee
// }

// function deleteFromEmployeeByKey(employee, key) {
//     const newKey = {...employee[key]}
//     delete newKey[key]
//     return newKey;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key]
//     return employee
// }











































































































