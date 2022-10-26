import {memorySlice} from "./MemorySlice";
import defaultImg from "../../../img/default-img.png"
import { v4 as uuidv4 } from 'uuid';

export const MemoryActionCreator = {
    setSelectedCategory: (selectedCategory) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategory(selectedCategory))
    },
    setSelectedCategoryName: (name) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategoryName(name))
        dispatch(memorySlice.actions.setCategoryName(name))
    },
    setSelectedSort: (sort) => dispatch => {
        dispatch(memorySlice.actions.setSelectedSort(sort))
    },
    setSelectedCategoryItems: (newArray) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategoryItems(newArray))
    },
    setSelectedCategoryItem: (item) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategoryItem(item))
    },

    addCategory: (name) => dispatch => {
        try {
            const category = {
                id: uuidv4(),
                name,
            }
            dispatch(memorySlice.actions.addCategory(category))
        } catch (e) {
            console.log(e)
        }
    },
    addItemInCategory: (name, selectedCategoryId) => dispatch => {
        try{
            if(!name){
                return false
            }
            const newItem = {
                id: uuidv4(),
                name,
                img: defaultImg,
                category: selectedCategoryId
            }
            dispatch(memorySlice.actions.addItemInCategory(newItem))
        }catch (e) {
            console.log(e)
        }
    },
    removeCategory: () => dispatch => {
        try {
            const result = window.confirm('Ви впевнені, що хочете видалити категорію?')
            if(result){
                dispatch(memorySlice.actions.removeCategory())
            }
        }catch (e) {
            console.log(e)
        }
    },
    removeItemInCategory: (itemId) => dispatch => {
        try {
            const result = window.confirm('Ви впевнені, що хочете видалити категорію?')
            if(result){
                dispatch(memorySlice.actions.removeItemInCategory(itemId))
            }
        }catch (e) {
            console.log(e)
        }
    },
    sortSelectedCategoryItems: (sort) => async dispatch=> {
        try{
            dispatch(MemoryActionCreator.setSelectedSort(sort))
            dispatch(memorySlice.actions.sortSelectedCategoryItems(sort))

        } catch (e) {
            console.log(e)
        }
    }
}