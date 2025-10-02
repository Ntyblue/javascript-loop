// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
for (let i = 0; i < restaurants.length; i++) {
  const rename = `Restaurant Name: ${restaurants[i]}`;
  newRestaurants.push(rename);
}

console.log(newRestaurants);
