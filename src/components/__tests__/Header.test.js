import Header from "../Header";
import { Provider } from "react-redux";
import appReduxStore from "../../utils/appReduxStore";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


test("should render Header Component with login button", () => {

  render(
    <BrowserRouter>
      <Provider store={appReduxStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


   const loginBtn =  screen.getByRole("button", { name: "Sign-Up / Login" });

  expect(loginBtn).toBeInTheDocument();
});


test("should render Header Component with Cart items ", () => {

    render(
      <BrowserRouter>
        <Provider store={appReduxStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
   
     const cartItems =  screen.getByText(/Cart/i);

    expect(cartItems).toBeInTheDocument();
  });


test("should change login button text when clicked ", () => {

    render(
      <BrowserRouter>
        <Provider store={appReduxStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn =  screen.getByRole("button", { name: "Sign-Up / Login" });

    fireEvent.click(loginBtn);

    const logout = screen.getByRole("button", { name: "Log-Out" });

    expect(logout).toBeInTheDocument();
});