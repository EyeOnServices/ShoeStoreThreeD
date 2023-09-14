import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../3DProducts';
import shoe1 from '../Product_Buttons/APATITE.png'
import { Color } from '../utils';

interface AppState {
    selectedColor: Color;
    selectedProduct: Product;
}

const initialState: AppState = {
    selectedColor: {
        id: 1,
        name: "Slushy",
        hex: "#8cc3ed",
        sec: "#e5f3ff",
        locked: false,
    },
    selectedProduct: {
        id: 1,
        name: 'ALVEA',
        imageUrl: shoe1,
        price: 650,
    }
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSelectedColor(state, action) {
            state.selectedColor = action.payload;
        },
        setSelectedProduct(state, action) {
            state.selectedProduct = action.payload;
        },
    },
});

export const { setSelectedColor, setSelectedProduct } = appSlice.actions;

export default appSlice.reducer;
