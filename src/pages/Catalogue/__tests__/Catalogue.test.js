import React from "react";
import { render, act, wait, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider, theme } from "@chakra-ui/core";

import { Catalogue } from "../";
import { GET_ANIMALS } from "../graphql";
import { ANIMAL_TYPE, ANIMAL_DIET_TYPE } from "../../../consts";
import { CREATE_ANIMAL } from "../components/CreateModal/graphql";

const mocks = [
  {
    request: {
      query: GET_ANIMALS,
    },
    result: {
      data: {
        getAnimals: [
          {
            id: "0",
            name: "Animal 0",
            type: ANIMAL_TYPE.MAMMAL,
            diet: ANIMAL_DIET_TYPE.HERBIVORE,
            extinct: false,
            __typename: "Animal",
          },
          {
            id: "1",
            name: "Animal 1",
            type: ANIMAL_TYPE.AMPHIBIOUS,
            diet: ANIMAL_DIET_TYPE.HERBIVORE,
            extinct: true,
            __typename: "Animal",
          },
        ],
      },
    },
  },
  {
    request: {
      query: CREATE_ANIMAL,
      variables: {
        values: {
          name: "New name",
          type: "MAMMAL",
          diet: "HERBIVORE",
          extinct: false,
        },
      },
    },
    result: {
      data: {
        createAnimal: {
          id: "2",
          name: "New name",
          type: "MAMMAL",
          diet: "HERBIVORE",
          extinct: false,
          __typename: "Animal",
        },
      },
    },
  },
];

describe("<Catalogue />", () => {
  it("renders", async () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks}>
          <Catalogue />
        </MockedProvider>
      </ThemeProvider>
    );

    await act(async () => {
      await wait();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("creates a new animal", async () => {
    const { getByText, getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks}>
          <Catalogue />
        </MockedProvider>
      </ThemeProvider>
    );

    fireEvent.click(getByText("Create animal"));

    fireEvent.change(getByLabelText("Name"), {
      target: {
        value: "New name",
      },
    });
    fireEvent.change(getByLabelText("Type"), {
      target: {
        value: ANIMAL_TYPE.MAMMAL,
      },
    });
    fireEvent.change(getByLabelText("Dietry requirements"), {
      target: {
        value: ANIMAL_DIET_TYPE.HERBIVORE,
      },
    });

    fireEvent.click(document.querySelector('button[type="submit"]'));

    await act(async () => {
      await wait();
    });

    await act(async () => {
      await wait();
    });

    expect(getByText("New name")).toBeInTheDocument();
  });
});
