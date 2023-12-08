import { getByPlaceholderText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

test("renders a label and an input with the correct attributes", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();

  render(
    <Input
      labelText="blabla"
      placeholder="placeholdertext123"
      name="jakob"
      value="22"
      onChange={handleChange}
      required
    />
  );

  const input = screen.getByLabelText("blabla");
  const label = screen.getByTestId("label");

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();

  expect(input).toHaveAttribute("placeholder", "placeholdertext123");
  expect(input).toHaveAttribute("name", "jakob");
  expect(input).toHaveAttribute("value", "22");
  expect(input).toHaveAttribute("onChange", { handleChange });
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {});

// You can now go a step further and not only check for a component being rendered, but also for its callback function being called.

// - To check for attributes like `placeholder` or `name`, you can use the matcher `toHaveAttribute(attributeName, value)`.
// - The `Input` component receives an `onChange` callback; in order to test it, remember that you have to mock if first.
// - You can check how often a function has been called with `toHaveBeenCalledTimes(numberOfExpectedCalls)`.
