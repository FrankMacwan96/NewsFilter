import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import JSON from './db.json';

import NewsList from './components/news-list';
class App extends React.Component {
    
    state={
        news:JSON,
        filternews:[]
    }
    
    getKeyword = (event) =>{
        let kw = event.target.value;
        let filternews = this.state.news.filter((item) => {
            return item.title.indexOf(kw) > -1
        });
        this.setState({
            filternews
        })
    }
    render(){
        let filterednews = this.state.filternews;
        let whole = this.state.news;
    return ( <div>
        <Header kw={this.getKeyword}/>
        <NewsList n={filterednews.length === 0 ? whole : filterednews}/>
    </div>)
}
}

ReactDOM.render(<App/>,document.querySelector('#root'));