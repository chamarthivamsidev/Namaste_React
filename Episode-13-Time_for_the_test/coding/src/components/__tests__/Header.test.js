import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with the Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Different ways to target the Login button
  const loginButton = screen.getByRole("button");
  const loginButton2 = screen.getByText("Login");
  const loginButton3 = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
  expect(loginButton2).toBeInTheDocument();
  expect(loginButton3).toBeInTheDocument();
});

it("Should render Header component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - 0");
  const cartItems2 = screen.getByText(/Cart/); // using regex

  expect(cartItems).toBeInTheDocument();
  expect(cartItems2).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Login");
  fireEvent.click(loginButton);

  const logOutbutton = screen.getByText("Logout");

  expect(logOutbutton).toBeInTheDocument();
});
