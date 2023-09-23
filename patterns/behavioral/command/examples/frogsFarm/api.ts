import { Frog } from "./frog";

const api = {
  fetchFrogs: function () {
    return Promise.resolve([
      { id: 1, name: "mike", sex: "male", age: 1 },
      { id: 2, name: "sally", sex: "female", age: 2 },
      { id: 3, name: "michelle", sex: "female", age: 9 },
    ]);
  },
  saveToDb: function (frogs: Frog[]) {
    // Just pretend this is actually saving to a real database
    console.log(`Saving ${frogs.length} frogs to our database...`);
    return Promise.resolve();
  },
};

export default api;
