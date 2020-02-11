import React from "react";
import {render} from "react-dom";
import "./index.css"

//⾃自定义组件
import Search from "./Search.js"
import Nav from "./Nav.js"
import Banner from "./banner"
import Article from "./Article"
import Tabbar from "./Tabbar"

let Article666=[
   {"id":1, "xinwen" : " 武汉加油！湖北加油！中国加油！"},
    {"id":2,"xinwen" : "  新闻实施更新中..."},
    {"id":3,"xinwen" : "  要成功，必先疯！！！"},
    {"id":4,"xinwen" : "  好好学习，天天向上。"},
]

let App = (
    <div>
        {/*搜索*/}
        <Search></Search>
        {/*分类导航*/}
        <Nav></Nav>
        {/*轮播图*/}
        <Banner></Banner>
        {/*文章*/}
        <Article {...Article666[0]}></Article>
        <Article {...Article666[1]}></Article>
        <Article {...Article666[2]}></Article>
        <Article {...Article666[3]}></Article>
        {/* 底部 */}
        <Tabbar></Tabbar>

    </div>
)
render(App, document.getElementById("root"))