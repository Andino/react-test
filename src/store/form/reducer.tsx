import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  firstName: string | any
  lastName: string | any
  birthday: string | any
  gender: string | any
  cellphone: string | any
  homePhone: string | any
  addressHome: string | any
  profession: string | any
  incomes: string | any
  id: number
}

export interface UsersState {
  currentUser: FormState
  users: FormState[]
}

const initialState: UsersState = {
  currentUser: {
    firstName: null,
    lastName: null,
    birthday: null,
    gender: null,
    cellphone: null,
    homePhone: null,
    addressHome: null,
    profession: null,
    incomes: null,
    id: 0
  },
  users: []
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    clearForm: (state) => {
      state.currentUser = initialState.currentUser;
    },
    setProps: (state, action: PayloadAction<Partial<FormState>>) => {
      Object.assign(state.currentUser, action.payload);
      state.users.push({ ...state.currentUser, ...action.payload });
    },
    getProps: (state) => {
      return state
    }
  },
})

// Action creators are generated for each case reducer function
export const { clearForm, setProps } = formSlice.actions

export default formSlice.reducer
