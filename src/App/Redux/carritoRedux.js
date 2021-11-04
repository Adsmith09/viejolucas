import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'carrito',
    initialState:{
        productos:[],
        cantidad:0,
        total:0,
    },
    reducers:{
        addProducto:(state, action) =>{
            state.cantidad +=1;
            state.productos.push(action.payload);
            state.total += action.payload.precio *  action.payload.cantidad;
        }
        
    }
});

export const {addProducto} = cartSlice.actions
export default cartSlice.reducer;