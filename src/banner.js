import React from "react";
import "./banner.css"

function Banner(){
    return(
        <div className="banner">
            <div className="img-list">
                <div className="box-list"><img src="5.jpg"/></div>
                <div className="box-list"><img src="2.jpg"/></div>
                <div className="box-list"><img src="3.jpg"/></div>
                <div className="box-list"><img src="4.jpg"/></div>
            </div>
            <div className="round">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

)
}
export default Banner