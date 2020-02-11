import React from "react";
import "./Article.css"

function Article(props){
    console.log(props)
    return(
        <div className="article">
            <div className="article-left">
                {props.xinwen}  
            </div>
            <div className="article-right">
                <img src="2.jpg" alt=""/>
            </div>
        </div>
    )
}
export default Article