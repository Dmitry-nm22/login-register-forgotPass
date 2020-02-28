import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth/'
})

export const authAPI = {
    me(email, password, rememberMe ) {
        return instance.post(`login`, {email, password, rememberMe})
    }
}