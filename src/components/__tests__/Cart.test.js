import { render, screen, fireEvent } from "@testing-library/react";
import RestrauntMenu from "../RestrauntMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appReduxStore from "../../utils/appReduxStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load restraunt Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appReduxStore}>
          <Header />
          <RestrauntMenu />
           <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Recommended (5)");
  fireEvent.click(accordionHeader);

  const menuItems = screen.getAllByTestId("menu-item");
  expect(menuItems).toHaveLength(5);

  const cartBefore = screen.getByText("Cart - (0)");
  expect(cartBefore).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);


  const cartAfter = screen.getByText("Cart - (1)");
  expect(cartAfter).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  const cartAfter1 = screen.getByText("Cart - (2)");
  expect(cartAfter1).toBeInTheDocument();
  
  expect(screen.getAllByTestId("menu-item")).toHaveLength(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  
  expect(screen.getAllByTestId("menu-item")).toHaveLength(5);

  expect(screen.getAllByText("Cart is Empty & Add Items to the Cart!"));

});
