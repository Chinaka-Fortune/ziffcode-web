import React from "react";
import classroomImages from "./aboutUsImages/classroomImages.jpeg";
import "../../../index.css"


const AboutUsComp = () => {
    return (
        <div class="container-fluid position-relative">
            <div className=" ">
                <figure className="">
                <img src={classroomImages} className="classroomImages  position-relative" alt="" />
            </figure>
            </div>

            <div className="codingToday fs-4 fw-bold text-center position-absolute mx-auto firstAnimation">
                <p>Coding Today Empowering Tommorow,</p>
                <p>Invest in your future with Ziffcode Technology</p>
            </div>
            {/* <p className="fs-5 fw-bold text-center">Invest in your future with Ziffcode Technology</p>
            <p>We offer learning programs that are designed by industry knowledge experts and co-created with leading companies.</p> */}

        
        </div>
    )
}

export default AboutUsComp;