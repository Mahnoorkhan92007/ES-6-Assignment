
function variableScopes() {

    var name = "I am a 'var' variable, also called Global.";
    let Lastname = "I am a 'let' variable, scoped to the block.";
    const fullname = "I am a 'const' variable, scoped to the block and cannot be reassigned.";

    return `${name} <br> ${Lastname} <br> ${fullname}`
}

document.write(variableScopes());



//2
function createMultiplier(multiplier) {


    function double(num) {
        return multiplier * num;

    }
    function triple(num) {
        return multiplier * num;

    }
    return { double, triple };
}




const multiplierFunctions = createMultiplier(5);
document.write(multiplierFunctions.double(3));
document.write(multiplierFunctions.triple(2));


//3

function objects(name, age, country = "Saudia", city = "Jeddah") {

    return `Hello,<br> my name is ${name}.<br> I am ${age} years old, <br>from ${city}, ${country}.<br>`;
}

document.write(objects());

//4

function calculatetotal(price, ...discount) {
    discount.forEach(function (discounts) {
        price -= discounts;//har discount ko - karkai 1 jagah jama kia jaye

    })
    return price;

}

document.write(calculatetotal(100, 15, 20, 10));


//5
let calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a , b) => {
        return a - b;
    }

}

document.write(calculator.add(3, 6 )+`<br>`);
document.write(calculator.subtract(6, 3));


//6
const book1 = [

    { title: "Lucy Grey", author: "William Whatson", yearPublished: 1998 },
    { title: "My bank account", author: "william crook", yearPublished: 1900 },
    { title: "Mystery World", author: "john Dsena", yearPublished: 2010 }
]
function iteration() {
    for (const copy of book1) {   ////copy single object ko consider karai ga
        document.write(`The copy '${copy.title}' was written by ${copy.author} and published in ${copy.yearPublished}. ,<br>`);

    }
}

iteration();


// 7

function* idGenerator() {
    let id = 1;
    while (true) {    //while (condition){ code }
        yield id++;
    }
}

const generateId = idGenerator();
console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);
console.log(generateId.next().value);  


//9

let students = {
    name: "Mahnoor",
    age: 18,
    grade: "A+",
    subjects: ["Math", "eng", "bio", "chem", "urdu"]

}

for (const x in students) {

   console.log(`${x}: ${students[x]}`);

}

//10

let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(function(numbers) {
    return numbers * numbers;
});

console.log("Original Array: ", numbers);
console.log("Squared Array: ", squaredNumbers);


//11

function operate(num1, num2, callback) {
    return callback(num1, num2);

}
function add(num1, num2) {

    return num1 + num2
}
function subtract(num1, num2) {


    return num1 - num2
}

let resultAdd = operate(5, 6, add);
let resultSubtract = operate(2, 8, subtract);

console.log(resultAdd);
console.log(resultSubtract);


//12

setTimeout(function(){
    console.log('Hello World');
}, 3000)

//13

function currenttime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let timeString = `${hours}:${minutes}:${seconds}`;

    console.log("Current Time Is:", timeString);
}


let set = setInterval(currenttime, 2000);


setTimeout(function () {
    clearInterval(set);
    console.log("Time Is Stop Now");
}, 10000);


//14
function fetchData() {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Data Received');
        }, 2000);

    });

}

fetchData()
    .then(function (data) {
        console.log(data);// run the code aagar success hua 
    })
    .catch(function (error) {
        console.log('Error:', error);
    });



//15

async function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Data received!');
        }, 2000);
    });
}

async function getData() {
    try {
        const response = await fetchData();
        console.log(response);
    } catch (error) {
        console.log('Error:', error);
    }
}

getData();  


//16

function acceptions (base , exponent){ // base raise to a power

    return base ** exponent;
}
console.log(acceptions (4,2));
console.log(acceptions (2,3)); // 2 * 2 * 2 = 8
console.log(acceptions (5,2));
console.log(acceptions (6,9));
console.log(acceptions (-10,6));
console.log(acceptions (8,2));
console.log(acceptions (5,9));


//17

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

speciesSound() {// speciesSound is a method inside the Animal class.
        if (this.species === 'Dog') {
            return 'Woof!';
        } else if (this.species === 'Cat') {
            return 'Meow!';
        } else if (this.species === 'Cow') {
            return 'Moo!';
        } else {
            return 'Unknown sound';
        }
    }

    speak() {//speak() are methods 
        console.log(`${this.name} says ${this.speciesSound()}`);//this is used inside the class methods to refer to the properties and other methods
    }

}

const dog = new Animal('Dog', 'Dog'); // first name second species
const cat = new Animal('Cat', 'Cat');
const cow = new Animal('Cow', 'Cow');

dog.speak();  
cat.speak(); 
cow.speak();  


//18

function checkEvenOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";  //It is a shorthand for if-else statements. ? example condition ? value_if_true : value_if_false;

  }//remainder 0 aata hai to even
console.log(checkEvenOdd(4));  
console.log(checkEvenOdd(7));  
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(15));

//19

let user = {
    name: "Mahnoor Khan",
    address: {
        city: "Karachi"
    }
};

//(?.) Iska matlab hai ke agar wo property nahi hai, to error nahi aaye ga, sirf undefined return hoga.
//?? for default value
function logCity(user) {
    console.log(user.address?.city ?? "City not available");
}
logCity(user);
logCity({});
logCity({ address: {} });





