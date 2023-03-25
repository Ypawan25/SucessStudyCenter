import "./body.css"
import chil from "./chil.jpeg"
export default function Body(){
 return(
    <div className="container" >
    <img className="images" src={chil} alt="childphoto" />
    <marquee><h4>NOW OPEN FOR REGISTRATION FOR YEAR 2023. WE ALSO PROVIDE HOME TUTOR</h4></marquee>

    <div className="details">
        <ul> Our Program Includes
            <li>Class 8 - 12</li>
            <li>Science ,Commerce, Arts</li>
            <li>Group Study</li>
            <li>Intensive Learing</li>
            <li>Excellent Teachers</li>
            <li>Individual Plans</li>
           
        </ul>
        <ul> Contact Details
            <li>Mobile : 7007753991</li>
            <li>Address : 15/220 Indra Nagar Lucknow Near Dabel College</li>
           
            <li>Er. Amit Kumar Singh</li>
           
        </ul>

    </div>
    <marquee><h4>WE TEACH AS PER ACDEMIC AND NATIONAL EDUCATION POLICY BY MINISTRY OF EDUCATION , GOVERNMENT OF INDIA</h4></marquee>
    </div >
 )   
}