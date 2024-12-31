function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: arguments must be numbers');
  }

  // ...rest of the function...
}

// Example usage:
console.log(foo(1,2)); // Output: (Rest of the function's logic will run)

try {
    console.log(foo(1, null)); //Throws an error
} catch (e) {
    console.error(e.message);
}

console.log(foo(1, 'hello')); //Throws an error