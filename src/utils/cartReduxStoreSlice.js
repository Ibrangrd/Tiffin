import { createSlice, nanoid,current } from "@reduxjs/toolkit";


const cartReduxStoreSlice = createSlice({
    name : 'cart',
    initialState : {
        items: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers : {
        addItem: (state, action) =>{
            const actiondata = {
                id:nanoid(),
                ...action.payload
            }
            state.items.push(actiondata);
        },
        removeItem: (state,action) => {
            let ItemId=action.payload.card.info.id;
            const index=state.items.findIndex((x)=>x.card.info.id==ItemId);
            state.items.splice(index,index+1);

        },
        clearCart: (state,action) => {
            state.items.length = 0;
        }
    }

});

export const {addItem, removeItem, clearCart} = cartReduxStoreSlice.actions;

export default cartReduxStoreSlice.reducer;






