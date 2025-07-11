import React from "react";
import ziffofficeLogo from "./ziffHome/homeImages/ziffofficeLogo.jpg"

const FooterComp = () => {
    return (
        <div className="container-fluid bg-dark">
            <div class="container text-start">
                <div class="row align-items-center text-white">
                    <div class="col">
                        <figure className="mt-5">
                            <img src={ziffofficeLogo} alt="ziffofficeLogo" className="
                            footerLogo" />
                        </figure>
                        <p className="text-lighter">32/34 Centre Point/Dominion Ways, High School,</p>
                        <p className="">Paradise B/Stop, Ikotun-Idimu Road , IKotun, Lagos</p>
                        <p>+234 8032 6829 45</p>
                        <p>09121838990</p>
                        <p className="mb-3"> www.ziffcode.com.ng</p>
                        <p className="border-bottom border-danger border-2 mt-2"></p>


                    </div>
                    <div class="col">
                        <h5 >Office Hours</h5>
                        <p className="border-bottom border-primary mt-2"></p>
                        <p>Working days: Mon – Fri, 9AM – 6PM</p>
                        <p>Sat, 10AM - 5PM</p>
                    </div>
                    <div class="col">
                        <p>Our Services</p>
                        <p className="border-bottom border-primary mt-2"></p>
                        <p>Training</p>
                        <p>IT Services</p>
                        <p>Hands-on coding</p>
                        <p>Programming languages</p>
                        <p>Kids coding</p>
                    </div>
                    <div class="col">
                        <p>Portals</p>
                        <p className="border-bottom border-primary mt-2"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComp;