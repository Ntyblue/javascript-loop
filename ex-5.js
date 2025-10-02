// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here
for (let letter in companyName) {
  console.log(
    `Number ${Number(letter) + 1} character is ${companyName[letter]}`
  );
}
