function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(5)(5)(5));

function factorial(n) {
  if (n < 0 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

function foreach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

foreach([1, 2, 4, 5], function (num) {
  console.log(num * num);
});

const student = {
  name: "John Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

console.log(student.address);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());

const Siddhesh = {
  firstName: "Siddhesh",
  lastName: "Gundal",
  age: 23,
  fullName: function () {
    return `${this.lastName} ${this.firstName}`;
  },
};

console.log(Siddhesh.fullName());

const fruits = ["Apple", "Banana", "Pineapple"];
console.log(fruits[0]);

const nums = [1, 2, 3];
nums.push(4);

console.log(nums);
nums.pop();
console.log(nums);

const squared = nums.map((nums) => {
  return nums * nums;
});

console.log(squared);

const ages = [18, 20, 15, 31];
const canDrink = ages.filter((age) => {
  return age >= 18;
});

console.log(canDrink);

const prices = [100, 500, 1500, 200];
const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total);

//Destructor objects
const user = {
  name1: "John Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

const { name1, age, address } = user;
console.log(name1);

//Destructions array
const fruits1 = ["Apple", "Banana", "Pineapple"];
const [fruit1, fruit3, fruit2] = fruits1;
console.log(fruit3, fruit2, fruit1);

//Spread operator
const arr = [1, 2, 5];

const newArr = [...arr, 4, 5];
console.log(newArr);

//object spread parameter
const obj = { b: 2, c: 3 };
const obj1 = { b: 5, c: 4 };
const obj2 = { a: 0, ...obj, ...obj1, g: 6 };
console.log(obj2);

//Rest operations

const sum = function (...numbers) {
  return numbers.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

// function sum (...numbers) {
//   return numbers.reduce((sum, num) => {
//     return sum + num;
//   }, 0);
// }

console.log(sum(1, 2, 3, 4, 5));

const factorial1 = function (n) 
{
  return n.reduce(function (sqr, numb) {
    return sqr * numb;
  },1);
};

console.log(factorial1([1, 2, 3, 4, 5, 6, 7]));

const students = [
  { name: "John", age: 25, grade: "A" },
  { name: "Jane", age: 20, grade: "B" },
  { name: "Jake", age: 30, grade: "A" },
];

const topstudent = students.filter((student) => {
  return student.grade === "A";
});

console.log(topstudent);

const myPerson = {
  name2: "John Doe",
  age1: 25,
  address1: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

const { name2, age1 } = myPerson;
console.log(name2, age1);

const numbers = [1, 2, 3];
const double = numbers.map((num) => {
  return num * 2;
});

console.log(double);

//Asyncroshonus programming

console.log("Async robot");
setTimeout(() => {
  console.log("Async robot");
}, 5000);

console.log("Sync robot");

//Callback
function fetchData(userId, callback) {
  setTimeout(() => {
    if (userId >= 1) {
      const user = {
        id: userId,
        name: "John Doe",
        age: 25,
      };
      callback(user);
    } else {
      callback("User not found");
    }
  }, 1000);
}

fetchData(123, (user) => {
  console.log(user);
});

//Promise
function fetchUserDataPromise(userID) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (userID >= 1) {
        const user = {
          id: userID,
          name: "John Doe",
          age: 25,
        };
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

fetchUserDataPromise(123)
  .then((user) => {
    console.log(user);
    fetchUserDataPromise(12)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });

//promise.all
Promise.all([
  fetchUserDataPromise(1),
  fetchUserDataPromise(2),
  fetchUserDataPromise(3),
])
  .then((results) => {
    console.log(`All users fetched:${results}`);
  })
  .catch((error) => {
    console.log(error);
  });

async function asyncTaskBehaviour() {
  try {
    const user1 = await fetchUserDataPromise(1);
    console.log(user1);
    const user2 = await fetchUserDataPromise(2);
    console.log(user2);
    const user3 = await fetchUserDataPromise(3);
    console.log(user3);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
}

asyncTaskBehaviour();

let n = "20";

console.log(n + 1);
// console.log(++n);
console.log(n++);

let a = NaN;
let b = NaN;

console.log(a === b);
console.log(a == b);
console.log(typeof a === typeof b);

const users = [{
  name:"Shubham",
  age:23,
  Role:"Developer"
},{
  name:"Siddhesh",
  age:23,
  Role:"Developer"
},{
  name:"Nikhil",
  age:25,
  Role:"Developer"
}];

console.table(users);