import Info from "../components/Browse/Info";
import Weather from "../components/Browse/Weather";
import News from "../components/Browse/News";
import Notes from "../components/Browse/Notes";
/*import { useNavigate } from "react-router-dom";*/
const Browse = ()=> {
    /*const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/movies");
    };*/
    return (
        <div   style={{ height: "100vh", width: "100vw", background: "black", paddingLeft: "3vw",paddingTop: "3vh",boxSizing: "border-box",}}>
            <div style={{ display: "flex", gap: "20px" }}>
                <div>
                    <Info/>
                    <Weather/>
                </div>
                <div>
                    <Notes/>
                </div>
                <div>
                    <News/>
                </div>
            </div>    
        </div>
            
    );
};

export default Browse;