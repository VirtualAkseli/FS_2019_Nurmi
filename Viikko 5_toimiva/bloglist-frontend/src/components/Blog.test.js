import React from "react";

import { render, cleanup } from "react-testing-library";

import { prettyDOM } from "dom-testing-library";
import Blog from "./Blog";
import { debug } from "util";

test("renders content", () => {
  const blog = {
    title: "Testing is testing",
    author: "Me",
    url: "mmm.org"
  };

  const component = render(<Blog blog={blog} />);

  const li = component.container.querySelector("p");

  //console.log(prettyDOM(li));
  //component.debug();
  expect(component.container).toHaveTextContent("");

  const element = component.getByText("Testing is testing");
  expect(element).toBeDefined();
});
