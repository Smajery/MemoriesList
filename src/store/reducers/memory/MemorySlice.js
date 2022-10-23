import {createSlice} from "@reduxjs/toolkit";
import img from "../../../img/wine.png";

const initialState = {
    categoryItems: [
        {id: 1, name: 'Вино 1', img: img},
        {id: 2, name: 'Вино 2', img: img},
        {id: 3, name: 'Вино 3', img: img},
        {id: 4, name: 'Вино 4', img: img},
        {id: 5, name: 'Вино 5', img: img},
        {id: 6, name: 'Вино 6', img: img},
    ],
    listItems: [
        {id: 1, name: 'Вина'},
        {id: 2, name: 'Ігри'},
        {id: 3, name: 'Фільми'},
    ]
}
export const memorySlice = createSlice({
    name: 'memory',
    initialState,
    reducers: {}
})
export default memorySlice.reducer