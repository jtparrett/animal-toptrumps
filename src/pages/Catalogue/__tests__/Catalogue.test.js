import React from "react";
import { render, act, wait } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider, theme } from "@chakra-ui/core";

import { Catalogue } from "../";
import { GET_ANIMALS } from "../graphql";
import { ANIMAL_TYPE, ANIMAL_DIET_TYPE } from "../../../consts";

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
});
