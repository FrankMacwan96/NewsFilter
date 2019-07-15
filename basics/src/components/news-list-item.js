import React from 'react';
import classes from '../css/index.css'



const NewsItem = ({news}) =>{
   
    
    return (
        <div>
            <div className={classes.news_item}>
            <h1> {news.title}</h1>
            <div> {news.feed}</div>
            </div>
        </div>
    )
}

export default NewsItem; 
