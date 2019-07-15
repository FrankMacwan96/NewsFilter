import React from 'react';
import NewsItem from './news-list-item'

const NewsList = (props) => {
      const items = props.n.map((item) => {
        return (
            <NewsItem key={item.id} news={item}/>
        )
    });
    return  (<div>{items}</div>) 
}

export default NewsList;