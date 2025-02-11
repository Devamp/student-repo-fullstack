/** Exercise 01 - Coins **/

const calculateChange = (amount) => {
  // check if amount is greater than 100 or 0
  if (amount > 100) {
    return `$${amount} ==> Error: the number is too large`;
  } else if (amount === 0) {
    return `$${amount} ==> No change`;
  }

  // define counter variables for each coin amount
  let num_dollars = 0;
  let num_quarters = 0;
  let num_dimes = 0;
  let num_nickles = 0;
  let num_pennies = 0;
  let original_amount = amount; // store oringinal amount for output

  // loop until the amount reaches 0, and increment the counter variables accordingly
  while (amount > 0) {
    if (amount >= 1.0) {
      num_dollars++;
      amount--;
    } else if (amount >= 0.25) {
      num_quarters++;
      amount -= 0.25;
    } else if (amount >= 0.1) {
      num_dimes++;
      amount -= 0.1;
    } else if (amount >= 0.05) {
      num_nickles++;
      amount -= 0.05;
    } else {
      num_pennies++;
      amount -= 0.01;
    }
  }

  // array used to help format the output string
  const parts = [];
  if (num_dollars > 0)
    parts.push(`${num_dollars} ${num_dollars > 1 ? "dollars" : "dollar"}`);
  if (num_quarters > 0)
    parts.push(`${num_quarters} ${num_quarters > 1 ? "quarters" : "quarter"}`);
  if (num_dimes > 0)
    parts.push(`${num_dimes} ${num_dimes > 1 ? "dimes" : "dime"}`);
  if (num_nickles > 0)
    parts.push(`${num_nickles} ${num_nickles > 1 ? "nickels" : "nickel"}`);
  if (num_pennies > 0)
    parts.push(`${num_pennies} ${num_pennies > 1 ? "pennies" : "penny"}`);

  return `$${original_amount} ==> ${parts.join(", ")}`;
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
console.log(calculateChange(0.01));
console.log(calculateChange(0.1));
console.log(calculateChange(0.25));
console.log(calculateChange(0));
console.log(calculateChange(1));
console.log(calculateChange(99));
console.log(calculateChange(100));
console.log(calculateChange(0.99));
