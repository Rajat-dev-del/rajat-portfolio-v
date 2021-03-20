import React from "react";
import profile from '../assets/img/profile.png';
export default function BannerProfile(){
    return(
        <section className="profile-section d-flex align-items-center">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between flex-lg-row flex-column-reverse">
                    <div className="">
                        <span className="hey">&lt;Hey /&gt; </span>
                        <h1>
                            Hi I am, <span > UI/UX Developer</span> <p className="d-block">Rajat Srivastava!</p> 
                        </h1>
                        <p>Currently Working in  React... </p>
                    </div>
                    <div className="mb-5 mb-lg-0">
                        <img src={profile} alt="profile"/>
                    </div>
                </div>
            </div>
        </section>

    );
}