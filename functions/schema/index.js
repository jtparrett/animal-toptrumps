const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    getAnimals: [Animal]
  }

  type Mutation {
    createAnimal(animal: AnimalInput!): Boolean
    deleteAnimal(id: ID!): Boolean
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

  input AnimalInput {
    name: String!
    type: AnimalType!
    diet: AnimalDietType!
    extinct: Boolean!
  }
`;

module.exports = typeDefs;
