/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";

const getWeatherDetail = async ()=>{
    try {
        const defaultLocation = "Delhi";
        const reqUrl = `http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=${defaultLocation}&aqi=no`
        const weatherDetail = await axios.get(reqUrl);
        return weatherDetail;
    }
    catch (erorr) {
        console.log("Error in fetching the data");
        toast.erorr("something went wrong");
    }
}

export default getWeatherDetail;