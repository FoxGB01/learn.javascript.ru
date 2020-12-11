'use strict'

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// alert(user.name);

/////////////////////////
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    };
    return true;
};
// alert(isEmpty(user))

//////////////////////////
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = 0;

function keySum(obj) {
    for (let key in obj) {
        sum += obj[key];
    };
};

keySum(salaries);
// alert(sum);

////////////////////////
function multiplyNumeric(obj) {
    checKeys:
    for (let key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] = obj[key] * 2;
        };
    };
};

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
// alert(menu.height);