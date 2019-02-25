import React from "react";
import { render, fireEvent } from "react-testing-library";

import SimpleBlog from "./SimpleBlog";

test("renders title, author and likes", () => {
  const blog = {
    title: "Testing is jesting",
    author: "Meikäläinen",
    url: "mmm.org",
    likes: 1234567
  };

  const component = render(<SimpleBlog blog={blog} />);

  expect(component.container).toHaveTextContent(
    "Testing is jesting",
    "Meikäläinen",
    1234567
  );
});

it("clicking the button calls event handler twice", async () => {
  const blog = {
    title: "Testing is jesting vol. 2",
    author: "Meikä",
    url: "mmm.org"
  };

  const mockHandler = jest.fn();

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  );

  const button = getByText("like");

  fireEvent.click(button);
  fireEvent.click(button);

  expect(mockHandler.mock.calls.length).toBe(2);
});
