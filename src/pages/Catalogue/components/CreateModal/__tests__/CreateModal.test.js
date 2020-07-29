import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider, theme } from "@chakra-ui/core";

import { CreateModal } from "../";

describe("<CreateModal />", () => {
  it("renders", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider>
          <CreateModal />
        </MockedProvider>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("opens the modal", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider>
          <CreateModal />
        </MockedProvider>
      </ThemeProvider>
    );

    fireEvent.click(getByText("Create animal"));

    expect(document.body).toMatchSnapshot();
  });
});
