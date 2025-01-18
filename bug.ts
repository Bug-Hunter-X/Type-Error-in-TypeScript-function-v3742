function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will give an error because TypeScript expects a string, not an array