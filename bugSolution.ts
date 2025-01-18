function greeter(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will work fine now