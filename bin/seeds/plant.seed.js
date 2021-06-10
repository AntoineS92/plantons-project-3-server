require("dotenv").config();
require("../../config/dbConnection");
const PlantModel = require("../../models/Plant");

const plants = [
  {
    name: "aubergine",
    famBotanique: "solanacées",
    nomLatin: "solanum melongena L.",
    type: ["legume fruit"],
    // image:"",
    tailleFoliaire: ["50cm", "100cm"],
    tailleRacine: ["120-180cm"],
    preferences: {
      sol: ["fertile", "profond", "bien drainé"],
      soleil: "ensoleillée",
    },
    periodeSemis: ["fevrier", "mars", "avril", "mai"],
    periodeRecolte: ["juillet", "aout", "septembre", "octobre"],
    maladies: ["pourriture grise", "verticilliose"],
    parasites: ["araignée rouge", "doryphore", "mouche blanche", "puceron"],

    associationPos: [],
    associationNeg: [],
    variete: [],
  },
  {
    name: "carotte",
    famBotanique: "apiacées",
    nomLatin: "daucus carota L.",
    type: ["legume racine"],
    // image: "",
    tailleFoliaire: ["50cm"],
    tailleRacine: ["> 180cm"],
    preferences: {
      sol: ["leger", "bien drainé", "meuble", "non caillouteux"],
      soleil: "mi-ombre à ensoleillé",
    },
    periodeSemis: ["fevrier", "mars", "avril", "mai", "juin", "juillet"],
    periodeRecolte: [
      "mai",
      "juin",
      "juillet",
      "aout",
      "septembre",
      "octobre",
      "novembre",
    ],
    maladies: [
      "alternariose",
      "mildiou de la carotte",
      "oïdium de la carotte",
      "rhizoctone violet",
    ],
    parasites: ["mouche de la carotte", "vers terricoles"],

    associationPos: [],
    associationNeg: [],
    variete: ["60ba3954fc8f1141581e24ad"],
  },
  {
    name: "ail",
    famBotanique: "alliacées",
    nomLatin: "allium sativum L.",
    type: ["legume bulbe"],
    // image:,
    tailleFoliaire: ["50cm", "100cm"],
    tailleRacine: ["< 100cm"],
    preferences: { sol: ["leger", "meuble", "profond"], soleil: "ensoleillé" },
    periodeSemis: ["octobre", "novembre"],
    periodeRecolte: ["juin", "juillet", "aout"],
    maladies: ["rouille de l'ail", "mildiou de l'oignon", "pourriture blanche"],
    parasites: ["mouche de l'oignon"],

    associationPos: [],
    associationNeg: [],
    variete: [],
  },
  {
    name: "haricot",
    famBotanique: "fabacées",
    nomLatin: "phasoleus vulgaris L.",
    type: ["legume gousse", "graine"],
    // image:,
    tailleFoliaire: ["< 50cm", "> 100cm"],
    tailleRacine: ["< 120cm"],
    preferences: { sol: ["meuble", "leger", "fertile"], soleil: "ensoleillée" },
    periodeSemis: ["avril", "mai", "juin", "juillet", "aout"],
    periodeRecolte: ["juillet", "aout", "septembre", "octobre"],
    maladies: [
      "anthracnose",
      "graisse du haricot",
      "pourriture blanche",
      "pourriture grise",
      "rouille",
      "viroses",
    ],
    parasites: ["bruche du haricot à grain", "pucerons", "araignée rouge"],

    associationPos: [],
    associationNeg: [],
    variete: [],
  },
  {
    name: "laitue",
    famBotanique: "astracées",
    nomLatin: "latuca sativa L.",
    type: ["legume feuille"],
    // image:,
    tailleFoliaire: ["< 50cm"],
    tailleRacine: ["< 120cm"],
    preferences: { sol: ["frais", "fertile", "meuble"], soleil: "ensoleillée" },
    periodeSemis: ["toute l'année"],
    periodeRecolte: [
      "fevrier",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "aout",
      "septembre",
      "octobre",
      "novembre",
    ],
    maladies: [
      "mildiou de la laitue",
      "pourriture grise",
      "pourriture du collet",
      "viroses",
    ],
    parasites: ["escargots", "limaces", "noctuelle de la laitue", "pucerons"],

    associationPos: [],
    associationNeg: [],
    variete: [
      "60ba3954fc8f1141581e24ac",
      "60ba3954fc8f1141581e24af",
      "60be15f937236c4f24fea84f",
    ],
  },
  {
    name: "maïs",
    famBotanique: "poacées",
    nomLatin: "zea mays L.",
    type: ["legume graine"],
    // image:,
    tailleFoliaire: ["> 100cm"],
    tailleRacine: ["120cm", "180cm"],
    preferences: { sol: ["profond", "fertile"], soleil: "ensoleillée" },
    periodeSemis: ["mars", "avril", "mai", "juin"],
    periodeRecolte: ["aout", "septembre", "octobre"],
    maladies: ["charbon du maïs"],
    parasites: [
      "puceron noir des racines",
      "noctuelle du maïs",
      "pyrale du maïs",
    ],

    associationPos: [],
    associationNeg: [],
    variete: [],
  },
  {
    name: "tomate",
    famBotanique: "solanacée",
    nomLatin: "lycopersion esculentum L.",
    type: ["legume fruit"],
    // image:,
    tailleFoliaire: ["> 100cm"],
    tailleRacine: ["120cm", "180cm"],
    preferences: {
      sol: ["fertile", "meuble", "plutôt leger"],
      soleil: "ensoleillée",
    },
    periodeSemis: ["mars", "avril"],
    periodeRecolte: ["juillet", "aout", "septembre", "octobre"],
    maladies: [
      "mildiou",
      "pied noir de la tige",
      "pourriture grise",
      "alternariose",
      "fusariose",
    ],
    parasites: ["pucerons", "aleurodes"],

    associationPos: [],
    associationNeg: [],
    variete: [
      "60ba3954fc8f1141581e24a9",
      "60ba3954fc8f1141581e24aa",
      "60ba3954fc8f1141581e24ab",
      "60ba3954fc8f1141581e24ae",
    ],
  },
];

(async () => {
  await PlantModel.collection.drop().catch((err) => {});
  PlantModel.insertMany(plants)
    .then((dbSuccess) => {
      console.log(
        `seed plants done : ${dbSuccess.length} documents inserted in database !`
      );
    })
    .catch((error) => console.log(error));
})();
