const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    getAnimals: [Animal]
  }

  type Animal {
    id: ID!
    name: String
    type: AnimalType
    diet: AnimalDiet
  }

  enum AnimalType {
    MAMMAL
    REPTILE
    FISH
    AMPHIBIOUS
  }

  enum AnimalDiet {
    CARNIVORE
    HERBIVORE
  }
`;

module.exports = typeDefs;
