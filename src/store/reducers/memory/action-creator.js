import {memorySlice} from "./MemorySlice";
import defaultImg from "../../../img/default-img.png"

export const MemoryActionCreator = {
    setSelectedCategory: (selectedCategory) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategory(selectedCategory))
    },
    setSelectedCategoryName: (name) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategoryName(name))
        dispatch(memorySlice.actions.setCategoryName(name))
    },
    addCategory: (name) => dispatch => {
        try {
            const category = {
                id: Date.now(),
                name,
            }
            dispatch(memorySlice.actions.addCategory(category))
        } catch (e) {
            console.log(e)
        }
    },
    addItemInCategory: (name, selectedCategoryId) => dispatch => {
        try{
            const newItem = {
                id: Date.now(),
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
            dispatch(memorySlice.actions.removeCategory())
        }catch (e) {
            console.log(e)
        }
    }
}