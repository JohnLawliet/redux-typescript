import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IHomePageState } from "./types";

const initialState:IHomePageState = {
    animePage : null
}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setAnimePage: (state, action) => {
            state.animePage = action.payload
        }
    }
})

export const { setAnimePage } = HomePageSlice.actions

export const selectAnimePage = ({homePage}: RootState) => homePage.animePage

export default HomePageSlice.reducer