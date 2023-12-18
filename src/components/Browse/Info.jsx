/* eslint-disable react/prop-types */
import Profile from "../../assets/profileBig.png";

const Info = ()=> {
    const info = JSON.parse(window.localStorage.getItem("userData"));
    console.log(info);
    const genre = JSON.parse(window.localStorage.getItem("genres"));
    return (
        <div style={{width: "30vw",minHeight: "40vh",background: "#5746EA",borderRadius: "12px",
        padding: "6px",
        display: "flex",
        gap: "12px",}}>
            <img src={Profile} style={{height: "35vh",width: "7vw",position: "relative",top: "2vh"}} />
            <div style={{ display: "flex", flexDirection: "column"   }}>
                <p style={{ color: "white", fontSize: "1.5rem", textAlign:"left" }}>{info.name}</p>
                <p style={{ color: "white", fontSize: "1.5rem", textAlign:"left" }}>{info.mail}</p>
                <p style={{ color: "white", fontSize: "2.5rem", textAlign:"left" }}>{info.username}</p>
                <Chips categories={genre} color={"#9F94FF"} />
            </div>
        </div>
    )

}
// eslint-disable-next-line react/prop-types
const Chips = ({categories , color})=>{
    return(
        <div style={{width:"20vw"}}>
          
            {categories.map((category)=>(
                <button key={category} style={{background:`${color}`,borderRadius:"12px" ,width: "100px",
                color: "white",
                border: "none",
                padding: "6px",
                height: "30px",
                flexShrink: 0,
                margin: "10px",}}>{category}{""}
                </button>
            ))}
        </div>
    )
}
export default Info;