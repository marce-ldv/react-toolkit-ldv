import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";

// import { Input } from "~/Input";
import Input from "../../../components/atoms/Input";

expect.extend(toHaveNoViolations);

describe("Input", () => {
  test("should render without crashes", () => {
    render(<Input />);
  });

  test("should render with label", () => {
    render(<Input label="Username" />);
    const label = screen.getByRole("textbox", { name: "Username" });

    expect(label).toBeInTheDocument();
  });

  test("should render with placeholder", () => {
    render(<Input placeholder="placeholder" />);
    const placeholder = screen.getByPlaceholderText("placeholder");
    expect(placeholder).toBeInTheDocument();
  });

  test("the user should type in the input", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");

    userEvent.type(input, "hello");

    expect(input).toHaveValue("hello");
  });

  test("should render with disabled", () => {
    render(<Input disabled />);
    const disabled = screen.getByRole("textbox");

    expect(disabled).toBeDisabled();
  });

  test("should be accessible", async () => {
    const { container } = render(<Input />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
