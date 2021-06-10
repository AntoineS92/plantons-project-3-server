require("dotenv").config();
require("../../config/dbConnection");
const VarieteModel = require("../../models/Variete");

const varietes = [
  {
    name: "Alki Blue Blood",
    origine: "États-Unis",
    image:
      "https://images.musicstore.de/images/1280/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg",
    ancienne: false,

    ajoute: false,
  },
  {
    name: "Black Pear",
    origine: "Moldavie",
    image:
      "https://images.musicstore.de/images/1280/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg",
    ancienne: false,

    ajoute: true,
  },
  {
    name: "Banana Legs",
    origine: "États-Unis",
    image:
      "https://images.musicstore.de/images/1280/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg",
    ancienne: false,

    ajoute: false,
  },
  {
    name: "Emerald Fan",
    origine: "États-Unis",
    image:
      "https://images.musicstore.de/images/1280/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg",
    ancienne: false,

    ajoute: false,
  },
  {
    name: "Blanche de Küttingen",
    origine: "Suisse",
    image:
      "https://images.musicstore.de/images/1280/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg",
    ancienne: true,

    ajoute: true,
  },
  {
    name: "Brin de Muguet",
    origine: "France",
    image:
      "https://images.musicstore.de/images/1280/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg",
    ancienne: false,

    ajoute: true,
  },
  {
    name: "Redina",
    origine: "États-Unis",
    image:
      "https://images.musicstore.de/images/1280/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg",
    ancienne: false,

    ajoute: false,
  },
];

(async () => {
  await VarieteModel.collection.drop().catch((error) => {});

  VarieteModel.insertMany(varietes)
    .then((dbSuccess) => {
      console.log(
        `seed varietes done : ${dbSuccess.length} documents inserted in database !`
      );
    })
    .catch((error) => console.log(error));
})();
