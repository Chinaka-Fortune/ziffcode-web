import React from "react";
import classroomImages from "./aboutUsImages/classroomImages.jpeg";


const AboutUsComp = () => {
    return(
            <div class="container-fluid">
                <figure className="">
                    <img src={classroomImages} className="classroomImages" alt="" />
                </figure>
 
                <p className="codingToday fs-4 text-center">Coding Today Empowering Tommorow</p>

                <div>
                                   </div>
            </div>    
    )
}

export default AboutUsComp;