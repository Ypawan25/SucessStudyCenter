import "./body.css"
import chil from "./img1.jpg"
import img2 from "./img2.avif"
import img3 from "./img3.jpeg"
import img4 from "./img4.jpg"
import img6 from "./img6.jpg"
import img5 from "./img5.jpeg"
import img7 from "./img7.jpg"
export default function Body(){
 return(
    <div className="container" >
    <img className="images" src={chil} alt="childphoto" />
    <marquee><h4>NOW OPEN FOR REGISTRATION FOR YEAR 2023. WE ALSO PROVIDE HOME TUTOR</h4></marquee>
    <h5>Our Program Includes</h5>
    <div id="details">
            
        {/* <ul> Our Program Includes
            <li></li>
            <li>Science ,Commerce, Arts</li>
            <li>Group Study</li>
            <li>Intensive Learing</li>
            <li>Excellent Teachers</li>
            <li>Individual Plans</li>
           
        </ul> */}
        <div className="cards">
            <img src={img6} alt="img3"/>
            Class 6 - 12</div>  
        <div className="cards">
        <img src={img3} alt="img3"/>
        Science Commerce Arts</div>  
        <div className="cards">
        <img src={img5} alt="img3"/>
        Group Study</div>  
        <div className="cards">
        <img src={img2} alt="img3"/>
        Excellent Teachers</div>  
        <div className="cards">
        <img src={img7} alt="img3"/>
        Individual Plans</div>  
        <div className="cards">
        <img src={img4} alt="img3"/>
        Academic excellence</div>  
          


    </div>
    <marquee><h4>WE TEACH AS PER ACDEMIC AND NATIONAL EDUCATION POLICY BY MINISTRY OF EDUCATION , GOVERNMENT OF INDIA</h4></marquee>
    </div >
 )   
}