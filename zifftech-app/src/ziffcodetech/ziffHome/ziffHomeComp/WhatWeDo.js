import React from "react";
import ziffcodeBackground from "../homeImages/ziffcodeBackground.jpg"

const WhatWeDo = () => {
    return (
        <div className="container-fliud">
            <h3 className="fs-3 fw-bolder pt-3 ms-5 ps-5">What We Do</h3>
            <figure>
                <img src={ziffcodeBackground} className="ziffcodeBackground" alt="ziffcodeBackground"/>
            </figure>
            <div class="text-start mx-5">
                <div class="row mt-4">
                    <div class="col px-5">
                        <h4>Ziffcode Training</h4>
                        <p className="fw-light">
                        Ziffcode Technology drills you through our intensive practical training program that will usher you into a new generation of indigenous tech professionals driving innovation and development in the tech industry. If you are searching for insturctors who will train you in quality and intensive coding, search no further. Through our qualified and passionate training, WE ARE THE BEST THAT WILL MAKE YOU ONE OF THE BEST IN THE WORLD.
                        These services include mobile and web development, cybersecurity, data science and analysis, digital marketing and more.
                        </p>
                        <p className="mt-3 text-primary">Enroll Here <navLink href="#"><i class="bi bi-arrow-right-circle-fill"></i></navLink></p>

                    </div>
                    <div class="col px-5">
                        <h4 className="text-success">Talent Outsourcing</h4>
                        <p className="fw-light">We are solution providers, we use the power of innovation and intensive skills to grow your business online and offline, and make your daily life easy, convinient and effective with high quality software solutions. This services include developing highly responsive website, Mobile App,
                        </p>
                        <p className="mt-3 text-primary">Hire a Tech-savvy <navLink to ="i"><i className="bi bi-arrow-right-circle-fill"></i></navLink></p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default WhatWeDo;