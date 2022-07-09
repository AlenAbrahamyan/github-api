import { createSlice } from "@reduxjs/toolkit"

const initialState = { on: false }

export const lightModeSlice = createSlice({
  name: "lightMode",
  initialState,
  reducers: {
    changeLightMode: (state) => {
      state.on = !state.on
    },
  }
})

export const { changeLightMode } = lightModeSlice.actions
export const getLightMode = (state) => state.lightMode.on

export default lightModeSlice.reducer
