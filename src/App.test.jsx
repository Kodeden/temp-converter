import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import App from "./App";

it("converts °C to °F", async () => {
  render(<App />);
  const inputCelsius = screen.getByLabelText(/Celsius/i);
  const inputFahrenheit = screen.getByLabelText(/Fahrenheit/i);
  const user = userEvent.setup();

  await user.type(inputCelsius, "100");

  expect(inputFahrenheit).toHaveValue(212);
});

it("converts °F to °C", async () => {
  render(<App />);
  const inputCelsius = screen.getByLabelText(/Celsius/i);
  const inputFahrenheit = screen.getByLabelText(/Fahrenheit/i);
  const user = userEvent.setup();

  await user.type(inputFahrenheit, "212");

  expect(inputCelsius).toHaveValue(100);
});
