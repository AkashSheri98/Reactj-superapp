import { useState , useEffect } from "react";
/*import axios from "axios";*/

const News = ()=>{
    const [news , setNews]=useState("");
    const [time , setTime]=useState("");
    const [date , setDate]=useState("");
    console.log(news);
    useEffect(() => {
        const fetchNews = async () => {
          await fetch(
            "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4ebe140d9a8c44579c8b37565e7c490d"
          )
            .then(async (data) => await data.json())
            .then((res) => setNews(res.articles[1]));
        };
        fetchNews();
      }, []);

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
        <div style={{height:"90vh",width:"30vw",borderRadius:"12px",position:"relative",padding:"6px"}}>
            <img src={news.urlToImage} style={{ height: "60vh", borderRadius: "12px", width: "30vw" }} />
            <div style={{height:"25vh",width:"30vw",borderRadius:"12px",background:"white",fontSize:"1rem",textAlign:"justify",padding:"6px"}}>
                {news.description}
            </div>
            <div style={{position:"absolute",height:"30vh",width:"30vw",background:"rgba(0, 0, 0, 0.74)",top:"31vh",padding:"24px",boxSizing:"border-box"}}>
                <p style={{fontSize:"1.5rem",color:"white",marginBottom:"10px"}}>{news.title}</p>
                <span style={{fontSize:"1.5rem",color:"white",marginBottom:"10px"}}>{time}</span>
                <span style={{fontSize:"1.5rem",color:"white",marginBottom:"10px"}}>{date}</span>
            </div>
        </div>
    );
};

export default News;