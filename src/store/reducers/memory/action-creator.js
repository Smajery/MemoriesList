import {memorySlice} from "./MemorySlice";
import defaultImg from "../../../img/default-img.png"
import {v4 as uuidv4} from 'uuid';

export const MemoryActionCreator = {
    setSelectedCategory: (selectedCategory) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategory(selectedCategory))
    },
    setSelectedCategoryName: (name) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategoryName(name))
        dispatch(memorySlice.actions.setCategoryName(name))
    },
    setSelectedCategoryItemName: (name) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategoryItemName(name))
    },
    setSelectedCategoryItemDescription: (description) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategoryItemDescription(description))
    },
    setSelectedCategoryItemRating: (rating) => dispatch => {
        dispatch(memorySlice.actions.setSelectedCategoryItemRating(rating))
    },
    setSelectedCategoryItemImg: (img) => dispatch => {
        if (img.size > 5 * 1024 * 1024) {
            alert("Файл должен быть не более 5 МБ.");
            return;
        }
        dispatch(memorySlice.actions.setSelectedCategoryItemImg(img))
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
            alert(e)
        }
    },
    addItemInCategory: (name, selectedCategoryId) => dispatch => {
        try {
            if (!name) {
                return false
            }
            const newItem = {
                id: uuidv4(),
                name,
                img: defaultImg,
                category: selectedCategoryId
            }
            dispatch(memorySlice.actions.addItemInCategory(newItem))
        } catch (e) {
            alert(e)
        }
    },
    removeCategory: () => dispatch => {
        try {
            const result = window.confirm('Ви впевнені, що хочете видалити категорію?')
            if (result) {
                dispatch(memorySlice.actions.removeCategory())
            }
        } catch (e) {
            alert(e)
        }
    },
    removeItemInCategory: (itemId) => dispatch => {
        try {
            const result = window.confirm('Ви впевнені, що хочете видалити категорію?')
            if (result) {
                dispatch(memorySlice.actions.removeItemInCategory(itemId))
            }
        } catch (e) {
            alert(e)
        }
    },
    sortSelectedCategoryItems: (sort) => async dispatch => {
        try {
            dispatch(MemoryActionCreator.setSelectedSort(sort))
            dispatch(memorySlice.actions.sortSelectedCategoryItems(sort))

        } catch (e) {
            alert(e)
        }
    }
}