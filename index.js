require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const mongoose = require("mongoose");

const Cat = require("./cats");

(async () => {
  mongoose.connect(process.env.MONGO_URI);

  //   const Cat = mongoose.model("Cat", {
  //     name: {type: String, unique: true},
  //     age: {type: Number, unique: false}
  // });

  // Delete method
  // await Cat.deleteMany ({});

  // const cat = new Cat({name: "Zildjian"});
  // await cat.save();
  // console.log(cat);

  // const foundCat = await Cat.findById("624434f5eb5354ea3c23d66a");
  // console.log(foundCat);

  // node index.js --name "fluffy" --age 5 --owner_name --pet_visit --number_of_litters
  console.log(argv);
  const cat = new Cat({
    name: argv.name,
    age: argv.age,
    owner_name: argv.owner_name,
    pet_visit: argv.pet_visit,
    number_of_litters: argv.number_of_litters,
  });
  await cat.save();
  console.log(cat);

  //   const foundCat = await Cat.findOne({ name: argv.findName });
  mongoose.connection.close();
})();
