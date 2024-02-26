// https://api.github.com/users/

import { GetService } from "../../services/GeneralService"

export const getUserslist = async () =>{
    const data  = await GetService('https://api.github.com/users')
    return data
}
export const searchuser = async (text) =>{
    const data  = await GetService(`https://api.github.com/users/${text}`)
    return data
}
export const userdetails = async (URL) =>{
    const data  = await GetService(`${URL}`)
    return data
}
