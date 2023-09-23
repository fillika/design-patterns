// https://jsmanifest.com/command-design-pattern-in-javascript/

import api from "./api";
import addFrog from "./commands/addFrog";
import feedFrogs from "./commands/feedFrogs";
import FrogsCommandManager from "./commands/frogsCommandManager";
import getFrogs from "./commands/getFrogs";
import saveToDatabase from "./commands/saveToDatabase";
import createFrog from "./createFrog";
import FrogFood from "./frogFood";
import FrogManager from "./frogManager";
import init from "./init";

init()
  .then((frogs) => {
    const frogsManager = new FrogManager(api);
    // Add each fetched frog to our managing list so we can manage them
    frogs.forEach((frog) => frogsManager.addFrog(frog));

    const genders = {
      males: frogsManager.getMaleFrogs(),
      females: frogsManager.getFemaleFrogs(),
    };

    // Lets feed the frogs and then save this new data to the database
    frogsManager
      .feedFrogs(new FrogFood("fly", "insect", 1.5))
      .feedFrogs(new FrogFood("mosquito", "insect", 1.8))
      .save();

    console.log(
      "We reached the end and our database is now updated with new data!"
    );
    console.log(
      `Fed: ${genders.males.length} male frogs and ${genders.females.length} female frogs`
    );
    frogsManager.getFrogs().forEach((frog) => {
      console.log(
        `Frog ${frog.getOption("name")} consumed: ${frog
          .getFoodsConsumed()
          .map((food) => food.name)
          .join(", ")}`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });

// new approach is better
// Previous FromManager depended from inner property such as 'sex' or other
// and if api change we'll have to rewrite our manager. 
// But now we just rewrite (or create new) command instead.

const mikeTheFrog = createFrog({
  name: "mike",
  sex: "male",
  age: 2,
});

const sallyTheFrog = createFrog({
  name: "sally",
  sex: "female",
  age: 1,
});

const frogsManager = new FrogsCommandManager;
frogsManager.execute(addFrog(mikeTheFrog));
frogsManager.execute(feedFrogs(new FrogFood("apple", "fruit", 95)));
frogsManager.execute(feedFrogs(new FrogFood("fly", "insect", 1)));
frogsManager.execute(addFrog(sallyTheFrog));
frogsManager.execute(saveToDatabase());
frogsManager.execute(getFrogs());