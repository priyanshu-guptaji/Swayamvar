import { createSlice } from "@reduxjs/toolkit";
import { UserCredentials } from "../../types/auth.d"; // Ensure this path is correct or update it to the correct path


const initialState:{user:UserCredentials|undefined}={
    user:undefined
}

export const UserSlice =createSlice(
    {
        "name":"UserSlice",
        initialState,
        reducers:{
            setUser:(state, action) => {
                state.user = action.payload
            },
            removeUser:(state) => {
                state.user = undefined
            }
        }
    }
)

export const { setUser, removeUser } = UserSlice.actions