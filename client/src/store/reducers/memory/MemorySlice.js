import {createSlice} from "@reduxjs/toolkit";
import imgWine from "../../../img/wine.png";
import imgGame from "../../../img/game.png";

const initialState = {
    categoryItems: [
        {id: 1, name: 'Напівсолодке червоне', img: imgWine, category: 1, rating: 2, description: 'Дорогое и не стоит своих денег'},
        {id: 2, name: 'Сухе біле', img: imgWine, category: 1, rating: 5, description: 'Очень вкусное, Мёмне нравится белые нотки'},
        {id: 3, name: 'Сухе червоне', img: imgWine, category: 1, rating: 4, description: 'Купил на распродаже, еще не пробовал'},
        {id: 4, name: 'Напівсолодке біле', img: imgWine, category: 1, rating: 3, description: 'Неплохое'},
        {id: 5, name: 'Гранатове сухе вино', img: imgWine, category: 1, rating: 1, description: 'Ужасное'},
        {id: 6, name: 'Гранатове напівсолодке вино', img: imgWine, category: 1, rating: 3, description: 'Норм'},
        {id: 7, name: 'Ігра 1', img: imgGame, category: 2, rating: 2, description: ''},
        {id: 8, name: 'Ігра 2', img: imgGame, category: 2, rating: 3, description: ''},
        {id: 9, name: 'Ігра 3', img: imgGame, category: 2, rating: 4, description: ''},
        {id: 10, name: 'Ігра 4', img: imgGame, category: 2, rating: 5, description: ''},
        {id: 11, name: 'Ігра 5', img: imgGame, category: 2, rating: 3, description: ''},
        {id: 12, name: 'Ігра 6', img: imgGame, category: 2, rating: 1, description: ''},
    ],
    categories: [
        {id: 1, name: 'Вина'},
        {id: 2, name: 'Ігри'},
        {id: 3, name: 'Фільми'},
    ],
    selectedCategory: {},
    selectedCategoryItems: [],
    options: [
        {name: 'За назвою', value: 'name'},
        {name: 'За спаданням', value: 'ratingDown'},
        {name: 'За зростанням', value: 'ratingUp'},
    ],
    selectedSort: '',
    selectedCategoryItem: {},
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
        setSelectedCategoryItemName(state, action) {
            state.selectedCategoryItem.name = action.payload
            for(let i = 0; i < state.categoryItems.length; i++ ) {
                if (state.categoryItems[i].id === state.selectedCategoryItem.id) {
                    state.categoryItems[i].name = action.payload
                }
            }
        },
        setSelectedCategoryItemDescription(state, action) {
            state.selectedCategoryItem.description = action.payload
            for(let i = 0; i < state.categoryItems.length; i++ ) {
                if (state.categoryItems[i].id === state.selectedCategoryItem.id) {
                    state.categoryItems[i].description = action.payload
                }
            }
        },
        setSelectedCategoryItemRating(state, action) {
            state.selectedCategoryItem.rating = action.payload
            for(let i = 0; i < state.categoryItems.length; i++ ) {
                if (state.categoryItems[i].id === state.selectedCategoryItem.id) {
                    state.categoryItems[i].rating = action.payload
                }
            }
        },
        setSelectedCategoryItemImg(state, action) {
            state.selectedCategoryItem.img = action.payload
            for (let i = 0; i < state.categoryItems.length; i++){
                if(state.categoryItems[i].id === state.selectedCategoryItem.id){
                    state.categoryItems[i].img = action.payload
                }
            }
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
        setSelectedCategoryItem(state, action) {
            state.selectedCategoryItem = action.payload
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