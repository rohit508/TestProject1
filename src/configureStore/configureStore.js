import { configureStore } from '@reduxjs/toolkit'
import UsersList from '../components/Slice/createSlice'

export const store = configureStore({
  reducer: {
    users: UsersList,
  },
})