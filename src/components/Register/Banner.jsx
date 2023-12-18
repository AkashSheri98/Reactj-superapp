import styles from "./Banner.module.css";
import BackgroundImage from "../../assets/image 13.png";
const Banner = () => {
    return (
       <>
        <div className={styles.bottom}>
            <p>Discover new things on super app</p>
        </div>
        <img src={BackgroundImage}/>
       </>
    );
};
export default Banner;
