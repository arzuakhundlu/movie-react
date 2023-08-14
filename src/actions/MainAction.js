import axios from "axios";
import { main_url } from "../MAIN_API";

export const getActionMovie = async () => {
    return await axios.get(`${main_url}&query=actions`)
    .then(resp=>{
        // console.log(resp.data)
        return resp.data.results
    })
}