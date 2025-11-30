import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA)
        } 
    })
});



it('should search reslist for Pizza input value', async () => {

   await act(async () => render(
   <BrowserRouter>
     <Body/>
    </BrowserRouter>
   ));

   const cardSBeforeSearch =  screen.getAllByTestId("res-card");

   expect(cardSBeforeSearch).toHaveLength(20);
     
   const searchBtn =  screen.getByRole("button", { name: "Search" });
   const searchInput = screen.getByTestId("search-box");
   
   fireEvent.change(searchInput, {target: {value: "pizza"}});
   fireEvent.click(searchBtn);


   const cardsAfterSearch = screen.getAllByTestId("res-card");
   expect(cardsAfterSearch).toHaveLength(4);
});


it("should filter top restraunts",async ()=>{

  await act(async ()=>{
    render(
    <BrowserRouter>
      <Body/>
     </BrowserRouter>
    );
   })

   const cardSBeforeFilter =  screen.getAllByTestId("res-card");
   expect(cardSBeforeFilter).toHaveLength(20);
   
   const topRatedBtn =  screen.getByRole("button", { name: "Top Rated Restraunts" });
   
   fireEvent.click(topRatedBtn);

   const cardSAfterFilter =  screen.getAllByTestId("res-card");
   expect(cardSAfterFilter).toHaveLength(15);
});


