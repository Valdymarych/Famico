import axios from "axios";

export const baseURL="https://famico-backend-afc81936fa26.herokuapp.com/"//"http://localhost:3001/"

const instance = axios.create({
    baseURL: baseURL
})

export default instance;