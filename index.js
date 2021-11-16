// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "123 Abc St.",
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    let newEmployee = {...employeeObj};
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employeeObj;
};

function deleteFromEmployeeByKey(employeeObj, key) {
    let employeeWithDelete = {...employeeObj};
    delete employeeWithDelete[key];
    return employeeWithDelete;
};

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key];
    return employeeObj;
};