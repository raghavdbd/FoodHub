import { createSlice } from "@reduxjs/toolkit"

const Cartslice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        
    },
    // reducer function will modify the state
    reducers:{
        addItem:(state,action)=>{
            //  state is the previous state and action paylod is the data which is coming in
            state.items.push(action.payload);

        },
        removeItem:(state,action)=>{
            state.item.pop()

        },
        //  in this we did not require any action .paylod as we don't require any data
        clearcart:(state)=>{
            state.item=[];
        }
    }
});

//  this will be reducer not reducers
export const{addItem,removeItem,clearcart}=Cartslice.actions
export default Cartslice.reducer