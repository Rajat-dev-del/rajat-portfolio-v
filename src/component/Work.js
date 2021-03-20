import React from "react";

import SingleProject from './SingleProject';

export default function Work(){
    return(
        <section className="Work-section">
            <h2 className="work">Work</h2>
            <div className="container">
                <SingleProject/>
            </div>
        </section>
    );
}