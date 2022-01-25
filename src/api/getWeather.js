import axios from 'axios';
import {URL, API_KEY} from "../constants/constants";

export const getWeather = async (name) => {
    const {data} = await axios.get(URL,{
        params: {
            q: name,
            units: 'metric',
            APPID: API_KEY,
            lang: 'ru'
        }
    });
    return data
}