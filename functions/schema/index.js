const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    getAnimals: [Animal]
  }

  type Animal {
    id: ID!
    name: String
    type: AnimalType
    diet: AnimalDietType
    extinct: Boolean
  }

  enum AnimalType {
    MAMMAL
    REPTILE
    FISH
    AMPHIBIOUS
  }

  enum AnimalDietType {
    CARNIVORE
    HERBIVORE
  }
`;

module.exports = typeDefs;
