import React from "react";
// import React from "../homeImages/codingRemovebg.png";
import inctructor from "../homeImages/inctructor.jpg"
// import codingRemovebg from "../homeImages/codingRemovebg.png"
import cohortImage from "../homeImages/cohortImage.jpg"
import classroom from "../homeImages/classroom.jpg"

const SlideHome = () => {
    return (

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-pause='false'>
  <div class="carousel-inner">
    <div class="carousel-item LandingPageCarousel active" >
      <img src={inctructor} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={cohortImage} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={classroom} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
       
        
        
                //     <div className="ziffcodeDiv">
                //         <figure className="codingRemovebDiv p-3">
                //             <img src={codingRemovebg} className="codingRemovebg1" alt="codingRemovebg" />
                //         </figure>
                //         <div className="ziffTechLtd">
                //             <form className="row mx-1 bg-dark mt-5 border border-danger rounded-4 mb-5 py-3" style={{ width: 98 + "%" }}>
                //                 <p className="text-success fs-5 mt-5">GET STARTED</p>

                //                 <p className="fs-6">Sign In</p>
                //                 <div className="d-flex mb-5">
                //                     <input type="password" className="w-75 bg-info rounded-3" id="inputPassword" />
                //                     <button type="submit" className="btn btn-primary w-25 ms-1 rounded-3">Submit</button>
                //                 </div>
                //             </form>
                //         </div>
                //     </div>
                // </div> 

                // <div id="" class="carousel slide" data-bs-ride="carousel">
                //     <div class="carousel-inner">
                //         <div class="carousel-item active">
                //             <img src={inctructor} className="d-bloc" alt="inctructor" />
                //         </div>
                //         <div class="carousel-item">
                //             <img src={cohortImage} className="d-block" alt="cohortImage" />
                //         </div>
                //         <div class="carousel-item">
                //             <img src={classroom} className="d-block" alt="classroom" />

                //         </div>
                //     </div>
                // </div>
            // </div>
        


    )
}

export default SlideHome;