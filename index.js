const companies = [
  { name: "Company One", category: "Retail", start: 1981, end: 2003 },
  { name: "Company Two", category: "Finance", start: 2000, end: 2020 },
  { name: "Company Three", category: "Tech", start: 2001, end: 2005 },
  { name: "Company Four", category: "Retail", start: 1984, end: 2005 },
  { name: "Company Five", category: "IT", start: 1982, end: 1987 },
  { name: "Company Six", category: "Science", start: 2010, end: 2018 },
  { name: "Company Seven", category: "Retail", start: 1987, end: 2013 },
  { name: "Company Eight", category: "Business", start: 1921, end: 2003 },
  { name: "Company Nine", category: "Food", start: 1991, end: 2020 },
];

const ages = [33, 61, 25, 24, 28, 29, 27, 50, 45, 48, 88, 21, 10, 51];

// for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach
//  1. Synchronus function (callback function)
//  2. takes 3 params, one is iterrator or variable, second is index, third is the array
// 3. returns nothing.
companies.forEach(function (company) {
  console.log(company);
  // if we wanted to access any property of the object we can just
  // console.log(company.name);
});

// filter
// lets try doing this for loop first. create a list of ages that are 21 to above.

let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

// how about doing the same with filter

const canDrink = ages.filter(function (ages) {
  if (ages >= 21) {
    return true;
  }
});

// es6 styling

const canDrink = age.filter((ages) => ages >= 21);

// filter retail company

const retailShit = companies.filter(function (company) {
  if (company.category === "Retail") {
    return true;
  }
});

// es6 styling

const retailShit = companies.filter((company) => company.category === "Retail");

// getcompanies started in 1980's

const oldcompanis = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

// get companies that last at least ten years or more
const companiesLasted = companies.filter(
  (company) => company.end - company.start >= 10
);

// map

// it helps us to create new array.

// create a new array with companies name
const companyNames = [];

const nameShit = companies.map((company) => company.name);

companyNames.push(nameShit);

// square the ages

const agesquare = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

console.log(agesquare);

// sort
// we want to display companies from the start year, the earliest year to the latest

const sortedComapnies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortShit = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

// sort ages
// lowest to hightest,

const ageShit = ages.sort((a, b) => a - b); //b-a descending

// reduce

//1. adding ages with for loop

let ageSum = 0;
for (let i = 0; i < age.length; i++) {
  ageSum += ages[i];
}

const ageSum = ages.reduce(function (total, age) {
  return total + age;
}, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

// get total years of company get the range in other words

const totalYears = companies.reduce(function (total, company) {
  return total + (company.end - company.start);
}, 0);

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

// using all methods together

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
