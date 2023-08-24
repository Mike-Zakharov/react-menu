
import { createReducer } from '@reduxjs/toolkit';
import initialState from './initial-state';
import { changeLang, toggleDropdown } from './actions';




const reducer = createReducer(initialState, {
    [toggleDropdown.type]: (state) => {                 
        return {...state, dropdown: !state.dropdown }
    },
    [changeLang.type]: (state,action) => {                   // логика смены языка
        return {...state,dropdown: !state.dropdown, lang: action.payload}    
    }
})

export default reducer;