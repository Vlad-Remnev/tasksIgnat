import axios from "axios";

const API = 'https://neko-cafe-back.herokuapp.com'

type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: any
}

export const apiRequest = {
    postTest(success: boolean) {
        return axios.post<ResponseType>(`${API}/auth/test`, {success})
    }
}