// Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.



for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      console.log(`${i} is odd`);
    }
  }


  const num = Number(prompt('enter a number of your choice'));

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      console.log(`${i} is odd`);
    }
  }
