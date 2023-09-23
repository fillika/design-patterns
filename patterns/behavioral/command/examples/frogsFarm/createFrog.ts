import { Frog, FrogOptions } from "./frog";

// Creates and returns a frog api which can help us track activities of each frog
export default function createFrog(options: FrogOptions): Frog {
  // Prepare options. If API changed we'll change it here only.
  let preparedOptions: FrogOptions = {
    name: options.name,
    sex: options.sex,
    age: options.age,
  };

  console.log(`Frog ${preparedOptions.name} has been created!`);
  return new Frog(preparedOptions);
}
