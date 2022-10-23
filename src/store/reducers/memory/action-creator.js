import {memorySlice} from "./MemorySlice";

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
    }
}