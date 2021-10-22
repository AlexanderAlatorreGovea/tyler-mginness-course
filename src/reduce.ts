const people = [
  {
    id: 1,
    name: "Leigh",
    age: 33,
  },
  {
    id: 2,
    name: "Alex",
    age: 29,
  },
  {
    id: 3,
    name: "Peter",
    age: 27,
  },
];

let results;

//count
results = people.reduce((acc, person) => {
  return acc + 1;
}, 0);
console.log(results);

//sum
results = people.reduce((acc, person) => acc + person.age, 0);
console.log(results);

//map
results = people.reduce((acc, person) => [...acc, person.name], []);
console.log(results);

//convert to id => person lookup (normalize data based on id)

results = people.reduce((acc, person) => {
  return {
    ...acc,
    [person.id]: person,
  };
}, {});
console.log(results);
console.log(results[3]);

//max value
let newResult;

newResult = people.reduce((acc, person) => {
  if (acc === null || person.age > acc) {
    return person.age;
  }
  return acc;
}, null);

console.log(newResult);
export {};

//find by name

newResult = people.reduce((acc, person) => {
  if (acc !== null) return acc;
  if (person.name === "Leigh") return person;

  return null;
}, null);

//all people over 19

results = people.reduce((acc, person) => {
  if (!acc) return false;

  return person.age > 19;
}, true);

console.log(results);

// any over 18

results = people.reduce((acc, person) => {
  if (acc) return true;

  return person.age > 30;
}, false);

console.log(results);

//count occurneces of an instance of an array

const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "cancelled" },
  { id: 3, status: "cancelled" },
  { id: 4, status: "pending" },
  { id: 5, status: "cancelled" },
];

let data: OrdersData | Object;

interface OrdersData {
  pending: number;
  cancelled: number;
}

data = orders.reduce((acc, order) => {
  return {
    ...acc,
    [order.status]: (acc[order.status] || 0) + 1,
  };
}, {});

console.log(data);

//flatten an array

let folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];

console.log(folders);
