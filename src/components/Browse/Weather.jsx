/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect , useState } from "react";
/*import getWeatherDetail from "../../apis/weather.js";*/
const Weather = ()=>{
    const [time , setTime] = useState("");
    const [date , setDate] = useState("");
    const [weather , setWheather] = useState(false);
        
    /*const fetchWeatherDetails = async ()=>{
        const response = await getWeatherDetail();
        setWheather(response);
        console.log(response);
    }*/

    useEffect( ()=>{
         const fetchWeather = async ()=>{
           
            await fetch(
                "http://api.weatherapi.com/v1/current.json?key=d5f6fcf03b8e45d29d580753231712&q=Delhi&aqi=no"
            )
            .then(async (data)=>await data.json())
            .then(async (data)=>await setWheather(data))
        }
        const res=  axios.get("http://api.weatherapi.com/v1/current.json?key=d5f6fcf03b8e45d29d580753231712&q=Delhi&aqi=no");
        console.log(res.data);

        fetchWeather();
    },[]);
    
    useEffect(()=>{
        const date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12 ;
        hours = hours ? hours : 12 ; //the hours is 0 thes it is 12;
        minutes = minutes < 10 ? "0"+minutes:minutes;
        var strTime = hours + ":" + minutes + " " + ampm; 
        setTime(strTime);
    });

    useEffect(()=>{
        const today = new Date();
        var yyyy = today.getFullYear();
        let mm = today.getMonth()+1; //month start from 0
        let dd = today.getDate();
        if(mm<10) mm = "0" + mm;
        if(dd<10) dd = "0" + dd;
        const formatedToday = dd +"-"+ mm +"-"+ yyyy;
        setDate(formatedToday); 
    });


    return(
        <div  style={{width: "31vw",minHeight: "20vh",background: "#101744",borderRadius: "12px",marginTop: "5px"}}>
             <div style={{height: "7vh",background: "#FF4ADE",borderRadius: "12px",color: "white", display: "flex", justifyContent: "space-evenly", alignItems: "center",  fontSize: "2rem",}}>
                <span>{time}</span>
                <span>{date}</span>
            </div>
            <div>
                {weather ? (
                <div
                    style={{
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    }}
                >
                    {" "}
                    <div>
                        <img
                            src={weather.current.condition.icon}
                        
                            style={{ width: "50px", height: "50px" }}
                        />
                        <p>{weather.current.condition.text}</p>
                    </div>
                    <div>
                        <p
                            style={{
                            marginBottom: "12px",
                            fontSize: "24px",
                            marginTop: "10px",
                            }}
                        >
                            <span>{weather.current.temp_c}</span>C
                        </p>
                        <p>{weather.current.pressure_mb} pressure</p>
                    </div>
                    <div>
                        <p
                            style={{
                            marginBottom: "12px",
                            fontSize: "24px",
                            marginTop: "10px",
                            }}
                        >
                            {weather.current.wind_kph} wind
                        </p>
                        <p>{weather.current.humidity} humidity</p>
                    </div>
                </div>
                ) : (
                <></>
                )}
            </div>
        </div>
    )
}

export default Weather;