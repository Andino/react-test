import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
    name: string | null
    lastName: string | null
    id: number
}

const initialState: FormState = {
  name: null,
  lastName: null,
  id: 0
}



export const formSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clearForm: (state) => {
        Object.assign(state,initialState);
    },
    setProps: (state, action: PayloadAction<Partial<FormState>>) => {
        Object.assign(state,action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { clearForm, setProps } = formSlice.actions

export default formSlice.reducer