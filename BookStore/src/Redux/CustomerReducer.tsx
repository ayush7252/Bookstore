import { createSlice } from "@reduxjs/toolkit";

export const CustomerSlice = createSlice({
    name: 'customer',
    initialState: {
        customer: [],
    },
    reducers: {
        addCustomer: (state, action)=>{
            state.customer.push(action.payload);
        },
        removeCustomer: (state, action)=>{
            state.customer = state.customer.filter((customer) => customer.id !== action.payload);
        }
    }
})

export const { addCustomer, removeCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;