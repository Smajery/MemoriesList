import {createSlice} from "@reduxjs/toolkit";
import imgWine from "../../../img/wine.png";
import imgGame from "../../../img/game.png";

const initialState = {
    categoryItems: [
        {id: 1, name: 'Напівсолодке червоне', img: imgWine, category: 1, rating: 2},
        {id: 2, name: 'Сухе біле', img: imgWine, category: 1, rating: 5},
        {id: 3, name: 'Сухе червоне', img: imgWine, category: 1, rating: 4},
        {id: 4, name: 'Напівсолодке біле', img: imgWine, category: 1, rating: 3},
        {id: 5, name: 'Гранатове сухе вино', img: imgWine, category: 1, rating: 1},
        {id: 6, name: 'Гранатове напівсолодке вино', img: imgWine, category: 1, rating: 3},
        {id: 7, name: 'Ігра 1', img: imgGame, category: 2, rating: 2},
        {id: 8, name: 'Ігра 2', img: imgGame, category: 2, rating: 3},
        {id: 9, name: 'Ігра 3', img: imgGame, category: 2, rating: 4},
        {id: 10, name: 'Ігра 4', img: imgGame, category: 2, rating: 5},
        {id: 11, name: 'Ігра 5', img: imgGame, category: 2, rating: 3},
        {id: 12, name: 'Ігра 6', img: imgGame, category: 2, rating: 1},
    ],
    categories: [
        {id: 1, name: 'Вина'},
        {id: 2, name: 'Ігри'},
        {id: 3, name: 'Фільми'},
    ],
    selectedCategory: {},
    selectedCategoryItems: [],
    options: [
        {name: 'По імені', value: 'name'},
        {name: 'По рейтингу: по убыванию', value: 'ratingDown'},
        {name: 'По рейтингу: по возрастанию', value: 'ratingUp'},
    ],
    selectedSort: ''
}
export const memorySlice = createSlice({
    name: 'memory',
    initialState,
    reducers: {
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload
        },
        setSelectedCategoryName(state, action) {
            state.selectedCategory.name = action.payload
        },
        setCategoryName(state, action) {
            for (let i = 0; i < state.categories.length; i++) {
                if (state.categories[i].id === state.selectedCategory.id) {
                    state.categories[i].name = action.payload
                }
            }
        },
        setSelectedSort(state, action) {
            state.selectedSort = action.payload
        },
        setSelectedCategoryItems(state, action) {
            state.selectedCategoryItems = action.payload
        },
        addCategory(state, action) {
            state.categories = [...state.categories, action.payload]
        },
        addItemInCategory(state, action) {
            state.categoryItems = [...state.categoryItems, action.payload]
        },
        removeCategory(state) {
            state.categories = state.categories.filter(category => category.id !== state.selectedCategory.id)
            state.selectedCategory = {}
        },
        removeItemInCategory(state, action) {
            state.categoryItems = state.categoryItems.filter(item => item.id !== action.payload)
        },
        sortSelectedCategoryItems(state, action) {
            if(action.payload === 'name'){
                state.selectedCategoryItems = state.selectedCategoryItems.sort((a, b) => a['name'].localeCompare(b['name']))
            }
            if(action.payload === 'ratingDown'){
                state.selectedCategoryItems = state.selectedCategoryItems.sort((a, b) => b['rating'] - a['rating'])
            }
            if(action.payload === 'ratingUp'){
                state.selectedCategoryItems = state.selectedCategoryItems.sort((a, b) => a['rating'] - b['rating'])
            }
        }
    }
})
export default memorySlice.reducer