// __tests__/fetch.test.js
import React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Item from "./components/Item";

test("load an display hello", async () => {
  const compo = render(
    <Item
      updateTask={"updateTask"}
      removeTask={"removeTask"}
      toggleTask={"toggleTask"}
      key={123}
      id={1}
      text={"hola"}
      state={true}
    />
  );

  compo.getByText("hola");
});
